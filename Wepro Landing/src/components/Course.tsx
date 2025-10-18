function Course(props) {

    return (

        <button className="px-2 py-1 lg:px-5 lg:py-2 text-sm lg:text-base bg-white flex items-center justify-center rounded-[8px] cursor-pointer transition duration-200 hover:bg-gray-400">

            {props.text}

        </button>

    )

}

export default Course