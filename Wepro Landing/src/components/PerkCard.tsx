function PerkCard(props) {

    return (

        <div className="flex flex-col items-start gap-5 lg:flex-row">

            <img src={props.img} alt="" />

            <div className="flex flex-col">

                <h1 className="text-xl lg:text-3xl font-bold">{props.header}</h1>
                <p className="max-w-full lg:max-w-[60%] mt-1 text-sm text-gray-500">{props.text}</p>

            </div>

        </div>

    )

}

export default PerkCard