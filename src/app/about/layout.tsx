import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Nishith Sahasransu Ray | Visionary Filmmaker",
    description: "Learn more about the journey of Nishith Sahasransu Ray and the vision behind Infinity Light Drawings - creating a new wave of cinematic excellence.",
    keywords: ["Nishith Sahasransu Ray Bio", "Filmmaker Profile", "Infinity Light Drawings Vision", "Production House Founder"],
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
