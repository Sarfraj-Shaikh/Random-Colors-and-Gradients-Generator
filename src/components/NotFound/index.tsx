import { Link, useLocation } from "react-router-dom";

const NotFound = () => {

    const location = useLocation();

    return (
        <section className="w-full min-h-dvh flex justify-center items-center bg-slate-50 p-4">

            <div className="w-full max-w-sm sm:max-w-md bg-white p-8 rounded-2xl shadow-md flex flex-col items-center text-center gap-5">

                {/* 404 Icon & Badge */}
                <div className="relative flex items-center justify-center">
                    <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center text-rose-500">
                        <i className="ri-error-warning-line text-4xl"></i>
                    </div>
                </div>

                {/* Error Message */}
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-bold text-slate-800">Page Not Found</h1>

                    <p className="text-slate-500 text-sm leading-relaxed">
                        Aapne jo path dala hai <span className="font-mono bg-slate-100 text-rose-500 px-2 py-0.5 rounded border border-slate-200">{location.pathname}</span> galat hai.
                    </p>
                </div>

                {/* Info Card */}
                <div
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-left flex items-start gap-3"
                >
                    <i className="ri-information-line text-slate-400 text-lg mt-0.5"></i>
                    <p className="text-sm text-slate-600 leading-relaxed">
                        Aap URL me <span className="font-semibold text-slate-900">/color-generator</span> ya <span className="font-semibold text-slate-900">/gradient-generator</span> route dalkar outputs dekh sakte hain.
                    </p>

                </div>

                {/* Quick Action Button */}
                <Link
                    to="/"
                    className="w-full sm:w-auto px-6 py-2.5 bg-slate-900 text-white rounded-xl flex items-center justify-center gap-2 hover:bg-slate-800 transition-all font-medium active:scale-95 text-sm"
                >
                    <span>Go to Home</span>
                    <i className="ri-arrow-right-line text-base"></i>
                </Link>

            </div>

        </section>
    );
};

export default NotFound;