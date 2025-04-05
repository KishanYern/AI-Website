import React from 'react'

const embolismForm = () => {
    return (
        <div>
             <Tooltip
                message={{
                    title: 'Before You Start',
                    text: 'Please note that this model should not replace any professional appraisal. The results generated are based on our learning and may not be 100% accurate. Always consult a \
                qualified professional for precise evaluations. Also note that the data used to train these models are from India, and consist female patients of at least 21 years old and of Pima Indian heritage.',
                }}
            >
                <HiOutlineQuestionMarkCircle
                    className='absolute top-2 right-8'
                    size={30}
                />
            </Tooltip>
            
        </div>
    )
}

export default embolismForm