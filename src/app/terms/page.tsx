import Navbar from "@/components/layout/Navbar";
import EndCredits from "@/components/home/EndCredits";

export default function TermsPage() {
    return (
        <main className="bg-black text-white min-h-screen font-sans">
            <Navbar />
            <div className="max-w-4xl mx-auto px-6 pt-32 pb-20 space-y-12">
                <header className="space-y-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Terms of Service</h1>
                    <p className="text-amber-500 font-bold tracking-[0.3em] uppercase text-xs">Effective April 2026</p>
                </header>

                <div className="space-y-8 text-zinc-400 leading-relaxed font-medium">
                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white uppercase tracking-widest">1. Age Requirement</h2>
                        <p>
                            You must be at least 18 years of age, or the age of majority in your jurisdiction, whichever is older, to access the content on this website. By entering, you represent and warrant that you meet this age requirement.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white uppercase tracking-widest">2. Content Usage</h2>
                        <p>
                            The cinematic and visual content produced by Infinity Light Drawings is protected by copyright law. Unauthorized distribution, reproduction, or modification of any media on this site is strictly prohibited.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white uppercase tracking-widest">3. User Conduct</h2>
                        <p>
                            Users agree to use the site for lawful purposes only. Any attempt to scrape data, circumvent security measures, or upload malicious code will result in permanent access restriction and potential legal action.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white uppercase tracking-widest">4. Disclaimer</h2>
                        <p>
                            Content on this site is for artistic and entertainment purposes. We make no guarantees regarding the accuracy or availability of the site at all times. Use of the site is at your own risk.
                        </p>
                    </section>
                </div>
            </div>
            <EndCredits />
        </main>
    );
}
