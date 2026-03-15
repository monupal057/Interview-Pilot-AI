import {Button} from '@/components/ui/button'

const MainPage = () => {
  return (
    <div className='h-[85vh] w-full flex flex-col items-center justify-center gap-6'>
      <h1 className='text-5xl font-semibold'>Ace Your Interview With Your</h1>
      <h1 className='text-5xl font-semibold capitalize'>AI Coach</h1>
      <p className='w-[40vw] text-center font-semibold text-zinc-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quaerat laboriosam blanditiis dolore maxime mollitia reprehenderit saepe. Velit, ullam a.</p>
      <Button>
        Get Started
      </Button>
    </div>
  )
}

export default MainPage

