import { useEffect, useState } from 'react';

interface ColorCard {
    id: number;
    hex: string;
    cssCode: string;
    tailwindCode: string;
}

const ColorGenerator = () => {

    const [colorList, setColorList] = useState<{ css: string, tailwind: string, hex: string }[]>([]);
    const [copiedId, setCopiedId] = useState<string | null>(null);

    const genColor = () => {
        const ranColor = Math.floor(Math.random() * (255 * 255 * 255));
        const hexCode = ranColor.toString(16);
        const colorCode = hexCode.padEnd(6, "0");
        return `#${colorCode}`;
    }

    const createList = () => {

        const list: { css: string, tailwind: string, hex: string }[] = [];

        for (let i = 1; i <= 30; i++) {

            const color = genColor();

            list.push({
                css: `background-color: ${color}`,
                tailwind: `bg-[${color}]`,
                hex: color
            })
        }

        setColorList(list)
    }

    useEffect(() => {

        createList();

    }, [])

    const handleCopyFeedback = (id: string) => {
        navigator.clipboard.writeText(id)
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 1500);
    };

    return (
        
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">

            {/* 1. Navbar */}
            <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-800 px-6 py-4 flex items-center justify-between shadow-lg">

                {/* Logo & Title */}
                <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-500 flex items-center justify-center text-slate-900 font-bold shadow-md shadow-cyan-500/20">
                        <i className="ri-palette-fill text-xl"></i>
                    </div>

                    <div>
                        <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                            Random Color Generator
                        </h1>
                        <p className="text-xs text-slate-400 hidden sm:block">Made By Mo. Sarfraj Shaikh.</p>
                    </div>
                </div>

                {/* Generate / Refresh Button */}
                <button
                    type="button"
                    className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold text-sm transition-all duration-300 hover:opacity-95 hover:shadow-lg hover:shadow-cyan-500/25 active:scale-95 cursor-pointer"
                    onClick={() => createList()}
                >
                    <i className="ri-refresh-line text-lg group-hover:rotate-180 transition-transform duration-500"></i>
                    <span>Generate New</span>
                </button>
                
            </header>

            {/* 2. Main Color Cards Grid */}
            <main className="flex-1 max-w-7xl w-full mx-auto p-6 md:p-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-5">

                    {colorList.map((card, index) => {

                        const cssKey = card.css;
                        const twKey = card.tailwind;

                        return (
                            <div
                                key={index}
                                className="group relative bg-slate-900/60 border border-slate-800/80 rounded-2xl p-3 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-700 hover:shadow-xl hover:shadow-cyan-500/5"
                            >
                                {/* Color Display Preview */}
                                <div
                                    className="w-full h-32 sm:h-36 rounded-xl relative overflow-hidden shadow-inner transition-transform duration-300 group-hover:scale-[1.02]"
                                    style={{ backgroundColor: card.hex }}
                                >
                                    <span className="absolute top-2 right-2 bg-slate-950/60 backdrop-blur-md text-[10px] text-slate-300 font-mono px-2 py-0.5 rounded-full border border-white/10">
                                        {card.hex}
                                    </span>
                                </div>

                                {/* Card Information */}
                                <div className="flex items-center justify-between px-1">
                                    <span className="text-sm font-bold font-mono tracking-wide text-slate-200">
                                        {card.hex}
                                    </span>
                                    <span className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">
                                        {card.hex}
                                    </span>
                                </div>

                                {/* Action Copy Buttons */}
                                <div className="grid grid-cols-2 gap-2 mt-auto">

                                    {/* CSS Copy Button */}
                                    <button
                                        type="button"
                                        onClick={() => handleCopyFeedback(cssKey)}
                                        className="relative flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg bg-slate-800/80 hover:bg-cyan-500/10 hover:text-cyan-400 hover:border-cyan-500/30 border border-slate-700/50 text-slate-300 text-xs font-medium transition-all duration-200 active:scale-95 cursor-pointer"
                                    >
                                        {copiedId === cssKey ? (
                                            <span className="text-emerald-400 font-semibold flex items-center gap-1">
                                                <i className="ri-check-line text-sm"></i> Copied
                                            </span>
                                        ) : (
                                            <>
                                                <i className="ri-code-s-slash-line text-xs"></i>
                                                <span>CSS</span>
                                            </>
                                        )}
                                    </button>

                                    {/* Tailwind Copy Button */}
                                    <button
                                        type="button"
                                        onClick={() => handleCopyFeedback(twKey)}
                                        className="relative flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg bg-slate-800/80 hover:bg-cyan-500/10 hover:text-cyan-400 hover:border-cyan-500/30 border border-slate-700/50 text-slate-300 text-xs font-medium transition-all duration-200 active:scale-95 cursor-pointer"
                                    >
                                        {copiedId === twKey ? (
                                            <span className="text-emerald-400 font-semibold flex items-center gap-1">
                                                <i className="ri-check-line text-sm"></i> Copied
                                            </span>
                                        ) : (
                                            <>
                                                <i className="ri-tailwind-css-line text-xs"></i>
                                                <span>Tailwind</span>
                                            </>
                                        )}
                                    </button>

                                </div>

                            </div>
                        );

                    })}
                </div>
            </main>

        </div>
    );
};

export default ColorGenerator;