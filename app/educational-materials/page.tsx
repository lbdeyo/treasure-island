export default function EducationalMaterials() {
    return (
        <div className="bg-[url('/img/art/ed-materials-bg.jpg')] md:bg-cover min-h-screen ">

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-5 ">
                <div className="relative max-w-3xl p-5 bg-[url('/img/art/paper-light.jpg')] bg-cover border-3 border-black">

                    <div className="relative z-20 space-y-8">
                        {/* Page Header */}

                        <h1 className=" mb-3 pt-7 px-7 " style={{ fontSize: '6rem' }}>Educational Materials</h1>

                        {/* Educational Information */}
                        <div className="max-w-3xl px-7">
                            <p className="text-lg leading-relaxed mb-6">
                                Recommended for grades 3 and up, including middle- and high-schools. Matinee performances for schools are available in the full-length, two-act version of the show (2 hours including intermission) or an abridged version (55 minutes).
                            </p>

                            <p className="text-lg leading-relaxed mb-6">
                                In addition to the show itself, we will provide presenters with a comprehensive study guide, modeled on an educational curriculum at the Kennedy Center that includes:
                            </p>

                            <ul className="text-lg leading-relaxed mb-6 list-disc list-inside space-y-2">
                                <li>learning connections and education standards</li>
                                <li>methods used to tell the story, show content, about the characters, sensitive themes, sensory information</li>
                                <li>classroom and study activities including comparisons with the book, questions to inspire thought and discussion (both pre-show and post-show), suggestions for activities for students, and</li>
                                <li>a book club supplement so the students can read and discuss the graphic novel version of the book and show</li>
                                <li>a glossary of sailing terms</li>
                                <li>historical references to place the show in a real-life context</li>
                            </ul>
                            <p className="text-lg leading-relaxed mb-6">
                                <a href="/learning-guide" className="font-semibold">View the complete learning guide.</a>
                            </p>

                        </div>


                    </div>
                </div >
            </div >
        </div>
    );
}
