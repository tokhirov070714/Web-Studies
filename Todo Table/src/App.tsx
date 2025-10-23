import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { Button } from "@/components/ui/button"
import { Edit, Trash } from "lucide-react"
import { useState } from "react";


type Todo = {

  id: number;
  title: string;
  deadline: string;
  status: string;

}


function App() {

  const [tasks, setTasks] = useState<Array<Todo>>([
    {
      id: 1,
      title: "Complete project proposal",
      deadline: "09:30 AM",
      status: "In Progress",
    },
    {
      id: 2,
      title: "Review client feedback",
      deadline: "11:00 AM",
      status: "Completed",
    },
    {
      id: 3,
      title: "Prepare presentation slides",
      deadline: "02:15 PM",
      status: "Pending",
    },
    {
      id: 4,
      title: "Team meeting summary",
      deadline: "04:45 PM",
      status: "Completed",
    },
    {
      id: 5,
      title: "Update documentation",
      deadline: "06:00 PM",
      status: "In Progress",
    },
  ])

  const [title, setTitle] = useState("")
  const [deadline, setDeadline] = useState("")
  const [status, setStatus] = useState("")


  function updateTasks({ theTask }) {

    setTasks([...tasks, theTask])

  }

  function handleClick() {

    let id: number = 0

    const theTask = {

      id: tasks.length + 1,
      title: title,
      deadline: deadline,
      status: status

    }

    if (title.length != 0) {

      updateTasks({ theTask })

    } else {

      setDeadline("")
      setStatus("")

    }

  }


  return (
    <>

      <div className="px-15 py-10 mx-auto">

        <h1 className="text-center text-3xl font-bold">To Do List</h1>

        <Table className="mt-10">

          <TableHeader className="bg-gradient-to-r from-orange-300 to-blue-500">

            <TableRow>

              <TableHead>No</TableHead>

              <TableHead>Title</TableHead>

              <TableHead>Deadline</TableHead>

              <TableHead>Status</TableHead>

              <TableHead>Actions</TableHead>

            </TableRow>

          </TableHeader>

          <TableBody>

            {tasks.map((todo) => (

              <Todo key={todo.id} todo={todo} />

            ))}

          </TableBody>

        </Table>



        <AlertDialog>

          <AlertDialogTrigger asChild>

            <div className="flex items-center justify-center mt-10 text-xl">

              <Button variant="outline" className="bg-green-500 text-white cursor-pointer">Show Dialog</Button>

            </div>

          </AlertDialogTrigger>

          <AlertDialogContent>

            <AlertDialogHeader>

              <AlertDialogTitle>Enter a new Task</AlertDialogTitle>

              <AlertDialogDescription>

                <div className="mt-5 px-5 flex flex-col">

                  <label htmlFor="title" className="text-base font-bold text-black">Title</label>
                  <input
                    onChange={(e) => { setTitle(e.target.value) }}
                    className="my-3 px-3 py-2 text-base border rounded" id="title" type="text" />

                  <label htmlFor="deadline" className="text-base font-bold text-black">Deadline</label>
                  <input
                    onChange={(e) => { setDeadline(e.target.value) }}
                    className="my-3 px-3 py-2 text-base border rounded" id="deadline" type="text" />

                  <label htmlFor="status" className="text-base font-bold text-black">Status</label>
                  <input
                    onChange={(e) => { setStatus(e.target.value) }}
                    className="my-3 px-3 py-2 text-base border rounded" id="status" type="text" />

                </div>

              </AlertDialogDescription>

            </AlertDialogHeader>

            <AlertDialogFooter>

              <AlertDialogCancel>Cancel</AlertDialogCancel>

              <AlertDialogAction

                onClick={() => handleClick()}

              >Continue</AlertDialogAction>

            </AlertDialogFooter>

          </AlertDialogContent>

        </AlertDialog>

      </div>

    </>
  )
}

function Todo({ todo }: { todo: Todo }) {

  return (


    <TableRow>

      <TableCell>{todo.id}</TableCell>

      <TableCell>{todo.title}</TableCell>

      <TableCell>{todo.deadline}</TableCell>

      <TableCell>{todo.status}</TableCell>

      <TableCell className="flex items-center gap-4">

        <Button>

          <Edit />

        </Button>

        <Button variant="destructive">

          <Trash />

        </Button>

      </TableCell>

    </TableRow>


  )

}

export default App
