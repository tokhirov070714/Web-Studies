function Footer() {

    return (

        <div className="px-4 my-6 m-auto lg:max-w-[1250px] lg:mt-20">

            <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">

                <div>

                    <p className="text-sm text-[#050a41] font-bold mb-2">Навигация:</p>

                    <div>

                        <a className="block py-0.5 text-sm text-[#7d7f95] hover:text-[#2b41f0]" href="#">Главная</a>
                        <a className="block py-0.5 text-sm text-[#7d7f95] hover:text-[#2b41f0]" href="#">Курсы и цены</a>
                        <a className="block py-0.5 text-sm text-[#7d7f95] hover:text-[#2b41f0]" href="#">Запись в группу</a>

                    </div>

                </div>

                <div>

                    <p className="text-sm text-[#050a41] font-bold mb-2">Курсы:</p>

                    <div>

                        <a className="block py-0.5 text-sm text-[#7d7f95] hover:text-[#2b41f0]" href="#">Frontend-разработчик</a>
                        <a className="block py-0.5 text-sm text-[#7d7f95] hover:text-[#2b41f0]" href="#">iOS/Android-разработчик</a>
                        <a className="block py-0.5 text-sm text-[#7d7f95] hover:text-[#2b41f0]" href="#">React-разработчик</a>
                        <a className="block py-0.5 text-sm text-[#7d7f95] hover:text-[#2b41f0]" href="#">Мобилограф PRO</a>
                        <a className="block py-0.5 text-sm text-[#7d7f95] hover:text-[#2b41f0]" href="#">Интерьер-дизайнер</a>
                        <a className="block py-0.5 text-sm text-[#7d7f95] hover:text-[#2b41f0]" href="#">Графический дизайнер</a>
                        <a className="block py-0.5 text-sm text-[#7d7f95] hover:text-[#2b41f0]" href="#">SMM-специалист</a>
                        <a className="block py-0.5 text-sm text-[#7d7f95] hover:text-[#2b41f0]" href="#">Компьютерная грамотность</a>

                    </div>

                </div>

                <div>

                    <p className="text-sm text-[#050a41] font-bold mb-2">Контакты:</p>

                    <a className="py-0.5 block " href="tel:+998781137005">

                        <h1 className="text-[#050a41] text-2xl font-bold">+998 78 113-70-05</h1>

                    </a>

                    <div className="flex items-start gap-3 mt-6">

                        <img src="./guvohnoma-2.png" width={120} alt="" />
                        <img src="./guvohnoma-2.png" width={120} alt="" />

                    </div>

                </div>

                <div>

                    <p className="text-sm text-[#050a41] font-bold mb-2">Социальные сети:</p>

                    <div>

                        <a className="block py-0.5 text-sm text-[#7d7f95] hover:text-[#2b41f0]" href="#">Instagram</a>
                        <a className="block py-0.5 text-sm text-[#7d7f95] hover:text-[#2b41f0]" href="#">Facebook</a>
                        <a className="block py-0.5 text-sm text-[#7d7f95] hover:text-[#2b41f0]" href="#">TikTok</a>
                        <a className="block py-0.5 text-sm text-[#7d7f95] hover:text-[#2b41f0]" href="#">Telegram</a>
                        <a className="block py-0.5 text-sm text-[#7d7f95] hover:text-[#2b41f0]" href="#">YouTube</a>

                    </div>

                </div>

            </div>

            <span className="block mt-5">MChJ “Wepro” © 2025</span>

        </div>

    )

}

export default Footer