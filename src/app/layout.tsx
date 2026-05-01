import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL("https://infinitylightdrawings.com"),
    title: "Infinity Light Drawings | Next-Gen Production House | Cinematic Storytelling",
    description: "Infinity Light Drawings is a bespoke production house specializing in cinematic storytelling, high-end film production, and next-gen visual aesthetics. Founded by Nishith Sahasransu Ray.",
    keywords: [
        "Infinity Light Drawings",
        "Production House",
        "Cinematic Storytelling",
        "Film Production",
        "Visual Aesthetics",
        "Creative Studio",
        "Nishith Sahasransu Ray",
        "Nishi Portfolio",
        "Independent Cinema",
        "Motion Pictures"
    ],
    authors: [{ name: "Nishith Sahasransu Ray" }],
    creator: "Nishith Sahasransu Ray",
    publisher: "Infinity Light Drawings",
    robots: {
        index: true,
        follow: true,
    },
    icons: {
        icon: "/new_logo.png",
        shortcut: "/new_logo.png",
        apple: "/new_logo.png",
    },
    openGraph: {
        title: "Infinity Light Drawings | Next-Gen Production House",
        description: "Bespoke cinematic storytelling and next-gen visual aesthetics.",
        url: "https://infinitylightdrawings.com",
        siteName: "Infinity Light Drawings",
        images: [
            {
                url: "/new_logo.png",
                width: 800,
                height: 600,
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Infinity Light Drawings | Next-Gen Production House",
        description: "Bespoke cinematic storytelling and next-gen visual aesthetics.",
        images: ["/new_logo.png"],
    },
};


export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="antialiased font-sans">
                {children}
            </body>
        </html>
    );
}
