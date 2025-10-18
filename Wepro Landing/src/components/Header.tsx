function Header() {

    return (
        
        <div className="w-full flex items-center gap-10 justify-between">

            <div className="flex items-center gap-10">

                <div className="min-w-[120px] min-h-[32px] bg-[url('./logo-white.svg')] bg-cover bg-center"></div>

                <div className="flex items-center gap-5 text-white">

                    <a className="cursor-pointer" href="#">Главная</a>
                    <a className="cursor-pointer" href="#">Курсы и цены</a>
                    <a className="cursor-pointer" href="#">Запись в группу</a>
                    <a className="cursor-pointer" href="#">Партнерам</a>

                </div>

            </div>

            <div className="flex items-center gap-6">

                <h1 className="text-white font-bold cursor-pointer">RU</h1>

                <h1 className="text-white">+998 78 113-70-05</h1>

                <button className="min-w-[160px] min-h-[45px] rounded-[8px] cursor-pointer bg-white hover:opacity-80">Личный кабинет</button>

            </div>

        </div>

    )

}

export default Header