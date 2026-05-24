// app/api/leetcode/route.js
// Server-side API route — bypasses CORS restriction on LeetCode's GraphQL endpoint

export const revalidate = 3600; // Cache for 1 hour (ISR)

const LEETCODE_GRAPHQL = "https://leetcode.com/graphql";

const QUERY = `
  query getUserProfile($username: String!) {
    matchedUser(username: $username) {
      username
      profile {
        ranking
        reputation
        starRating
      }
      submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
          submissions
        }
      }
      badges {
        id
        displayName
        icon
      }
    }
    userContestRanking(username: $username) {
      attendedContestsCount
      rating
      globalRanking
      totalParticipants
      topPercentage
    }
  }
`;

export async function GET(request) {
  const username =
    process.env.NEXT_PUBLIC_LEETCODE_USERNAME || "suban-shaikh";

  try {
    const res = await fetch(LEETCODE_GRAPHQL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: "https://leetcode.com",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
      body: JSON.stringify({
        query: QUERY,
        variables: { username },
      }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`LeetCode API responded with status ${res.status}`);
    }

    const data = await res.json();

    if (data.errors) {
      throw new Error(data.errors[0]?.message || "LeetCode GraphQL error");
    }

    const user = data?.data?.matchedUser;
    const contest = data?.data?.userContestRanking;

    if (!user) {
      return Response.json(
        { error: "User not found on LeetCode" },
        { status: 404 }
      );
    }

    // Parse submission stats
    const stats = user.submitStatsGlobal?.acSubmissionNum || [];
    const totalSolved = stats.find((s) => s.difficulty === "All")?.count ?? 0;
    const easySolved = stats.find((s) => s.difficulty === "Easy")?.count ?? 0;
    const mediumSolved =
      stats.find((s) => s.difficulty === "Medium")?.count ?? 0;
    const hardSolved = stats.find((s) => s.difficulty === "Hard")?.count ?? 0;

    const payload = {
      username: user.username,
      ranking: user.profile?.ranking ?? 0,
      totalSolved,
      easySolved,
      mediumSolved,
      hardSolved,
      totalEasy: 858,   // approximate totals on LeetCode
      totalMedium: 1793,
      totalHard: 793,
      contestRating: Math.round(contest?.rating ?? 0),
      contestsAttended: contest?.attendedContestsCount ?? 0,
      globalRanking: contest?.globalRanking ?? 0,
      topPercentage: contest?.topPercentage
        ? Math.round(contest.topPercentage * 10) / 10
        : null,
      badges: user.badges?.length ?? 0,
      fetchedAt: new Date().toISOString(),
    };

    return Response.json(payload, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=7200",
      },
    });
  } catch (err) {
    console.error("[LeetCode API]", err.message);
    return Response.json(
      { error: err.message || "Failed to fetch LeetCode data" },
      { status: 500 }
    );
  }
}