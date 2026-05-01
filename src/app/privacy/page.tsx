import Navbar from "@/components/layout/Navbar";
import EndCredits from "@/components/home/EndCredits";

export default function PrivacyPage() {
    return (
        <main className="bg-black text-white min-h-screen font-sans">
            <Navbar />
            <div className="max-w-4xl mx-auto px-6 pt-32 pb-20 space-y-12">
                <header className="space-y-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Privacy Policy</h1>
                    <p className="text-amber-500 font-bold tracking-[0.3em] uppercase text-xs">Anonymity & Security First</p>
                </header>

                <div className="space-y-8 text-zinc-400 leading-relaxed font-medium">
                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white uppercase tracking-widest">1. Data Collection</h2>
                        <p>
                            We prioritize anonymity. We do not require account creation and do not store personally identifiable information (PII) such as names, addresses, or phone numbers.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white uppercase tracking-widest">2. Cookies & Local Storage</h2>
                        <p>
                            We use standard local storage browser features solely to remember your age verification status. This is to ensure you do not have to confirm your age on every visit. We do not use tracking cookies for advertising.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white uppercase tracking-widest">3. Log Files</h2>
                        <p>
                            Like most websites, our servers automatically log certain non-personal information like IP addresses and browser types for security and server health monitoring. This data is not linked to any specific individual.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white uppercase tracking-widest">4. Third Parties</h2>
                        <p>
                            We do not sell or trade your data. Any external links on our site (e.g., to social media or payment gateways) are subject to their own respective privacy policies.
                        </p>
                    </section>
                </div>
            </div>
            <EndCredits />
        </main>
    );
}
