import type { Metadata } from "next";
import "./globals.css";
import JsonLd from "@/components/seo/JsonLd";
import SecurityLayer from "@/components/SecurityLayer";


export const metadata: Metadata = {
    metadataBase: new URL("https://infinitylightdrawings.com"),
    title: {
        default: "Infinity Light Drawings | Premium Film Production House Mumbai & Odisha",
        template: "%s | Infinity Light Drawings"
    },
    description: "Infinity Light Drawings is an award-winning film production house by Nishith Sahasransu Ray. We specialize in cinematic storytelling, independent cinema, ad films, and next-gen visual aesthetics in Mumbai and Odisha.",
    keywords: [
        "Infinity Light Drawings",
        "Best Production House India",
        "Film Production House Mumbai",
        "Film Production Odisha",
        "Nishith Sahasransu Ray",
        "Independent Filmmaking India",
        "Cinematic Storytelling",
        "Ad Film Production House",
        "Documentary Filmmaker India",
        "Bespoke Film Production",
        "Odia Film Industry",
        "Creative Visual Aesthetics",
        "Professional Film Studio Mumbai"
    ],
    authors: [{ name: "Nishith Sahasransu Ray" }],
    creator: "Nishith Sahasransu Ray",
    publisher: "Infinity Light Drawings",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
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
        title: "Infinity Light Drawings | Premium Film Production House Mumbai & Odisha",
        description: "Experience world-class cinematic storytelling and next-gen visual aesthetics with Nishith Sahasransu Ray.",
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
        title: "Infinity Light Drawings | Premium Film Production House Mumbai & Odisha",
        description: "Experience world-class cinematic storytelling and next-gen visual aesthetics with Nishith Sahasransu Ray.",
        images: ["/new_logo.png"],
    },
    verification: {
        google: "WlAysyop7pPCiNF2zw1hLCYKwbEkgCIdLebxpMWqUBA",
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
                <SecurityLayer />
                <JsonLd />
                {children}
            </body>
        </html>
    );
}
