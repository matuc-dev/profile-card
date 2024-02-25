import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themes/theme-provider";

const inter = Poppins({ weight: ["200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://matucard.vercel.app"),
  title: "Matu Profile Card",
  description: "Created By @mc_dev1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
