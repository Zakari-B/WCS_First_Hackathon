import React, { useState } from 'react'

const Rules = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <div>
            <button type="button" onClick={() => setOpen(!isOpen)}>Comment jouer ?</button>
            <div className={`${isOpen ? "visible" : "hidden"} h-screen w-screen absolute z-50 left-0 top-0 p-20 flex items-center`}>
                <div className="text-gray-800 w-full bg-gray-200/50">            
                  <h2 className='text-3xl'>
                    Comment jouer ?
                  </h2>
                  <button type="button" onClick={() => setOpen(!isOpen)}>Fermer</button>
                </div>
            </div>
        </div>
    )
}

export default Rules