import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Collaborate with Infinity Light Drawings",
    description: "Get in touch with Infinity Light Drawings for film production, collaborations, and inquiries. Offices in Mumbai and Odisha.",
    keywords: ["Contact Infinity Light Drawings", "Film Production Inquiry", "Collaborate with Filmmaker", "Mumbai Office Contact"],
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
