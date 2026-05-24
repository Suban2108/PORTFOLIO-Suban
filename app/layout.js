import "./globals.css";

export const metadata = {
  title: "Abdul Suban | Full Stack Developer",
  description:
    "Portfolio of Abdul Suban Mohd Ismail Shaikh — Full Stack Developer skilled in React, Next.js, Node.js, Flask, MongoDB and more.",
  keywords: [
    "Abdul Suban",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Portfolio",
    "Mumbai",
  ],
  authors: [{ name: "Abdul Suban" }],
  openGraph: {
    title: "Abdul Suban | Full Stack Developer",
    description:
      "Portfolio of Abdul Suban — building scalable web applications.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </head>
      <body className="noise dot-grid">
          {children}
      </body>
    </html>
  );
}
