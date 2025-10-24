import React, { useState } from 'react'
import { GiPriceTag } from 'react-icons/gi';
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const TabServices = () => {

    const [servicesData, setServicesData] = useState([
        {
            title: "Fullstack Development",
            desc: `
Duration: 6 Months
Price: ₹45,000

A Fullstack Developer is responsible for building complete web applications — both what the user sees (front-end) and what happens behind the scenes (back-end). In this course, you’ll learn modern front-end technologies like HTML, CSS, JavaScript, React along with strong backend skills in Node.js, Express, and databases like MongoDB / MySQL. You’ll build real-world projects, learn deployment, and become job-ready for developer roles in IT companies and startups.
            `,
            open: false,
        }, 
        {
            title: "Data Analytics & Data Science",
            desc: `
Duration: 8 Months
Price: ₹55,000

This course is designed for learners who want to build careers in data-driven industries. You will learn how to collect, clean, and analyze data to find meaningful insights using tools like Excel, SQL, Power BI, and Python. As you progress, you’ll explore Machine Learning, predictive modeling, and visualization techniques. With data analytics and data science becoming the core of every business decision, this course opens doors to high-paying opportunities in finance, healthcare, e-commerce, and AI companies.
            `,
            open: false,
        }, 
        {
            title: "DevOps Engineering",
            desc: `
Duration: 6 Months
Price: ₹50,000

DevOps engineers play a crucial role in modern software development by bridging the gap between developers and IT operations. In this course, you’ll learn Linux fundamentals, cloud computing (AWS), CI/CD pipelines, Docker, Kubernetes, and automation tools like Jenkins and Terraform. You’ll gain the skills required to optimize deployment, speed up development processes, and maintain high-performing cloud infrastructure—skills that are in huge demand by tech companies.
            `,
            open: false,
        },  
        {
            title: "Cybersecurity",
            desc: `
Duration: 7 Months
Price: ₹52,000

This course prepares you to identify cybersecurity threats, secure systems, and protect digital assets. You will learn network security, ethical hacking fundamentals, risk management, encryption, firewalls, and penetration testing tools. Hands-on labs and real-time case studies help you understand how attackers exploit systems — and how to defend them. Perfect for those wanting to start a career in ethical hacking, network security, or cyber defense.
            `,
            open: false,
        }, 
    ]);


    const toggleOpen = (index) => {
        const updatedServicesData = [...servicesData];

        updatedServicesData.forEach((item, idx) => {
            if (idx !== index) {
                item.open = false;
            }
        });

        updatedServicesData[index].open = !updatedServicesData[index].open;
        setServicesData(updatedServicesData);
    }; 

    return (
        <div>
            {servicesData.map((item, index) => {
                return (
                    <div key={index}>
                        <div className="flex items-center justify-between gap-4 cursor-pointer border-b p-4 border-white" onClick={() => toggleOpen(index)}>
                            <h2 className="text-2xl">{item.title}</h2>
                            {item.open ? <IoIosArrowUp size="30px" /> : <IoIosArrowDown size="30px" />}
                        </div>
                        <div className={`${item.open ? "max-h-screen opacity-100 transition-all duration-500 ease-in font-[400] text-[#ffffff91] p-2 text-md whitespace-pre-line" : "max-h-0 opacity-0 transition-all duration-500 ease-out overflow-hidden text-md"}`}>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default TabServices;
