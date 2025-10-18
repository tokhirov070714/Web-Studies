import Header from "./Header";
import HeaderMobile from "./HeaderMobile";
import Course from "./Course";
import { BsLightningChargeFill } from "react-icons/bs";

function Promo() {


    return (

        <>

            <div className="block sticky top-0 lg:hidden">

                <HeaderMobile />

            </div>

            <div className="p-2">

                <div className="m-auto rounded-xl bg-gradient-to-r from-gray-900 via-gray-800 to-blue-900 p-4">

                    <div className="px-7 py-1 lg:px-15">

                        <div className="hidden lg:flex">

                            <Header />

                        </div>

                        <h1 className="max-w-1/2 mt-15 text-3xl lg:text-5xl text-white">Авторские курсы от специалистов IT & Digital</h1>

                        <div className="flex items-center justify-between md:justify-start mt-8 gap-5">

                            <div className="flex flex-col">

                                <h1 className="font-bold text-white text-3xl lg:text-4xl">3500+</h1>
                                <p className="max-w-[60%] text-gray-300 mt-2 text-sm lg:text-base">выпускников за 4 года работы</p>

                            </div>

                            <div className="flex flex-col">

                                <h1 className="font-bold text-white text-3xl lg:text-4xl">76.8%</h1>
                                <p className="max-w-[60%] text-gray-300 mt-2 text-sm lg:text-base">студентов находят работу после обучения</p>

                            </div>

                            <div className="hidden flex-col md:flex">

                                <h1 className="font-bold text-white text-3xl lg:text-4xl">46.8 %</h1>
                                <p className="max-w-[60%] text-gray-300 mt-2 text-sm lg:text-base">начинают зарабатывать во время обучения</p>

                            </div>

                        </div>

                        <div className="max-w-[800px] mt-10 flex flex-wrap gap-2">

                            <button className="px-2 py-1 lg:px-5 lg:py-2 text-sm lg:text-base bg-yellow-300 flex items-center justify-center rounded-[8px] cursor-pointer transition duration-200 hover:bg-gray-400">

                                Бесплатная консультация

                            </button>

                            <button className="px-2 py-1 lg:px-5 lg:py-2 text-sm lg:text-base bg-white flex items-center justify-center gap-2 rounded-[8px] cursor-pointer transition duration-200 hover:bg-gray-400">

                                <div className="w-[22px] h-[22px] p-1 rounded-full flex items-center justify-center bg-yellow-300">
                                    <BsLightningChargeFill />
                                </div>
                                <p>Motion-дизайнер</p>

                            </button>
                            <Course text="Дизайнер соцсетей" />
                            <Course text="Frontend-разработчик" />
                            <Course text="iOS/Android-разработчик" />
                            <Course text="React-разработчик" />
                            <Course text="Мобилограф PRO" />
                            <Course text="Интерьер-дизайнер" />
                            <Course text="Графический дизайнер" />
                            <Course text="SMM-специалист" />
                            <Course text="Компьютерная грамотность" />

                        </div>

                    </div>

                </div>

            </div>

        </>

    )

}

export default Promo;