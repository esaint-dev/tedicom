import React from 'react'
import BorderBotton from './Buttons/BorderBotton'

const ProjectButtons = () => {
    const buttonNames = ['All', 'Product Engineering', 'Data Analytics', 'Web Development', 'Saas Aplication', 'Software Modernization', 'UI/UX Design', 'Mobile Apps']
  return (
    <div className='flex flex-wrap gap-2 justify-center items-center'>
        {
            buttonNames.map( (buttonName, index) => {
                return <BorderBotton key={index} text={buttonName} color={'#04369A'} />
})
        }
    </div>
  )
}

export default ProjectButtons
