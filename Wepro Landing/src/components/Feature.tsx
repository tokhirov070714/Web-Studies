function Feature(props) {

    return (

        <div className="max-w-[330px] lg:max-w-[280px] border-b border-b-[#323156] pb-3 flex items-center gap-2 lg:gap-5">

            <img className="w-[32px] h-[32px] lg:w-[56px] lg:h-[56px]" src={props.img} alt="" />

            <p className="text-white text-xs md:text-base">{props.text}</p>

        </div>

    )

}

export default Feature