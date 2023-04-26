import "../imput.css";
import "./travel.css";
export function Travel() {
    return (
        <>
            <div className="pt-12">
                <h1 className="text-center text-black sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-5">Live anywhere</h1>
                <h2 className="text-center font-light sm:text-sm md:text-base lg:text-xl text-gray-500 mb-35">Keep calm & travel on </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 max-w-6xl mx-auto px-4 gap-y-11 lg:gap-y-0">
                    <div className="h-96 mb-7  ">
                        <img className="w-full h-full rounded-xl object-cover mb-4" src="https://images.unsplash.com/photo-1681896616404-6568bf13b022?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt=""></img>
                        <h3 className="text-center font-medium text-lg mb-1">Enjoy the greate cold</h3>
                        <span className="block text-center text-gray-400 text-sm">6,789 properties</span>
                    </div>
                    <div className="h-96 mb-7  ">
                        <img className="w-full h-full rounded-xl object-cover mb-4" src="https://images.unsplash.com/photo-1681871197336-0250ed2fe23d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt=""></img>
                        <h3 className="text-center font-medium text-lg mb-1">Enjoy the greate cold</h3>
                        <span className="block text-center text-gray-400 text-sm">6,789 properties</span>
                    </div>
                    <div className="h-96 mb-7  ">
                        <img className="w-full h-full rounded-xl object-cover mb-4" src="https://plus.unsplash.com/premium_photo-1675446536821-547dc37a78c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt=""></img>
                        <h3 className="text-center font-medium text-lg mb-1">Enjoy the greate cold</h3>
                        <span className="block text-center text-gray-400 text-sm">6,789 properties</span>
                    </div>

                </div>

            </div>
        </>
    )
}
