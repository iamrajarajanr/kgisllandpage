import React from 'react'
import Section from '../Section/SectionTitle'
import PortfolioCard from './PortfolioCard'

const Portfolio = () => {
    const portfolioData = [
        {
            img: "/images/portfolio1.png",
            title: "Hands-on Learning",
            desc: ""
        }, {
            img: "/images/portfolio2.png",
            title: "Learner Readiness Program",
            desc: ""
        }, {
            img: "/images/portfolio3.png",
            title: "Sharpening the Axe",
            desc: ""
        }, {
            img: "/images/portfolio4.png",
            title: "Real People",
            desc: ""
        }
    ]
    return (
        <div className='py-28 px-4'>
            <div className='flex flex-col md:flex-row items-start container mx-auto'>
                <Section
                    title=""
                    color="text-white"
                    style="font-[400] text-2xl"
                />
                <div>
                    <p className='mb-5 text-xl md:text-4xl font-bold text-center'>We make it happen the EPIC way</p> 
                    <p className='mb-14 text-center'>EPIC - in short for Educate, Practice, Implement, and Communicate is our unique project-based learning method to help you learn skills needed for today's in-demand jobs.</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {
                            portfolioData.map((item, index) => {
                                return (

                                    <PortfolioCard key={index} img={item.img} title={item.title} desc={item.desc} />

                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio