import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    return (

        <div
            className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6 select-none"
        >
            
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent mb-5">
                    Design Tools
                </h1>
                <p className="text-slate-400 mt-2 text-base md:text-lg">
                    Apne projects ke liye stunning colors aur gradients generate karein
                </p>
            </div>

            {/* Cards Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">

                {/* Card 1: Random Color Generator */}
                <div
                    onClick={() => navigate('/color-generator')}
                    className="group relative cursor-pointer overflow-hidden rounded-2xl bg-slate-800/80 p-8 border border-slate-700/50 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-500/50 active:scale-95"
                >
                    {/* Subtle Glow Background Effect */}
                    <div className="absolute -right-10 -bottom-10 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-300" />

                    <div className="flex items-center justify-between mb-6">
                        <div className="p-4 bg-cyan-500/10 text-cyan-400 rounded-xl group-hover:bg-cyan-500 group-hover:text-slate-900 transition-all duration-300">
                            <i className="ri-palette-line text-3xl"></i>
                        </div>
                        <i className="ri-arrow-right-line text-2xl text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-2 transition-all duration-300"></i>
                    </div>

                    <h2 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                        Color Generator
                    </h2>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        One click me random color combinations aur HEX/RGB codes create karein.
                    </p>
                </div>

                {/* Card 2: Gradient Generator */}
                <div
                    onClick={() => navigate('/gradient-generator')}
                    className="group relative cursor-pointer overflow-hidden rounded-2xl bg-slate-800/80 p-8 border border-slate-700/50 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/20 hover:border-violet-500/50 active:scale-95"
                >
                    {/* Subtle Glow Background Effect */}
                    <div className="absolute -right-10 -bottom-10 w-36 h-36 bg-violet-500/10 rounded-full blur-2xl group-hover:bg-violet-500/20 transition-all duration-300" />

                    <div className="flex items-center justify-between mb-6">
                        <div className="p-4 bg-violet-500/10 text-violet-400 rounded-xl group-hover:bg-violet-500 group-hover:text-slate-900 transition-all duration-300">
                            <i className="ri-magic-line text-3xl"></i>
                        </div>
                        <i className="ri-arrow-right-line text-2xl text-slate-500 group-hover:text-violet-400 group-hover:translate-x-2 transition-all duration-300"></i>
                    </div>

                    <h2 className="text-2xl font-bold mb-2 group-hover:text-violet-400 transition-colors">
                        Gradient Generator
                    </h2>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Smooth multi-color gradients generate karein aur CSS code direct copy karein.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Home;