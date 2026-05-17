import { Metadata } from "next";

export const metadata: Metadata = {
    title: "The Collection | Award-Winning Film Portfolio",
    description: "Explore the diverse portfolio of Infinity Light Drawings, featuring award-winning films like Jengaburu, Baghuni, and Nanda Master’nka Chatasali.",
    keywords: ["Film Portfolio", "Nishith Sahasransu Ray Works", "Jengaburu", "Baghuni", "Odia Cinema Portfolio"],
};

export default function WorkLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
