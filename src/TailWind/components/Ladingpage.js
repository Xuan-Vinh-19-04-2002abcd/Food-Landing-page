import React from 'react'
import '../../imput.css'
import{ useState,useEffect } from 'react';
export function Langdingpage () {

    const [showMenu, setShowMenu] = useState(false);
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    useEffect(() => {
        if (windowSize.width >= 768) {
            setShowMenu(true);
        } else {
            setShowMenu(false);
        }
    }, [windowSize]);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }
    return (
        <>
            <header>
                <div className='container mx-auto px-4 '>
                    <nav className='flex justify-between items-center py-5  '>
                        <div className="w-32 lg:w-full">
                            <img src="image/logo.png" alt="Error" ></img>
                        </div>

                        {showMenu && <ul className="fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center
                         bg-gray-900 bg-opacity-80 md:bg-transparent md:h-auto md:flex-row md:justify-between md:static z-30" id="menu">
                            <li className="m-12 md:m-0"><a  href='#'  className="text-amber-100 md:text-black  hover:text-red-500 trasition duration-500" >FAQ</a></li>
                            <li className="m-12 md:m-0"><a   href='#' className="text-amber-100 md:text-black hover:text-red-500 trasition duration-500" >Product</a></li>
                            <li className="m-12 md:m-0"><a   href='#' className="text-amber-100 md:text-black hover:text-red-500 trasition duration-500" >Home</a></li>
                            <li className="m-12 md:m-0"><a  href='#'   className="text-amber-100 md:text-black hover:text-red-500 trasition duration-500">Contact</a></li>
                        </ul>}
                        <div id="menu_button" onClick={toggleMenu} className="z-20 md:hidden cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"/>
                            </svg>
                        
                        </div>
                    </nav>
                </div>
            </header>
            <section>
                {/*Div này dùng để tạo background image và bên trong nó sẽ là div để chứa tiêu để của banner*/}
                <div className="relative w-full bg-no-repeat bg-cover h-custom" style={{ backgroundImage: `url("./image/banner.png")` }}>

                         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                             <p className="text-xl mb-5">Food app</p>
                             <h1 className="text-4xl font-bold max-w-2xl md:leading-relaxed md:text-5xl mb-2">Why stay hungry when
                                 you can order form Bella Onojie</h1>
                             <h4 className="text-base font-light mb-5">Download the bella onoje’s food app now on</h4>
                             <div className="flex justify-center">
                                 <button className="mx-4 border border-transparent bg-red-500 rounded-full px-10 py-3 hover:bg-transparent hover:border-white hover:transition-all">Playstore</button>
                                 <button className="mx-4 border border-transparent bg-red-500 rounded-full px-10 py-3 hover:bg-transparent hover:border-white hover:transition-all">Appstore</button>
                             </div>
                         </div>
                </div>
            </section>


            <section className="relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-2/3 -translate-y-1/3">
                    <img src="./image/Phonelogo.png" alt="Error" className="max-w-none w-screen pl-20 md:w-auto "/>
                </div>
            </section>


            <section className="pt-96 mt-28 sm:pt-40-c md:mt-0">
                <div className="container mx-auto px-4">
                    <hr className="w-4/5 mx-auto h-0.5 bg-gray-200 md:w-2/5"/>
                    <h2 className="text-4xl text-center font-semibold py-10">How the app works</h2>
                    <div className="flex flex-col justify-evenly items-center py-10 md:flex-row">
                        <div className=" mb-10   ">
                            <img src='./image/phone1.png' alt=''/>
                        </div>
                        <div className="text-center md:text-left">
                                <h3 className="text-red-500 font-semibold ">Create an account</h3>
                                <h2 className="text-4xl text-blue-900 font-bold max-w-md leading-relaxed py-5">Create/login to an existing
                                    account to get started</h2>
                                <h4 className="text-xl text-gray-500 font-light max-w-sm mx:auto md:mx-0">An account is created with your email
                                    and a desired password</h4>
                        </div>

                    </div>
                    <div className="flex flex-col justify-evenly items-center py-10 md:flex-row">
                        <div className=" mb-10  order-1 md:order-2">
                            <img src='./image/phone2.png' alt=''/>
                        </div>
                        <div className="text-center md:text-left order-2 md:order-1 ">
                            <h3 className="text-red-500 font-semibold ">Explore varieties</h3>
                            <h2 className="text-4xl text-blue-900 font-bold max-w-md leading-relaxed py-5">Shop for your favorites
                                meal as e dey hot.</h2>
                            <h4 className="text-xl text-gray-500 font-light max-w-sm mx:auto md:mx-0">Shop for your favorite meals or drinks
                                and enjoy while doing it.</h4>
                        </div>

                    </div>
                    <div className="flex flex-col justify-evenly items-center py-10 md:flex-row">
                        <div className=" mb-10   ">
                            <img src='./image/phone3.png' alt=''/>
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="text-red-500 font-semibold ">Checkout</h3>
                            <h2 className="text-4xl text-blue-900 font-bold max-w-md leading-relaxed py-5">When you done check out
                                and get it delivered.</h2>
                            <h4 className="text-xl text-gray-500 font-light max-w-sm mx:auto md:mx-0">When you done check out and get it
                                delivered with ease.</h4>
                        </div>

                    </div>


                </div>
            </section>
            <section>
                <div style={{ backgroundImage: `url("./image/banner1.png")` }} className="relative w-full h-custom bg-no-repeat bg-cover">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center  ">
                            <h1 className="text-4xl mb-5 font-bold max-w-2xl  md:leading-relaxed md:text-5xl">Download the app now</h1>
                            <p className="text-xl mb-5 font-light">Available on your favorite store. Start your premium experience now</p>
                        <div className="flex justify-center ">
                            <button className="mx-4 truncate border border-transparent bg-red-500 rounded-xl  px-8 py-3 hover:bg-transparent hover:border-white hover:transition-all">Download App</button>
                            <button className="mx-4 truncate  border border-transparent bg-red-500 rounded-xl    px-8 py-3 hover:bg-transparent hover:border-white hover:transition-all">Try free</button>
                        </div>
                    </div>
                </div>
            </section>
            {/*footer*/}
            <section>
                <div className="container mx-auto px-4">
                    <div className="flex flex-col justify-between items-center py-5 md:flex-row">
                            <div className="w-32 md:w-full">
                                <img src="./image/logo.png"/>
                            </div>
                            <div className="flex items-center mt-5  text-gray-500">
                                <a href="tel:0879364221" className="flex ms-4">
                                    <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                         stroke="currentColor" className="w-6 h-6 text-red-500 mr-2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                                    </svg>
                                    <p className='truncate text-black font-semibold'>098-936-4221</p>
                                </a>
                                <a href="mailto:xuandangvinh@gmail.com" className='flex ms-4'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                         stroke="currentColor" className="w-6 h-6 text-red-500   ">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                                    </svg>
                                    <p className='ml-2 text-black font-semibold'>vinh@gmail.com</p>
                                </a>

                            </div>

                    </div>
                    <div className="text-center ">
                        <p>Copywright@ 2020   .com</p>
                    </div>
                </div>

            </section>
        </>
    )
}