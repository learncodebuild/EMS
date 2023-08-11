import React from 'react'

const Tabt = (clickTabt) => {
    return (
        <>

            {clickTabt && (
                <div className='text-black'>
                    Tab 3 Opened
                </div>
            )
            }
        </>
    )
}

export default Tabt