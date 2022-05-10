import React, { useRef, useState } from 'react'
import { questions } from '../data/data'
import { AccordionDetails } from '../types/types'

const Accordion = () => {
    return (
        <div className='flex flex-col gap-6 mb-8'>
            {questions.map((question: AccordionDetails) => {
                return (
                    <AccordionItem key={question.id} details={question} />
                )
            })}
        </div>
    )
}

function AccordionItem(details: any) {
    let shown = false;
    const text: any = useRef(null);
    const btn: any = useRef(null);
    const props = details.details;
    function toggleAccordion() {
        if (text.current !== null) {
            if (shown == false) {
                text.current.style.height = text.current.scrollHeight + 'px';
                btn.current.textContent = '-';
                shown = true
                return
            }
            text.current.style.height = null;
            btn.current.textContent = '+';
            shown = false
        }

    }



    return (
        <div className="w-full py-3 pt-4 px-4 rounded-lg bg-white shadow-lg duration 300 ease-in-out">
            <div className="flex justify-between">
                <h1 className="text-xl font-semibold">{props.title}</h1>
                <button ref={btn} onClick={() => toggleAccordion()} className="rounded-full font-bold text-2xl text-center bg-purple-50 px-3 pb-1 text-purple-500">+</button>
            </div>
            <span ref={text} className='block h-0 transition-all overflow-hidden duration-300 ease-in-out'>{props.info}</span>
        </div>
    )
}

export { Accordion }