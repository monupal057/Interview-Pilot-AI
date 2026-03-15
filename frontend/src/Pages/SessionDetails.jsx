import AiQuestions from "@/utils/AiQuestions"


const SessionDetails = () => {
  return (
    <div className="w-full flex flex-col items-center pt-10">
      <div className="h-[30vh] w-[65vw] shadow-2xl rounded-4xl pt-3 flex flex-col gap-2.5 px-5">
        <div className="flex text-3xl gap-3">
          <h1>Role</h1>
          <h1>Frontend Developer</h1>
        </div>
        <div className="flex text-3xl gap-3">
          <h1>Topic to focus</h1>
          <h1>React js</h1>
        </div>
        <div className="flex text-3xl gap-3">
          <h1>Experience</h1>
          <h1>2 years</h1>
        </div>
      </div>
      <div>
        <AiQuestions/>
      </div>
    </div>
  )
}


export default SessionDetails
