import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

import { useState } from "react"


const nameRegex = /^[A-Za-z\s]+$/;
const ageRegex = /^(1[2-9]|[2-9]\d|1[0-4]\d|150)$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[A-Z])[A-Za-z0-9!@#$%^&*]{8,}$/;


function App() {

  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [picture, setPicture] = useState("")

  const [input, setInput] = useState(false)

  let success = 0

  function handle_submit() {

    let count = 0

    if (nameRegex.test(name)) {

      count++


    }

    if (ageRegex.test(age)) {

      count++

    }

    if (passwordRegex.test(password)) {

      count++

    }

    if (emailRegex.test(email)) {

      count++

    }

    console.log(count);


    success = count

  }

  function handlePicture(e) {

    const file = e.target.files[0]

    if (file) {

      const url = URL.createObjectURL(file)

      setPicture(url)

    }


  }

  return (

    <div className="relative">

      <div className="max-w-[500px] mx-auto mt-20 my-0">

        <div className="p-5">

          <h1 className="text-center text-4xl font-bold">Sample Form</h1>

          <form onSubmit={(e) => {

            e.preventDefault()


          }} className="flex flex-col gap-10 mt-5">

            <div className="flex flex-col gap-5 mt-10">

              <div>

                <Label className="mb-2" htmlFor="name">Name <span className="text-red-500 text-base mt-1">*</span></Label>
                <Input value={name} required onChange={(e) => {



                  if (nameRegex.test(e.target.value) || e.target.value === "") {

                    setName(e.target.value)

                  }

                }} id="name" type="text" />

              </div>

              <div>

                <Label className="mb-2" htmlFor="age">Age<span className="text-red-500 text-base mt-1">*</span></Label>
                <Input value={age} required onChange={(e) => {

                  if (!(/[a-zA-Z]/.test(e.target.value)) || e.target.value === "") {

                    if (Number(e.target.value) < 150) {

                      setAge(e.target.value)

                    }

                  }
                }} id="age" type="text" />

                {

                  (!(Number(age) >= 12) && age != "") ? <p className="text-sm mt-2 ml-1 text-red-500">Age must be at least 12</p> : ""

                }

                {(age[0] == "0" ? <p className="text-sm mt-2 ml-1 text-red-500">Age can't contain 0 a the beginning</p> : "")}

              </div>

              <div>

                <Label className="mb-2" htmlFor="mail">Email <span className="text-red-500 text-base mt-1">*</span></Label>
                <Input value={email} required onChange={(e) => {

                  setEmail(e.target.value)


                }} id="mail" type="email" />

                {

                  email != "" && !(emailRegex.test(email)) ? <p className="text-sm mt-2 ml-1 text-red-500">Email is not in the correct format</p> : ""

                }

              </div>

              <div>

                <Label className="mb-2" htmlFor="password">Password <span className="text-red-500 text-base mt-1">*</span></Label>
                <Input value={password} required onChange={(e) => {

                  setPassword(e.target.value)
                  setInput(true)

                }} id="password" type="password" />

                {

                  (input && !(password.length >= 8)) && password != "" ? <p className="text-sm mt-2 ml-1 text-red-500">Password must contain at least 8 characters</p> : ""

                }

                {

                  (input && !(/[A-Z]/.test(password))) && password != "" ? <p className="text-sm mt-2 ml-1 text-red-500">Password must contain at least one capital letter</p> : ""

                }

              </div>

              <div>

                <Label className="mb-2" htmlFor="picture">Picture</Label>
                <Input onChange={(e) => handlePicture(e)} id="picture" type="file" />

              </div>

              {

                picture ? <img src={picture} alt="" /> : ""

              }

            </div>

            <Button
              type="submit"
              variant="outline"
              onClick={
                () => {

                  handle_submit()

                  if (success > 3) {

                    toast.promise<{ name: string }>(
                      () =>
                        new Promise((resolve) =>
                          setTimeout(() => resolve({ name: "Event" }), 1000)
                        ),
                      {
                        loading: "Loading...",
                        success: () => `Successfully Submitted`,
                        error: "Error",
                      }
                    )

                    setName("")
                    setAge("")
                    setEmail("")
                    setPassword("")

                    if (picture) {

                      setPicture("")

                    }

                  } else {

                    toast.error("Invalid data input")

                  }

                }

              }

            >Button</Button>

          </form>

        </div>

      </div>

    </div >

  )
}

export default App
