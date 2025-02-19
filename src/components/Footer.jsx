import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-[#04369A]">
            <div className="px-[15px] pb-5 sm:pb-[80px] sm:px-[20px] flex-wrap lg:px-[50px] py-4 flex text-white justify-start sm:justify-start xl:justify-center gap-8 xl:gap-[100px]">
                {/* services container */}
                <div className="order-3 sm:order-0 flex flex-col gap-3 w-[150px]">
                    <h3 className="font-bold text-[13px] text-[#FF6A07]">
                        SERVICES
                    </h3>
                    <a className="text-[12px]">Software Development</a>
                    <a className="text-[12px] hover:text-custom-blue">
                        AI Automations
                    </a>
                    <p className="text-[12px] hover:text-custom-blue">
                        Web Design
                    </p>
                    <p className="text-[12px] hover:text-custom-blue">
                        Digital Marketing
                    </p>
                    <p className="text-[12px] hover:text-custom-blue">
                        Cybersecurity
                    </p>
                    <p className="text-[12px] hover:text-custom-blue">
                        Consulting
                    </p>
                </div>

                {/* Technology container */}
                <div className="flex flex-col gap-3 w-fit lg:w-[350px">
                    <h3 className="font-bold text-[13px] text-[#FF6A07]">
                        TECHNOLOGY
                    </h3>

                    <div className="flex flex-col sm:flex-row checkw-[350px] gap-[50px] sm:gap-[20px]">
                        <div className="flex flex-col gap-[20px] lg:gap-[52px]">
                            <div className="flex flex-col gap-3">
                                <h3 className="font-bold  text-[13px]">
                                    Backend
                                </h3>
                                <p className="text-[12px] hover:text-custom-blue">
                                    Laravel Development
                                </p>
                                <p className="text-[12px] hover:text-custom-blue">
                                    Codelgniter Development
                                </p>
                                <p className="text-[12px] hover:text-custom-blue">
                                    PHP Development
                                </p>
                                <p className="text-[12px] hover:text-custom-blue">
                                    Node.js Development
                                </p>
                                <p className="text-[12px] hover:text-custom-blue">
                                    Net Core Development
                                </p>
                            </div>

                            <div className="flex flex-col gap-3">
                                <h3 className="font-bold  text-[13px]">
                                    CMS & eCommerce
                                </h3>
                                <p className="text-[12px] hover:text-custom-blue">
                                    WordPress Development
                                </p>
                                <p className="text-[12px] hover:text-custom-blue">
                                    Dupal Development
                                </p>
                                <p className="text-[12px] hover:text-custom-blue">
                                    Magnento Development
                                </p>
                                <p className="text-[12px] hover:text-custom-blue">
                                    Shopify Development
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* frontend */}
                <div className="flex flex-col gap-[20px] lg:gap-[52px]">
                    <div className="flex flex-col gap-3">
                        <h3 className="font-bold  text-[13px]">Frontend</h3>
                        <p className="text-[12px] hover:text-custom-blue">
                            React.js Development
                        </p>
                        <p className="text-[12px] hover:text-custom-blue">
                            Angular Development
                        </p>
                        <p className="text-[12px] hover:text-custom-blue">
                            Vue.js Development
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h3 className="font-bold  text-[13px]">Mobile Apps</h3>
                        <p className="text-[12px] hover:text-custom-blue">
                            React Native Devlopment
                        </p>
                        <p className="text-[12px] hover:text-custom-blue">
                            Android Development
                        </p>
                        <p className="text-[12px] hover:text-custom-blue">
                            IOS App Development
                        </p>
                    </div>
                </div>

                {/* decicated  container */}
                <div className="flex flex-col gap-3 checkw-[350px] bg-r">
                  
                    <div className="flex flex-wrap checkw-[350px] gap-[50px] sm:flex-col lg:flex-row">
                        <div className="flex flex-col gap-[20px] lg:gap-[52px]">
                            <div className="flex flex-col gap-3">
                                <h3 className="font-bold  text-[13px]">
                                    CYBER SECURITY
                                </h3>
                                <p className="text-[12px] hover:text-custom-blue">
                                Nessus
                                </p>
                                <p className="text-[12px] hover:text-custom-blue">
                                pfSense
                                </p>
                                <p className="text-[12px] hover:text-custom-blue">
                                Cisco ASA
                                </p>
                                <p className="text-[12px] hover:text-custom-blue">
                                OpenSSL
                                </p>
                            </div>

                            <div className="flex flex-col gap-3">
                                <h3 className="font-bold  text-[13px]">
                                AI Automation
                                </h3>
                                <p className="text-[12px] hover:text-custom-blue">
                                Tensorflow
                                </p>
                                <p className="text-[12px] hover:text-custom-blue">
                                Julia
                                </p>
                                <p className="text-[12px] hover:text-custom-blue">
                                UIPath
                                </p>
                                <p className="text-[12px] hover:text-custom-blue">
                                Automatic Anywhere
                                </p>
                                <p className="text-[12px] hover:text-custom-blue">
                                Google Cloud AI
                                </p>
                                <p className="text-[12px] hover:text-custom-blue">
                                NLTK
                                </p>
                                <p className="text-[12px] hover:text-custom-blue">
                                AWS SageMaker
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                {/* backend developer */}
                <div className="flex flex-col gap-[20px] lg:gap-[52px]">
                    <div className="flex flex-col gap-3">
                        <h3 className="font-bold  text-[13px] text-[#FF6A07]">
                        INDUSTRIES
                        </h3>
                        <p className="text-[12px] hover:text-custom-blue">
                        Health 
                        </p>
                        <p className="text-[12px] hover:text-custom-blue">
                        Finance
                        </p>
                        <p className="text-[12px] hover:text-custom-blue">
                        Agricultural
                        </p>
                        <p className="text-[12px] hover:text-custom-blue">
                        Government
                        </p>
                        <p className="text-[12px] hover:text-custom-blue">
                        Government
                        </p>
                        <p className="text-[12px] hover:text-custom-blue">
                        Education
                        </p>
                        <p className="text-[12px] hover:text-custom-blue">
                        E-commerce 
                        </p>
                        <p className="text-[12px] hover:text-custom-blue">
                        Tourism 
                        </p>
                        <p className="text-[12px] hover:text-custom-blue">
                        Energy
                        </p>
                        <p className="text-[12px] hover:text-custom-blue">
                        Telecommunications
                        </p>
                        <p className="text-[12px] hover:text-custom-blue">
                        Transportation
                        </p>
                        <p className="text-[12px] hover:text-custom-blue">
                        Marketing
                        </p>
                        <p className="text-[12px] hover:text-custom-blue">
                        Advertising
                        </p>
                    </div>

                </div>
            </div>

            <div className="bg-white w-full px-[10px] sm:px-[20px] lg:px-[70px] py-[10px] text-[12px]  justify-around flex">
                <div className=" items-center gap-[20px] hidden lg:flex">
                    <Link to={"/about"}>About</Link>
                    <Link to={"/projects"}>Projects</Link>
                    <Link>Blog</Link>
                    <Link to={"/contactus"}>Contact</Link>
                    <Link>Academy</Link>
                    <Link to={"/privacypolicy"}>Privacy Policy</Link>
                </div>

                <div className="flex gap-[10px] sm:gap-[20px] justify-around">
                    <Link 
                    className="flex gap-[3px] items-center"
                    to={'https://www.facebook.com/share/1XwTrfHrEG/?mibextid=wwXIfr'}
                    >
                        <img src="/facebook logo.svg" alt="facebook logo" />
                        Facebook
                    </Link>
                    <Link 
                    className="flex gap-[3px] items-center"
                    to={'https://x.com/tedikom_ng?s=21'}
                    >
                        <img src="/X logo.svg" alt="facebook logo" />
                        Twitter
                    </Link>
                    <Link
                    className="flex gap-[3px] items-center"
                    to={'https://www.instagram.com/tedikomwireless?igsh=MTgwNHFkZTV6YjhqZw%3D%3D&utm_source=qr'}
                    >
                        <img src="/Instagram logo.svg" alt="Instagram logo" />
                        Instagram
                    </Link>
                    <Link 
                    className="flex gap-[3px] items-center"
                    to={'https://www.linkedin.com/company/tedikom-wireless/'}
                    >
                        <img src="/linkedIn logo.svg" alt="LinkedIn logo" />
                        LinkedIn
                    </Link>
                </div>
            </div>

            <div>
                <p className="text-white  text-[12px] text-center py-[12px]">
                    Copyright Tedikom Wireless. All Rights Reserved{" "}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
