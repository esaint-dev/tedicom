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
                    answer: "Tedikom Wireless helps businesses with their technology needs. We offer services such as custom software development, AI automation, cybersecurity, mobile app development, web development, digital marketing, and consulting. Our goal is to help businesses grow and succeed in the digital world."
                },
                {
                    question: "How can Tedikom Wireless help my business?",
                    answer: "We work with businesses of all sizes to enhance their online presence, develop user-friendly websites and apps, automate operations with AI, and secure digital assets from cyber threats. Our solutions are designed to improve efficiency and help businesses reach more customers."
                },
                {
                    question: "How can I get in touch with Tedikom Wireless?",
                    answer: "You can contact us through our website, email us at info@tedikomwireless.com, or call us at +23408183218611. We look forward to working with you! Do you offer free advice before I start a project? Yes, we provide free initial consultations to discuss your needs and how we can help. We will then provide a tailored plan and price quote."
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
                    answer: "The timeline varies depending on complexity, typically ranging from 4 to 12 weeks."
                },
                {
                    question: "Do you provide website maintenance?",
                    answer: "Yes, we offer ongoing website maintenance to ensure security, updates, and optimal performance."
                },
            ]
        },
        {
            category: "Mobile App Development",
            items: [
                {
                    question: "Can you create apps for both iPhones and Android devices?",
                    answer: "Yes, we develop apps for both iOS and Android platforms, including cross-platform apps.What technologies do you use for mobile app development? We use Swift and Objective-C for iOS, and flutter and Java for Android."
                },
                {
                    question: "What do you use to build mobile apps?",
                    answer: "We use popular programming languages and tools, like Swift and Objective-C for iPhone apps, and Kotlin and Java for Android apps, to build high-quality apps."
                },
                {
                    question: "How do I get started with my app idea?",
                    answer: "Contact us with your app idea, and we’ll provide a roadmap for development, along with a timeline and cost estimate."
                },
            ]
        },
        {
            category: "Digital Marketing",
            items: [
                {
                    question: "What is digital marketing and how can it help my business?",
                    answer: "Digital marketing helps businesses grow online through: Search Engine Optimization (SEO) Social Media Marketing Pay-Per-Click (PPC) Advertising Content Creation and Marketing Email Marketing Campaigns"
                },
                {
                    question: "How do you measure the success of a marketing campaign?",
                    answer: "We track website traffic, customer engagement, and sales conversions using advanced analytics."
                }
            ]
        },
        {
            category: "Cybersecurity",
            items: [
                {
                    question: "Why do I need cybersecurity for my business?",
                    answer: "Cybersecurity protects your business from cyber threats, data breaches, and hacking attempts, keeping sensitive information secure."
                },
                {
                    question: " What cybersecurity services do you offer?",
                    answer: "We provide: Risk Assessment & Management, Network Security, Solutions, Data Encryption, Services, Endpoint Security, Incident Response & Recovery"
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
                    answer: "Yes, we offer ongoing support to address updates, issues, and future modifications."
                },
                {
                    question: " How do you make sure projects stay on schedule and within budget?",
                    answer: "We collaborate closely with clients to set clear project timelines and budgets, keeping communication open throughout the development process."

                },
                {
                    question: "What makes Tedikom Wireless different from other companies?",
                    answer: "We provide tailored technology solutions that directly align with your business goals, ensuring measurable growth and success."

                },
                {
                    question: " How do I get a price quote for my project?",
                    answer: "Reach out to us with project details, and we will provide a custom quote based on your specific requirements."

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
