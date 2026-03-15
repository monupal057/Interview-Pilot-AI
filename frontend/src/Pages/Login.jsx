import {Button} from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import {Link} from 'react-router-dom'

const Login = () => {

  const {register, handleSubmit} = useForm()
  const loginFormHandler = (data) => {
    console.log(data)
  }
    return (
    <div className="h-screen w-full flex items-center justify-center">
      <form onSubmit={handleSubmit(loginFormHandler)}className='px-3 py-8 flex flex-col items-center justify-center gap-3 border-2 border-zinc-600 rounded-4xl'>
        <h1 className='font-bold text-3xl'>Login here</h1>
        <input type="email" {...register("email")}placeholder="Enter Your Name" className="outline-0 border-b border-black w-[35vw] my-[3vw]" />
        <input type="password"{...register("password")} placeholder="Password" className="outline-0 border-b border-black w-[35vw] my-[2vw]" />
        <Button type='submit'>
          Login
        </Button>
<span>Don't have an account, please <Link to='/register' className='text-blue-500'>register</Link></span>
      </form>
      
    </div>
  )
}

export default Login
