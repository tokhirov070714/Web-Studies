import Feature from "./Feature"

function About() {

    return (

        <div className="bg-[#010018] px-10 py-15 mt-20 lg:px-40">

            <h1 className="font-bold text-left text-white text-3xl lg:text-center lg:text-5xl">

                Теперь мы
                <span className="block bg-gradient-to-tr from-[#7549f2] via-[#df58d2] to-[#ed787c] bg-clip-text text-transparent">школа нового поколения</span>

            </h1>

            <div className="mt-15 flex items-center gap-15 lg:gap-30 justify-between">

                <div className="flex flex-col gap-2 lg:gap-6">

                    <Feature img="./icons/mobile.svg" text="Войдите в аккаунт по номеру телефона" />
                    <Feature img="./icons/sound.svg" text="Просматривайте свои оценки и посещаемость" />
                    <Feature img="./icons/fire.svg" text="Зарабатывайте монеты и продвигайтесь в ТОП" />
                    <Feature img="./icons/cart.svg" text="Обменивайте монеты на призы" />

                    <div className="max-w-[280px] flex items-center gap-2 lg:gap-5">

                        <img className="w-[32px] h-[32px] lg:w-[56px] lg:h-[56px]" src="./icons/heart.svg" alt="" />

                        <p className="text-white text-xs md:text-base">Участвуйте в раздаче ценных призов</p>

                    </div>

                </div>

                <img className="w-[50%] lg:w-[512px]" src="./phonePic1.png" alt="" />

            </div>

            <div className="mt-6 flex items-center gap-10 md:gap-40 justify-between">

                <img className="w-[35%] lg:w-[357px]" src="./phonePic2.png" alt="" />

                <div className="w-full">

                    <h1 className="text-white font-bold text-base md:text-5xl">Попади в топ и забирай крутые призы</h1>

                    <img className="mt-2 md:mt-10 w-[370px] lg:w-[506px]" src="./gadgets.png" alt="" />

                    <button className="mt-7 rounded-[8px] px-4 cursor-pointer hover:opacity-80 flex items-center justify-center gap-4 w-[170px] h-[47px] md:w-[195px] md:h-[50px] bg-white">

                        <div className="w-full flex items-center justify-between">

                            <img className="w-[24px]" src="./flash-animate.svg" alt="" />

                            <p className="text-[13px] md:text-[16px] font-bold">Оставить заявку</p>

                        </div>

                    </button>

                </div>

            </div>

            <div className="mt-6 flex items-center gap-10 md:gap-30 justify-between">

                <div>

                    <h1 className="text-white font-bold text-base md:text-5xl">Обменивай монеты в центре призов</h1>

                    <img className="mt-2 md:mt-10 w-[370px] lg:w-[506px]" src="./merch.png" alt="" />

                </div>

                <img className="w-[35%] lg:w-[357px]" src="./phonePic3.png" alt="" />

            </div>

        </div>

    )

}

export default About