import {Button} from '@/components/ui/button' 
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const Register = () => {
  const {register, handleSubmit} = useForm()
  const registerFormHandler = (data) => {

  }
  return (
   <div className="h-screen w-full flex items-center justify-center">
      <form onSubmit={handleSubmit(registerFormHandler)}className='px-3 py-8 flex flex-col items-center justify-center gap-3 border-2 border-zinc-600 rounded-4xl'>
        <h1 className='font-bold text-3xl'>Register here</h1>
        <input type="test" {...register("fullName")}placeholder="Enter Your Name" className="outline-0 border-b border-black w-[35vw] my-[1vw]" />
        <input type="email" {...register("email")}placeholder="Enter Your Email" className="outline-0 border-b border-black w-[35vw] my-[1vw]" />
        <input type="password"{...register("password")} placeholder="Password" className="outline-0 border-b border-black w-[35vw] my-[1vw]" />
        <Button type='submit'>
          Register
        </Button>
        <span>Already have an account <Link to='login' className="text-blue-500">Login here</Link></span>
      </form>
      
    </div>
  )
}

export default Register
