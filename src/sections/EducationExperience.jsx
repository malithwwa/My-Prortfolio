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

                        <section className="col-span-3">
                            <header className="pb-5 ml-16">
                                <h2 className="text-2xl font-semibold tracking-wide">EXPERIENCE</h2>
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


                        <section className="col-span-2">
                            <header className="pb-5 ml-16">
                                <h2 className="text-2xl font-semibold tracking-wide">EDUCATION</h2>
                            </header>

                            {/*Card Wrapper*/}
                            <div className="card-border relative rounded-xl p-3 flex flex-col gap-4 ml-16">
                                {/*Timeline*/}
                                <span
                                    className="absolute w-8 h-8 rounded-full bg-[#00ff55] border-5 border-white -left-16 top-14 z-60"/>
                                <div
                                    className="absolute -left-11 top-25 h-[108%] w-[4px] -translate-x-1 bg-[#00ff55] z-50"/>
                                {/*Content*/}
                                <div className="exp-card-wrapper ml-10 my-10 pe-6">
                                    <div className="flex items-start">
                                        <div className="expText flex xl:gap-20 md:gap-2 gap-5 relative z-20">
                                            <div>
                                                <h1 className="font-semibold text-xl">BSc. (Hons) Degree in Information
                                                    Technology
                                                    Specialization in Software Engineering</h1>
                                                <p className="my-5 text-white-50">
                                                    🗓️&nbsp;Feb 2019 - March 2023
                                                </p>
                                                <p className="text-[#839CB5]">
                                                    Sri Lanka Institute of Information Technology (SLIIT)
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*Card Wrapper*/}
                            <div className="card-border relative rounded-xl p-3 flex flex-col gap-4 mt-20 ml-16">
                                {/*Timeline*/}
                                <span
                                    className="absolute w-8 h-8 rounded-full bg-[#00ff55] border-5 border-white -left-16 top-14 z-60"/>
                                <div
                                    className="absolute -left-11 top-25 h-[55%] w-[4px] -translate-x-1 bg-[#00ff55] z-50"/>
                                {/*Content*/}
                                <div className="exp-card-wrapper ml-10 my-10 pe-6">
                                    <div className="flex items-start">
                                        <div className="expText flex xl:gap-20 md:gap-2 gap-5 relative z-20">
                                            <div>
                                                <h1 className="font-semibold text-xl">Diploma in IT (International</h1>
                                                <p className="my-5 text-white-50">
                                                    🗓️&nbsp; September 2018 - January 2019
                                                </p>
                                                <p className="text-[#839CB5]">
                                                    ESOFT Metro Campus
                                                </p>

                                            </div>
                                        </div>
                                    </div>
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
