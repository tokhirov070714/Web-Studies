function Location() {

    return (

        <div className="py-2 px-4">

            <div className="m-auto mt-20 max-w-[1250px] lg:max-w-[900px]">

                <h1 className="text-2xl text-[#050a41] font-bold lg:text-center lg:text-4xl">Где мы находимся</h1>

                <p className="mt-3 text-[#7d7f95] text-sm max-w-[80%] lg:text-center lg:mx-auto lg:text-base lg:w-[70%]">Современные аудитории оснащены всем необходимым для эффективного обучения. Приглашаем вас посетить наш центр и увидеть все своими глазами!</p>

                <div className="mt-4 lg:mt-7 w-full relative rounded-[20px]">

                    <a className="w-full h-[320px] lg:h-[420px] flex flex-col justify-end p-4 lg:p-9 rounded-[20px] transition duration-300 ease-in-out hover:translate-y-[-5px]" href="#">

                        <img className="w-full h-full rounded-[20px] z-[0] absolute top-0 right-0 left-0 bottom-0 object-cover" src="./branch.png" alt="" />

                        <div className="absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black/100 to-black/0 z-[1] rounded-[20px]"></div>

                        <div className="z-[3] lg:flex lg:justify-between">

                            <div>

                                <span className="block text-white text-2xl font-bold lg:text-4xl">Wepro «Вечный Огонь»</span>
                                <span className="block text-[#7d7f95] text-xs ml-1">ул. Мирзо Улугбека 35. Напротив "ВечногоОгня"</span>

                            </div>

                            <button className="bg-[#fff] cursor-pointer mt-5 p-2 flex items-center justify-center gap-1 rounded-[6px] transition duration-00.1s hover:opacity-60">

                                <img className="w-[24px] h-[24px]" src="./icons/location.svg" alt="" />

                                <p className="text-sm text-[#050a41] font-bold">Yandex Карты</p>

                            </button>

                        </div>

                    </a>


                </div>

            </div>

        </div>

    )

}

export default Location