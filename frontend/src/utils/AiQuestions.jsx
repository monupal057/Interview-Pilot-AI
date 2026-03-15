import React from 'react' 
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MdOutlinePushPin } from "react-icons/md";
import { VscPinned } from "react-icons/vsc";

const AiQuestions = () => {
  return (
    <div className='mt-10'>
      <Accordion className='m-5' type="single" collapsible defaultValue="item-1">
  <AccordionItem value="item-1">
    <AccordionTrigger className='w-[60vw] min-h-[10vh] bg-zinc-400 rounded-2xl px-2.5 flex flex-col item center '>
        <div>
          <h1>Questions</h1>
          <MdOutlinePushPin className='text-[20px]' />
        </div>
      <VscPinned />
    </AccordionTrigger>
    <AccordionContent className='w-[60vw] min-h-[10vh] bg-zinc-200 rounded-2xl p-4 mt-1' >
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>
 
 


 
    </div>
  )
}

export default AiQuestions
