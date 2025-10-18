function HeaderMobile() {

    return (

        <div className="shadow-xl bg-white">

            <div className="m-auto px-10 py-5 flex items-center justify-between gap-5">

                <div>

                    <img src="./logo-classic.svg" width={140} alt="" />

                </div>

                <div className="flex items-center gap-5">

                    <div className="flex items-center gap-2 cursor-pointer">

                        <p>RU</p>
                        <img src="./russia.png" width={20} alt="" />

                    </div>

                    <p className="text-sm">Личный кабинет</p>

                    <button className="w-[55px] h-[32px] flex items-center justify-center rounded-[5px] cursor-pointer px-3 py-2 bg-black text-white text-sm">Меню</button>

                </div>

            </div>

        </div>

    )

}

export default HeaderMobile