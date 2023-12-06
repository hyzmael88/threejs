import React from 'react'

import CustomButton from './CustomButton'

function AIPicker({prompt, setPrompt, generatingImg, handleSubmit}) {
  return (
    <div
    className='aipicker-container'
    >
        <textarea
        className='aipicker-textarea'
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder='Ask AI...'
        />
        <div className='flex flex-wrap gap-3'>
            {
                generatingImg?(
                    <CustomButton
                    type="outline"
                    title="Asking AI..."
                    customStyles="text-xs"
                    />
                )
                :(
                    <>
                    <CustomButton
                    type="outline"
                    title="Ask Logo"
                    customStyles="text-xs"
                    handleClick={()=>handleSubmit('logo')}
                    />
                    <CustomButton
                    type="filled"
                    title="Ask Full"
                    customStyles="text-xs"
                    handleClick={()=>handleSubmit('full')}
                    />
                    </>
                )
            }
        </div>
    </div>
  )
}

export default AIPicker