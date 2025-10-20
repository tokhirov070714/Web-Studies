import { useState } from "react"

function Question(props) {

    const [open, setOpen] = useState(false)


    function handleOpen() {

        setOpen(!open)

    }



    return (

        <div className="bg-[#f6f8fa] cursor-pointer p-3 lg:p-6 w-full relative">

            <p className="text-base lg:text-sm">{props.question}</p>

            <div onClick={handleOpen} className="absolute flex items-center justify-center lg:top-2 lg:right-2 p-2 top-[3px] right-[3px] rounded transition duration-300 ease-in-out hover:bg-blue-100">

                {open ? <img className="rotate-45" src="./icons/icon-plus2.svg" alt="" /> :
                    <img src="./icons/icon-plus2.svg" alt="" />}

            </div>

            {open ? <p className="max-w-[85%] leading-[1.2] mt-3 text-[#7d7f95] text-sm">{props.answer}</p>
                : <p className="hidden max-w-[85%] leading-[1.2] mt-3 text-[#7d7f95] text-sm">{props.answer}</p>}

        </div>

    )

}

export default Question