"use client";

interface LogoProps {
    className?: string;
    iconClassName?: string;
    textClassName?: string;
}

export default function Logo({ className = "", iconClassName = "w-[80px] md:w-[120px]", textClassName = "text-2xl md:text-3xl" }: LogoProps) {
    return (
        <div className={`flex flex-col items-center justify-center select-none ${className}`}>
            <svg viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${iconClassName} text-white mb-2 h-auto`}>
                <defs>
                    <mask id="film-mask">
                        <rect x="0" y="0" width="200" height="100" fill="white" />
                        <g transform="translate(100, 85) rotate(30) translate(-25, -60)">
                            {/* Left holes */}
                            <rect x="2" y="4" width="6" height="6" fill="black" rx="1" />
                            <rect x="2" y="14" width="6" height="6" fill="black" rx="1" />
                            <rect x="2" y="24" width="6" height="6" fill="black" rx="1" />
                            <rect x="2" y="34" width="6" height="6" fill="black" rx="1" />
                            <rect x="2" y="44" width="6" height="6" fill="black" rx="1" />
                            <rect x="2" y="54" width="6" height="6" fill="black" rx="1" />

                            {/* Right holes */}
                            <rect x="42" y="4" width="6" height="6" fill="black" rx="1" />
                            <rect x="42" y="14" width="6" height="6" fill="black" rx="1" />
                            <rect x="42" y="24" width="6" height="6" fill="black" rx="1" />
                            <rect x="42" y="34" width="6" height="6" fill="black" rx="1" />
                            <rect x="42" y="44" width="6" height="6" fill="black" rx="1" />
                            <rect x="42" y="54" width="6" height="6" fill="black" rx="1" />

                            {/* Center frame */}
                            <rect x="14" y="6" width="22" height="48" fill="black" rx="1" />
                        </g>
                    </mask>
                </defs>
                <g mask="url(#film-mask)">
                    {/* Horizon Arc */}
                    <path d="M 10 90 Q 100 60 190 90 L 185 96 Q 100 70 15 96 Z" fill="currentColor" />
                    {/* Film Strip */}
                    <g transform="translate(100, 85) rotate(30) translate(-25, -60)">
                        <rect x="0" y="0" width="50" height="60" fill="currentColor" rx="2" />
                    </g>
                </g>
            </svg>

            <div className="flex flex-col items-center text-center">
                <span
                    className={`${textClassName} font-black uppercase tracking-tighter leading-none text-white block mt-2`}
                    style={{ fontFamily: 'Impact, Arial Black, sans-serif', transform: 'scaleY(1.3)' }}
                >
                    Infinity Light
                </span>
                <span
                    className={`${textClassName} font-black uppercase tracking-tighter leading-none text-white block mt-3`}
                    style={{ fontFamily: 'Impact, Arial Black, sans-serif', transform: 'scaleY(1.3)' }}
                >
                    Drawings
                </span>
                <span className="text-[7px] md:text-[9px] font-bold uppercase tracking-[0.2em] mt-5 text-white/80">
                    Giving Emotion To Motion
                </span>
            </div>
        </div>
    );
}
