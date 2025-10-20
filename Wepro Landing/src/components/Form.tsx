function Form() {

    return (

        <div className="bg-[#f6f8fa] mt-9">

            <div className="px-4 py-21 m-auto md:max-w-[480px] md:w-[480px]">

                <h1 className="text-2xl md:text-4xl font-bold text-[#050a41]">Запись на бесплатный пробный урок</h1>

                <p className="mt-2 text-[#7d7f95] text-sm">Оставьте заявку, чтобы получить подробную консультацию по программе курса.</p>

                <form className="flex flex-col mt-6">

                    <label className="text-[#7d7f95] mb-2 text-sm" htmlFor="name">Ваше имя</label>
                    <input className="bg-[#fff] border border-solid border-[#b9bec7]/60 rounded-[8px] h-[44px] mb-5 px-4 text-[17px]" type="text" id="name" placeholder="Как вас зовут?" required />

                    <label className="text-[#7d7f95] mb-2 text-sm" htmlFor="phone">Номер телефона</label>
                    <input className="bg-[#fff] border border-solid border-[#b9bec7]/60 rounded-[8px] h-[44px] mb-5 px-4 text-[17px]" type="text" id="phone" placeholder="+998 " required />

                    <label className="text-[#7d7f95] mb-2 text-sm" htmlFor="username">Telegram Username</label>
                    <input className="bg-[#fff] border border-solid border-[#b9bec7]/60 rounded-[8px] h-[44px] mb-5 px-4 text-[17px]" type="text" id="username" placeholder="@" />

                    <label className="text-[#7d7f95] mb-2 text-sm" htmlFor="course">Выбранный курс</label>
                    <select className="bg-[#fff] border border-solid border-[#b9bec7]/60 rounded-[8px] h-[44px] mb-5 px-4 text-[17px]" id="course">

                        <option value="">Еще не выбрал/выбрала</option>
                        <option value="">Motion-дизайнер</option>
                        <option value="">Дизайнер соц.сетей</option>
                        <option value="">Frontend-разработчик</option>
                        <option value="">iOS/Android-разработчик</option>
                        <option value="">React-разработчик</option>
                        <option value="">Мобилограф PRO</option>
                        <option value="">Интерьер-дизайнер</option>
                        <option value="">Графический дизайнер</option>
                        <option value="">SMM-специалист</option>
                        <option value="">Компьютерная грамотность</option>
                        <option value="">Mobilografiya va SMM</option>
                    </select>

                    <button className="px-5 py-3 bg-[#2b41f0] cursor-pointer rounded-[6px] text-white transition duration-00.1s hover:bg-[#7d7f95]">Отправить</button>

                </form>

            </div>

        </div>

    )

}

export default Form