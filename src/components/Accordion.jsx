import React, { useState } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqCategories = [
        {
            category: "General",
            items: [
                {
                    question: "What does Tedikom Wireless do?",
                    answer: "Tedikom Wireless helps businesses with their technology needs, such as website development, mobile apps, digital marketing, and cybersecurity."
                },
                {
                    question: "How can Tedikom Wireless help my business?",
                    answer: "We assist businesses in improving their online presence, user experience, and security to grow and reach more customers."
                },
                {
                    question: "How can I get in touch with Tedikom Wireless?",
                    answer: "You can reach us via our website, email, or phone to discuss your project needs."
                },
                {
                    question: "Do you offer free advice before I start a project?",
                    answer: "Yes, we provide free initial consultations to discuss your needs and offer a plan with pricing."
                },
            ]
        },
        {
            category: "Web Development",
            items: [
                {
                    question: "What kind of websites can you build?",
                    answer: "We create business websites, e-commerce stores, blogs, and industry-specific platforms (e.g., healthcare, education)."
                },
                {
                    question: "How long does it take to create a website?",
                    answer: "me depends on how complex the website is. On average, it takes about 4 to 12 weeks from start to finish."
                },
                {
                    question: "Do you help maintain my website after it's built?",
                    answer: " Yes, we provide ongoing maintenance to keep your website updated, secure, and running smoothly. This includes checking for security issues, adding new features, and making sure everything works well."
                },
            ]
        },
        {
            category: "Mobile App Development",
            items: [
                {
                    question: "Mobile App Development FAQs",
                    answer: " Yes, we can create apps for both iPhones and Android phones. We can also create apps that work on both types of phones at the same time."
                },
                {
                    question: "What do you use to build mobile apps?",
                    answer: "We use popular programming languages and tools, like Swift and Objective-C for iPhone apps, and Kotlin and Java for Android apps, to build high-quality apps."
                },
                {
                    question: "How do I get started with my app idea?",
                    answer: "We use popular programming languages and tools, like Swift and Objective-C for iPhone apps, and Kotlin and Java for Android apps, to build high-quality apps."
                },
            ]
        },
        {
            category: "Digital Marketing",
            items: [
                {
                    question: "What is digital marketing and how can it help my business?",
                    answer: "Digital marketing is how we help your business grow online. This includes things like: Helping people find your search engines (SEO) Running ads on Google or social media (PPC)Managing your social media accounts Creating email campaigns to keep in touch with your customers We can make sure your business reaches the right people and grows its online presence."
                },
                {
                    question: " How do you know if a marketing campaign is working?",
                    answer: "We use popular programming languages and tools, like Swift and Objective-C for iPhone apps, and Kotlin and Java for Android apps, to build high-quality apps."
                }
            ]
        },
        {
            category: "Cybersecurity",
            items: [
                {
                    question: "Why do I need cybersecurity for my business?",
                    answer: "Cybersecurity keeps your business safe from online threats like hackers or viruses. It’s important to protect your website, data, and customer information from being stolen or damaged."
                },
                {
                    question: " What cybersecurity services do you offer?",
                    answer: "We help protect your business from cyberattacks by: Checking for security risks Keeping your data safe and private Monitoring for any suspicious activity Setting up systems to block unauthorized access"
                }
            ]
        },
        {
            category: "Consulting",
            items: [
                {
                    question: "What consulting services do you offer? Why do I need cybersecurity for my business?",
                    answer: "Our consulting services are designed to help businesses use technology better. We can guide you on: Setting up or improving your IT systems Moving your business to the cloud (online storage)Automating processes to save time and money Using data to make smarter business decisions"
                },
                {
                    question: " How can you help my business change or improve with technology?",
                    answer: " We help businesses modernize by using new technology to work smarter. This might involve switching to cloud-based software, automating tasks, or using data to make better decisions, all aimed at making your business more efficient."

                }
            ]
        },
        {
            category: "Cybersecurity",
            items: [
                {
                    question: "Why do I need cybersecurity for my business?",
                    answer: "Cybersecurity keeps your business safe from online threats like hackers or viruses. It’s important to protect your website, data, and customer information from being stolen or damaged."
                },
                {
                    question: " What cybersecurity services do you offer?",
                    answer: "We help protect your business from cyberattacks by: Checking for security risks Keeping your data safe and private Monitoring for any suspicious activity Setting up systems to block unauthorized access"
                }
            ]
        },
        {
            category: "Consulting",
            items: [
                {
                    question: "What consulting services do you offer? Why do I need cybersecurity for my business?",
                    answer: "Our consulting services are designed to help businesses use technology better. We can guide you on: Setting up or improving your IT systems Moving your business to the cloud (online storage)Automating processes to save time and money Using data to make smarter business decisions"
                },
                {
                    question: " How can you help my business change or improve with technology?",
                    answer: " We help businesses modernize by using new technology to work smarter. This might involve switching to cloud-based software, automating tasks, or using data to make better decisions, all aimed at making your business more efficient."

                }
            ]
        },
        {
            category: "Consulting",
            items: [
                {
                    question: "What consulting services do you offer? Why do I need cybersecurity for my business?",
                    answer: "Our consulting services are designed to help businesses use technology better. We can guide you on: Setting up or improving your IT systems Moving your business to the cloud (online storage)Automating processes to save time and money Using data to make smarter business decisions"
                },
                {
                    question: " How can you help my business change or improve with technology?",
                    answer: " We help businesses modernize by using new technology to work smarter. This might involve switching to cloud-based software, automating tasks, or using data to make better decisions, all aimed at making your business more efficient."

                }
            ]
        },
        {
            category: "General Support ",
            items: [
                {
                    question: "Do you help after my project is finished?",
                    answer: "Yes, we offer ongoing support after your website, app, or marketing campaign is completed. We’re here to help with any issues, updates, or changes you need."
                },
                {
                    question: " How do you make sure projects stay on schedule and within budget?",
                    answer: " We work closely with you to agree on a timeline and budget before starting. Our team keeps track of everything and makes sure we stay on track. If anything needs to change, we’ll let you know right away."

                },
                {
                    question: "What makes Tedikom Wireless different from other companies?",
                    answer: " We’re focused on making technology work for you. Our team listens carefully to your needs and offers solutions tailored to your business. We make sure that the technology we provide helps your business grow and succeed."

                },
                {
                    question: " How do I get a price quote for my project?",
                    answer: "Just reach out to us with some details about what you need, and we’ll give you a custom price based on your project’s requirements. You can contact us through our website or by email."

                }
            ]
        }
    ];

    return (
        <div className="w-full mx-auto">
            {faqCategories.map((category, catIndex) => (
                <div key={catIndex} className="mb-6">
                    <h2 className="text-[18px] sm:text-[20px] lg:text-[24px] xl:text-[26px] font-bold text-gray-800 mb-2">{category.category}</h2>
                    <div className="bg-gray-100 rounded-lg">
                        {category.items.map((item, index) => (
                            <div key={index} className="border-b border-gray-300">
                                <button
                                    className="w-full text-left p-4 font-semibold flex items-center gap-[10px] focus:outline-none text-[10px] sm:text-[14px]"
                                    onClick={() => toggleAccordion(`${catIndex}-${index}`)}
                                >
                                    {item.question}
                                    <IoMdArrowDropdown 
                                        className={`transition-transform transform ${
                                            activeIndex === `${catIndex}-${index}` ? "rotate-180" : ""
                                        }`}
                                    />
                                </button>
                                {activeIndex === `${catIndex}-${index}` && (
                                    <div className="p-4 text-gray-700 bg-white text-[8px] sm:text-[14px]">
                                        {item.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
