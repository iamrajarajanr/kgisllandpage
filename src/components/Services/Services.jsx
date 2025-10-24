import React from 'react'
import Section from '../Section/SectionTitle'
import TabServices from './TabServices'

const Services = () => {
    return (
        <div className='bg-black text-white flex justify-center items-center py-16'>
            <div className='flex flex-col items-center container mx-auto'>
                <Section
                    title="Certification Courses"
                    color="text-white"
                    style="font-[700] text-3xl text-center mb-6"
                />
                <TabServices />
            </div>
        </div>
    )
}

export default Services
