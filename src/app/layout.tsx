import { Navigation } from "@/components/Navigation";
import "./globals.css";
import { Inter } from "next/font/google";
import "highlight.js/styles/github.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Seb Lee",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isSmolModeEnabled = process.env.NEXT_PUBLIC_SMOL_MODE;

  return (
    <html lang="en">
      <body
        className={`${inter.className} p-8 lg:px-24 max-w-screen-xl mx-auto h-screen`}
      >
        {!isSmolModeEnabled && (
          <header>
            <Navigation />
          </header>
        )}
        <main className="h-full pt-16">{children}</main>
      </body>
    </html>
  );
}
