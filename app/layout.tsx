import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";

const inter = localFont({
    src: "./fonts/Inter.ttf",
});

export const metadata: Metadata = {
    title: "Noah's Temperatures",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeToggle />
                {children}
            </body>
        </html>
    );
}
