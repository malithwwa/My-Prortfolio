import React from 'react'
import TitleHeader from "../components/TitleHeader.jsx";
import GlowCard from "../components/GlowCard.jsx";

const EducationExperience = () => {
    return (
        <section
            id="experience"
            className="flex-center md:mt-40 mt-20 section-padding w-full max-w-[1520px] md:px-20 px-5 mx-auto"
        >
            <div className="w-full">
                <TitleHeader
                    title="Professional Work Experience & Academic Journey"
                    sub="💼 Education & Experience"
                />
                <div className="my-20">
                    <div class="grid grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-20">

                        <section class="col-span-3">
                            <header class="pb-5 ml-16">
                                <h2 class="text-2xl font-semibold tracking-wide">EXPERIENCE</h2>
                            </header>

                            {/*Card Wrapper*/}
                            <div className="card-border relative rounded-xl p-3 flex flex-col gap-4 ml-16">
                                {/*Timeline*/}
                                <span
                                    className="absolute w-8 h-8 rounded-full bg-[#3385ff] border-5 border-white -left-16 top-14 z-60"/>
                                <div
                                    className="absolute -left-12 top-25 h-[105%] w-[4px] -translate-x-1 bg-[#3385ff] z-50"/>
                                {/*Content*/}
                                <div className="exp-card-wrapper ml-10 my-10 pe-6">
                                    <div className="flex items-start">
                                        <div className="expText flex xl:gap-20 md:gap-2 gap-5 relative z-20">
                                            <div>
                                                <h1 className="font-semibold text-3xl">Software Engineer - Intern</h1>
                                                <p className="my-5 text-white-50">
                                                    🗓️&nbsp;June 2020 - December 2023
                                                </p>
                                                <p className="text-[#839CB5] italic">
                                                    Responsibilities
                                                </p>
                                                <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                                                    <li className="text-lg">
                                                        Collaborate with a cross-functional team to provide an
                                                        enterprise software suite for automation of all processes.
                                                    </li>
                                                    <li className="text-lg">
                                                        Identify faults in system and resolve.
                                                    </li>
                                                    <li className="text-lg">
                                                        Follow and improve the Product Development process based on
                                                        Agile (Scrum) paradigm.
                                                    </li>
                                                    <li className="text-lg">
                                                        Improve the quality of the existing code base.
                                                    </li>
                                                    <li className="text-lg">
                                                        Refactor the existing code, so new features are easy to
                                                        integrate.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*Card Wrapper*/}
                            <div className="card-border relative rounded-xl p-3 flex flex-col gap-4 mt-20 ml-16">
                                {/*Timeline*/}
                                <span
                                    className="absolute w-8 h-8 rounded-full bg-[#3385ff] border-5 border-white -left-16 top-14 z-60"/>
                                <div
                                    className="absolute -left-12 top-25 h-[81%] w-[4px] -translate-x-1 bg-[#3385ff] z-50"/>
                                {/*Content*/}
                                <div className="exp-card-wrapper ml-10 my-10 pe-6">
                                    <div className="flex items-start">
                                        <div className="expText flex xl:gap-20 md:gap-2 gap-5 relative z-20">
                                            <div>
                                                <h1 className="font-semibold text-3xl">Software Engineer - Intern</h1>
                                                <p className="my-5 text-white-50">
                                                    🗓️&nbsp;June 2020 - December 2023
                                                </p>
                                                <p className="text-[#839CB5] italic">
                                                    Responsibilities
                                                </p>
                                                <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                                                    <li className="text-lg">
                                                        Collaborate with a cross-functional team to provide an
                                                        enterprise software suite for automation of all processes.
                                                    </li>
                                                    <li className="text-lg">
                                                        Identify faults in system and resolve.
                                                    </li>
                                                    <li className="text-lg">
                                                        Follow and improve the Product Development process based on
                                                        Agile (Scrum) paradigm.
                                                    </li>
                                                    <li className="text-lg">
                                                        Improve the quality of the existing code base.
                                                    </li>
                                                    <li className="text-lg">
                                                        Refactor the existing code, so new features are easy to
                                                        integrate.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>


                        <section class="col-span-2">
                            <header class="pb-5 pl-8">
                                <h2 class="text-2xl font-semibold tracking-wide">EXPERIENCE</h2>
                            </header>

                            <div class="border-l-2 border-[#bababa] pl-8">

                                <div
                                    class="relative bg-white border border-[#eaeaea] p-5 mb-5 cursor-pointer transition-all duration-300 hover:shadow-md hover:border-transparent">
                                    <span
                                        class="absolute w-4 h-4 rounded-full bg-[#11a372] border-2 border-white -left-5 top-5"></span>
                                    <h4 class="text-[#11a372] font-semibold">2018 - 2022</h4>
                                    <h3 class="text-[19px] font-helvetica text-[#444] py-2">UI/UX Designer</h3>
                                    <p class="text-[#666] text-[17px] leading-tight">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>

                                <div
                                    class="relative bg-white border border-[#eaeaea] p-5 mb-5 cursor-pointer transition-all duration-300 hover:shadow-md hover:border-transparent">
                                    <span
                                        class="absolute w-4 h-4 rounded-full bg-[#11a372] border-2 border-white -left-5 top-5"></span>
                                    <h4 class="text-[#11a372] font-semibold">2018 - 2022</h4>
                                    <h3 class="text-[19px] font-helvetica text-[#444] py-2">Full-Stack Developer</h3>
                                    <p class="text-[#666] text-[17px] leading-tight">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>

                                <div
                                    class="relative bg-white border border-[#eaeaea] p-5 mb-5 cursor-pointer transition-all duration-300 hover:shadow-md hover:border-transparent">
                                    <span
                                        class="absolute w-4 h-4 rounded-full bg-[#11a372] border-2 border-white -left-5 top-5"></span>
                                    <h4 class="text-[#11a372] font-semibold">2018 - 2022</h4>
                                    <h3 class="text-[19px] font-helvetica text-[#444] py-2">Frontend Developer</h3>
                                    <p class="text-[#666] text-[17px] leading-tight">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

            </div>
        </section>
)
}
export default EducationExperience
