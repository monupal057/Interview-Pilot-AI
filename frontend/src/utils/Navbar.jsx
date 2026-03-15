import {Button} from "@/components/ui/button"

const Navbar = () => {
  return (
    <div className="w-full h-[12vh] bg-white shadow-2xl border-b-[2px] border-blue-600 flex items-center justify-between px-5">

      <h1 className="font-bold text-2xl">InterviewPilot AI</h1>
      <div className="">
        <div className="flex items-center gap-2">
        <Button>login</Button>
        <Button>Register</Button>
      </div>
      </div>
    </div>
  )
}

export default Navbar
