import { useState, useEffect } from 'react';

type GradientType = 'linear' | 'radial-circle' | 'radial-ellipse';

interface GradientCardItem {
    id: string;
    css: string;
    tailwind: string;
    color1: string;
    color2: string;
    degree: number;
}

const GradientGenerator = () => {

    const [colorList, setColorList] = useState<GradientCardItem[]>([]);
    const [gradientType, setGradientType] = useState<GradientType>('linear');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [copiedId, setCopiedId] = useState<string | null>(null);

    const genColor = () => {
        const ranColor = Math.floor(Math.random() * (255 * 255 * 255));
        const hexCode = ranColor.toString(16).padStart(6, "0");
        return `#${hexCode}`;
    };

    const createList = () => {

        const list: GradientCardItem[] = [];

        for (let i = 1; i <= 30; i++) {

            const color1 = genColor();
            const color2 = genColor();
            const deg = Math.floor(Math.random() * 360);

            let cssStr = '';
            let tailwindStr = '';

            if (gradientType === "linear") {
                cssStr = `linear-gradient(${deg}deg, ${color1}, ${color2})`;
                tailwindStr = `bg-[linear-gradient(${deg}deg,${color1},${color2})]`;
            } else if (gradientType === "radial-circle") {
                cssStr = `radial-gradient(circle, ${color1}, ${color2})`;
                tailwindStr = `bg-[radial-gradient(circle,${color1},${color2})]`;
            } else {
                cssStr = `radial-gradient(ellipse, ${color1}, ${color2})`;
                tailwindStr = `bg-[radial-gradient(ellipse,${color1},${color2})]`;
            }

            list.push({
                id: `card-${i}-${Date.now()}`,
                css: cssStr,
                tailwind: tailwindStr,
                color1,
                color2,
                degree: deg,
            });
        }

        setColorList(list);
    };

    // Re-generate list whenever gradientType changes
    useEffect(() => {
        createList();
    }, [gradientType]);

    // Clipboard Copy Logic
    const copyToClipboard = (text: string, copyKey: string) => {
        navigator.clipboard.writeText(text);
        setCopiedId(copyKey);
        setTimeout(() => setCopiedId(null), 1500);
    };

    const getDropdownLabel = () => {
        switch (gradientType) {
            case 'radial-circle':
                return 'Radial (Circle)';
            case 'radial-ellipse':
                return 'Radial (Ellipse)';
            default:
                return 'Linear Gradient';
        }
    };

    return (

        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">

            {/* 1. Navbar */}
            <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-800 px-6 py-4 flex flex-wrap items-center justify-between gap-4 shadow-lg">

                <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-500 via-purple-500 to-cyan-400 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-violet-500/20">
                        <i className="ri-magic-line text-xl text-white"></i>
                    </div>

                    <div>

                        <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                            Random Gradients Generator
                        </h1>

                        <p className="text-xs text-slate-400 hidden sm:block">
                            Made By Mo. Sarfraj Shaikh
                        </p>

                    </div>

                </div>

                <div className="flex items-center gap-3">

                    {/* Custom Dropdown */}
                    <div className="relative">

                        <button
                            type="button"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700/80 text-xs sm:text-sm font-medium text-slate-200 hover:border-violet-500/50 hover:bg-slate-800/80 transition-all cursor-pointer"
                        >
                            <i className="ri-shape-2-line text-violet-400 text-base"></i>
                            <span>{getDropdownLabel()}</span>
                            <i className={`ri-arrow-down-s-line text-slate-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}></i>
                        </button>

                        {isDropdownOpen && (

                            <div className="absolute right-0 mt-2 w-48 rounded-xl bg-slate-900 border border-slate-800 shadow-2xl py-2 z-50 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150">

                                <button
                                    type="button"
                                    onClick={() => {
                                        setGradientType('linear');
                                        setIsDropdownOpen(false);
                                    }}
                                    className={`w-full flex items-center gap-2.5 px-4 py-2 text-xs sm:text-sm text-left font-medium transition-colors cursor-pointer ${gradientType === 'linear' ? 'bg-violet-500/10 text-violet-400' : 'text-slate-300 hover:bg-slate-800/60'}`}
                                >
                                    <i className="ri-gradienter-line"></i>
                                    Linear Gradient
                                </button>

                                <button
                                    type="button"
                                    onClick={() => {
                                        setGradientType('radial-circle');
                                        setIsDropdownOpen(false);
                                    }}
                                    className={`w-full flex items-center gap-2.5 px-4 py-2 text-xs sm:text-sm text-left font-medium transition-colors cursor-pointer ${gradientType === 'radial-circle' ? 'bg-violet-500/10 text-violet-400' : 'text-slate-300 hover:bg-slate-800/60'}`}
                                >
                                    <i className="ri-checkbox-blank-circle-line"></i>
                                    Radial (Circle)
                                </button>

                                <button
                                    type="button"
                                    onClick={() => {
                                        setGradientType('radial-ellipse');
                                        setIsDropdownOpen(false);
                                    }}
                                    className={`w-full flex items-center gap-2.5 px-4 py-2 text-xs sm:text-sm text-left font-medium transition-colors cursor-pointer ${gradientType === 'radial-ellipse' ? 'bg-violet-500/10 text-violet-400' : 'text-slate-300 hover:bg-slate-800/60'}`}
                                >
                                    <i className="ri-shape-line"></i>
                                    Radial (Ellipse)
                                </button>

                            </div>
                        )}

                    </div>

                    {/* Refresh / Generate Button */}
                    <button
                        type="button"
                        onClick={createList}
                        className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold text-xs sm:text-sm transition-all duration-300 hover:opacity-95 hover:shadow-lg hover:shadow-violet-500/25 active:scale-95 cursor-pointer"
                    >
                        <i className="ri-refresh-line text-lg group-hover:rotate-180 transition-transform duration-500"></i>
                        <span className="hidden sm:inline">Generate New</span>
                    </button>

                </div>

            </header>

            {/* 2. Main Gradient Cards Grid */}
            <main className="flex-1 max-w-7xl w-full mx-auto p-6 md:p-8">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">

                    {colorList.map((card) => {

                        const cssCopyKey = `css-${card.id}`;
                        const twCopyKey = `tw-${card.id}`;

                        return (
                            <div
                                key={card.id}
                                className="group relative bg-slate-900/60 border border-slate-800/80 rounded-2xl p-3.5 flex flex-col gap-3.5 transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-700 hover:shadow-2xl hover:shadow-violet-500/10"
                            >
                                {/* Gradient Display Preview */}
                                <div
                                    className="w-full h-40 rounded-xl relative overflow-hidden shadow-inner border border-white/5 transition-transform duration-300 group-hover:scale-[1.01]"
                                    style={{ background: card.css }}
                                >
                                    <span className="absolute top-2.5 right-2.5 bg-slate-950/60 backdrop-blur-md text-[10px] text-slate-200 font-mono px-2 py-0.5 rounded-full border border-white/10">
                                        {card.color1}
                                    </span>
                                </div>

                                {/* Card Header Info */}
                                <div className="flex items-center justify-between px-0.5">
                                    <span className="text-sm font-semibold text-slate-200 font-mono">
                                        {card.color2}
                                    </span>
                                    <span className="text-[10px] text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded-md font-mono uppercase">
                                        {gradientType.split('-')[0]}
                                    </span>
                                </div>

                                {/* Action Copy Buttons */}
                                <div className="grid grid-cols-2 gap-2 mt-auto">
                                    {/* CSS Copy Button */}
                                    <button
                                        type="button"
                                        onClick={() => copyToClipboard(`background: ${card.css};`, cssCopyKey)}
                                        className="relative flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg bg-slate-800/80 hover:bg-violet-500/10 hover:text-violet-400 hover:border-violet-500/30 border border-slate-700/50 text-slate-300 text-xs font-medium transition-all duration-200 active:scale-95 cursor-pointer"
                                    >
                                        {copiedId === cssCopyKey ? (
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
                                        onClick={() => copyToClipboard(card.tailwind, twCopyKey)}
                                        className="relative flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg bg-slate-800/80 hover:bg-violet-500/10 hover:text-violet-400 hover:border-violet-500/30 border border-slate-700/50 text-slate-300 text-xs font-medium transition-all duration-200 active:scale-95 cursor-pointer"
                                    >
                                        {copiedId === twCopyKey ? (
                                            <span className="text-emerald-400 font-semibold flex items-center gap-1">
                                                <i className="ri-check-line text-sm"></i> Copied
                                            </span>
                                        ) : (
                                            <>
                                                <i className="ri-tailwindcss-line text-xs"></i>
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

export default GradientGenerator;