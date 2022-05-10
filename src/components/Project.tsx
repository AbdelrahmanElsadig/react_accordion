import React from 'react';
import { Accordion } from './accordion';
const Project = () => {
    return (
        <div className='mt-8 w-[95%] max-w-[768px] mx-auto flex flex-col gap-8 items-center'>
            <h1 className="pb-3 text-4xl font-bold text-center relative
            after:absolute after:h-1 after:w-1/2 after:bg-purple-500 after:left-1/4 after:bottom-0">
                FAQs</h1>
            <Accordion />

        </div>
    )
}

export { Project }
