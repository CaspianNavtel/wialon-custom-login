

const LoginIllustration = () => {
    return (
        <div className="w-full h-full flex items-center justify-center relative">
            {/* Floating Elements */}
            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white/30 rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white/40 rounded-full animate-pulse delay-300"></div>
            <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-white/20 rounded-full animate-pulse delay-700"></div>

            {/* Main Content */}
            <div className="text-center z-10">
                <div className="mb-6">
                    {/* Icon Container */}
                    <div className="w-20 h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 mb-4">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                </div>

                <h3 className="text-white text-3xl font-bold mb-3 drop-shadow-lg">Secure Access</h3>
                <p className="text-white/90 text-lg drop-shadow-md mb-2">Your digital workspace awaits</p>
                <p className="text-white/70 text-sm drop-shadow-sm">Protected by enterprise-grade security</p>
            </div>

            {/* Decorative Gradient Circles */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-tr from-white/15 to-transparent rounded-full blur-lg"></div>
        </div>
    );
};

export default LoginIllustration;