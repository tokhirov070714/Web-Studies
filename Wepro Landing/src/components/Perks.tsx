import PerkCard from "./PerkCard"

function Perks() {

    return (

        <div className="py-2 px-4">

            <div className="m-auto mt-20 max-w-[1000px]">

                <h1 className="font-bold text-left text-2xl lg:text-center lg:text-4xl">

                    Идеальные условия для твоего
                    <span className="block bg-gradient-to-tr from-[#7549f2] via-[#df58d2] to-[#ed787c] bg-clip-text text-transparent">успешного образования</span>

                </h1>

                <div className="mt-10 grid grid-cols-2 gap-10">

                    <PerkCard img="./perks/tv.svg" header="Мощные компьютеры" text="Оборудованные классы для комфортного образовательного процесса." />
                    <PerkCard img="./perks/phone.svg" header="Мобильное приложение" text="Войдите в личный кабинет через веб-приложение для студентов." />
                    <PerkCard img="./perks/people.svg" header="Лучшие специалисты" text="Мы гордимся тем, что работаем с профессионалами, которые делают процесс обучения увлекательным и эффективным." />
                    <PerkCard img="./perks/screens.svg" header="Бесплатный коворкинг" text="Приходите в свободное время и выполняйте задания в нашем центре. Доступно бесплатно для всех учащихся." />
                    <PerkCard img="./perks/gifts.svg" header="Призы за обучение" text="Получайте такие призы как Яндекс Станция, Apple AirPods или Mi Band за высокие оценки." />

                </div>

            </div>

        </div>

    )

}

export default Perks