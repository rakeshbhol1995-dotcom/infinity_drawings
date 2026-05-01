import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL("https://infinitylightdrawings.com"),
    title: {
        default: "Infinity Light Drawings | Bespoke Film Production House",
        template: "%s | Infinity Light Drawings"
    },
    description: "Infinity Light Drawings is a premium film production house by Nishith Sahasransu Ray. Specializing in cinematic storytelling, independent cinema, and next-gen visual aesthetics.",
    keywords: [
        "Infinity Light Drawings",
        "Best Production House India",
        "Cinematic Storytelling",
        "Film Production Odisha",
        "Nishith Sahasransu Ray",
        "Independent Filmmaking",
        "Creative Visual Aesthetics",
        "Professional Film Studio",
        "Documentary Filmmaker India"
    ],
    authors: [{ name: "Nishith Sahasransu Ray" }],
    creator: "Nishith Sahasransu Ray",
    publisher: "Infinity Light Drawings",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL("https://infinitylightdrawings.com"),
    alternates: {
        canonical: "/",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: [
            { url: "/new_logo.png" },
            { url: "/new_logo.png", sizes: "32x32", type: "image/png" },
        ],
        apple: [
            { url: "/new_logo.png", sizes: "180x180", type: "image/png" },
        ],
    },
    openGraph: {
        title: "Infinity Light Drawings | Bespoke Film Production House",
        description: "Experience cinematic storytelling and next-gen visual aesthetics with Nishith Sahasransu Ray.",
        url: "https://infinitylightdrawings.com",
        siteName: "Infinity Light Drawings",
        images: [
            {
                url: "/new_logo.png",
                width: 1200,
                height: 630,
                alt: "Infinity Light Drawings Logo",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Infinity Light Drawings | Bespoke Film Production House",
        description: "Experience cinematic storytelling and next-gen visual aesthetics with Nishith Sahasransu Ray.",
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
