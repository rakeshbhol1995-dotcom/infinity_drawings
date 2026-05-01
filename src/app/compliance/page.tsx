import Navbar from "@/components/layout/Navbar";
import EndCredits from "@/components/home/EndCredits";

export default function CompliancePage() {
    return (
        <main className="bg-black text-white min-h-screen font-sans">
            <Navbar />
            <div className="max-w-4xl mx-auto px-6 pt-32 pb-20 space-y-12">
                <header className="space-y-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Legal Compliance</h1>
                    <p className="text-amber-500 font-bold tracking-[0.3em] uppercase text-xs">Record-Keeping Requirement</p>
                </header>

                <div className="space-y-8 text-zinc-400 leading-relaxed font-medium">
                    <section className="space-y-4 text-center pb-10 border-b border-white/5">
                        <h2 className="text-2xl font-black text-white uppercase tracking-tighter">18 U.S.C. § 2257 STATEMENT</h2>
                        <p className="text-sm">
                            Infinity Light Drawings is not a "primary producer" as defined in 18 U.S.C. § 2257.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white uppercase tracking-widest">Compliance Overview</h2>
                        <p>
                            All models, actors, and performers depicted in visual media on this website were 18 years of age or older at the time of the creation of the material. All content is produced and curated in compliance with international laws regarding digital media production.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white uppercase tracking-widest">Exemptions</h2>
                        <p>
                            Material found on this site may be exempt from the record-keeping requirements of 18 U.S.C. § 2257 and 28 C.F.R. § 75 because it consists of material that does not contain depictions of "actual sexually explicit conduct" but rather artistic cinematic portrayals.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white uppercase tracking-widest">DMCA Policy</h2>
                        <p>
                            Infinity Light Drawings respects the intellectual property rights of others. If you believe your copyrighted work has been infringed, please provide a formal notice to our contact email for immediate review and removal.
                        </p>
                    </section>
                </div>
            </div>
            <EndCredits />
        </main>
    );
}
