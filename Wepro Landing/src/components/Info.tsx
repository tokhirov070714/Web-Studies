function Info() {

    return (

        <div className="py-2 px-4">

            <div className="m-auto mt-20 max-w-[1250px]">

                <h1 className="font-bold text-2xl lg:text-4xl lg:text-center">О нас в цифрах</h1>

                <div className="grid grid-cols-2 mt-10 items-center lg:grid-cols-3 gap-3 lg:gap-5">

                    <video className="w-full h-[200px] lg:h-full col-span-2 lg:col-span-1 mt-5 lg:mt-0 rounded-xl object-cover" muted autoPlay loop playsInline src="./videos/reel.mp4">

                        <source src="./videos/reel.mp4" type="video/mp4" />

                    </video>

                    <div className="grid auto-rows-fr gap-3 h-full">

                        <div className="flex flex-col justify-center items-start rounded-xl h-full p-4 lg:p-7 bg-[#f6f8fa]">

                            <span className="text-[#050a41] mb-3 block text-2xl lg:text-4xl font-bold">3000+</span>
                            <span className="text-[#7d7f95] text-xs lg:text-sm">выпускников за 5 лет работы</span>

                        </div>

                        <div className="flex flex-col justify-center items-start rounded-xl h-full p-4 lg:p-7 bg-[#f6f8fa]">

                            <span className="text-[#050a41] mb-3 block text-2xl lg:text-4xl font-bold">70%</span>
                            <span className="text-[#7d7f95] text-xs lg:text-sm">студентов находят работу после обучения</span>

                        </div>


                        <div className="flex flex-col justify-center items-start rounded-xl h-full p-4 lg:p-7 bg-[#f6f8fa]">

                            <span className="text-[#050a41] mb-3 block text-2xl lg:text-4xl font-bold">24/7</span>
                            <span className="text-[#7d7f95] text-xs lg:text-sm">доступ к учебному материалу в группе</span>

                        </div>


                    </div>

                    <div className="grid auto-rows-fr gap-3 h-full">

                        <div className="flex flex-col justify-center items-start rounded-xl h-full p-4 lg:p-7 bg-[#f6f8fa]">

                            <h1 className="text-[#050a41] mb-3 text-2xl lg:text-4xl font-bold">73 отзыва</h1>

                            <img className="h-[20px]" src="./companyLogos/yandex.svg" alt="" />

                        </div>

                        <div className="flex flex-col justify-center items-start rounded-xl h-full p-4 lg:p-7 bg-[#f6f8fa]">

                            <h1 className="text-[#050a41] mb-3 text-2xl lg:text-4xl font-bold">16 отзывов</h1>

                            <img className="h-[20px]" src="./companyLogos/google.svg" alt="" />

                        </div>

                        <div className="flex flex-col justify-center items-start rounded-xl h-full p-4 lg:p-7 bg-[#f6f8fa]">

                            <h1 className="text-[#050a41] mb-3 text-2xl lg:text-4xl font-bold">15 отзывов</h1>

                            <img className="h-[20px]" src="./companyLogos/youtube.svg" alt="" />

                        </div>

                    </div>

                </div>

            </div>

        </div>



    )


}

export default Info


