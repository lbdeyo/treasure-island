export default function InfoForVenues() {
    return (
        <div className="bg-[url('/img/art/tech-bg.jpg')] md:bg-cover min-h-screen ">

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6  bg-cover bg-top bg-repeat min-h-screen">
                {/* Basic Information */}
                <div className="max-w-3xl p-6 space-y-8 bg-[url('/img/art/paper-light.jpg')] bg-cover border-3 border-black">
                    {/* Page Header */}
                    <div className="max-w-3xl">
                        <h1 className=" mb-8 pt-5">Tech Specs</h1>
                    </div>


                    <h3 className="text-xl font-bold mb-4">BASIC INFORMATION</h3>
                    <ol className="list-decimal list-inside space-y-3 text-lg leading-relaxed">
                        <li>Treasure Island Reimaged (TIR) will arrive with road cases by van or from the airport. The company provides the equipment for sound effects and a laptop for the projections.</li>
                        <li>The TIR crew will consist of two people: one company manager/technical director and one driver/merch salesperson. It is not a yellow card crew.</li>
                        <li>Total time for load in and tech: 4-5 hours, plus venue prehang and setup before company's arrival. Strike and load out will take 2 hours at most.</li>
                    </ol>

                    <h3 className="text-xl font-bold mb-4">REQUIRED FROM PRESENTER IN ADVANCE OF ENGAGEMENT</h3>
                    <ol className="list-decimal list-inside space-y-3 text-lg leading-relaxed">
                        <li>A plan of the theater showing the load-in route, dressing rooms, and house, including the typical area for the sound board.</li>
                        <li>A scaled floor plan and section of the theater.</li>
                        <li>The name, title, and phone number of the person we should contact regarding any questions about the theatre and technical matters.</li>
                    </ol>

                    <h3 className="text-xl font-bold mb-4">REQUIRED FROM PRESENTER ON PERFORMANCE DAY</h3>
                    <ol className="list-decimal list-inside space-y-3 text-lg leading-relaxed">
                        <li>Free and clear use of the theater, which should be clean, free of all scenery and other material, and heated or cooled as needed.</li>
                        <li>A parking space for a van and trailer at no cost to artist.</li>
                        <li>A local crew of five people, including three electricians familiar with the site's electrical capabilities. One of the crew should have keys to all areas TIR needs to access, including, but not limited to, stage, dressing rooms, electrical power main shutoff, and control booths.</li>
                        <li>Adequate power for the company to use.</li>
                        <li>Dressing rooms for both men and women. These should be clean and available for the company's exclusive use from six hours before show time the day of the performance. There should be restrooms for the performers' exclusive use from one hour before show time to the end of the performance.</li>
                        <li>At load in, there should be minimal refreshments of bottled water and a selection of soft drinks (both diet and non). More details on this in the complete tech rider.</li>
                    </ol>

                    <h3 className="text-xl font-bold mb-4">SCENERY TO BE PROVIDED BY PRESENTER</h3>
                    <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
                        <li>Full black masking for the stage, including legs, borders, and backdrop.</li>
                        <li>Four black cushioned stackable or folding chairs.</li>
                        <li>Two 6' tables.</li>
                    </ul>

                    <h3 className="text-xl font-bold mb-4">SOUND EQUIPMENT TO BE PROVIDED BY PRESENTER</h3>
                    <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
                        <li>Two matching black music stands in excellent condition with stand lights.</li>
                        <li>Seven tripod mic stands with booms.</li>
                        <li>Three direct-in (DI) boxes.</li>
                        <li>One vocal mic.</li>
                        <li>Four condenser mics.</li>
                        <li>One floor mic.</li>
                        <li>Two piano mics.</li>
                        <li>XLR cable for microphones and sub-snake runs.</li>
                        <li>Four wedge monitors set for four mixes.</li>
                        <li>One 16-channel sound console and amps to run a main mix and four submixes for onstage monitors.</li>
                        <li>The necessary cable to run the speakers and monitors.</li>
                        <li>A snake or equivalent to run from the stage to the mixing board.</li>
                        <li>A tuned piano (concert grand preferred).</li>
                    </ul>

                    <h3 className="text-xl font-bold mb-4">PROJECTION EQUIPMENT TO BE PROVIDED BY PRESENTER</h3>
                    <ol className="list-decimal list-inside space-y-3 text-lg leading-relaxed">
                        <li>A screen or cyc that fills most of the proscenium.</li>
                        <li>A projector with enough lumens to project onto the screen during a live performance in the venue.</li>
                    </ol>

                    <h3 className="text-xl font-bold mb-4">LIGHTING TO BE PROVIDED BY PRESENTER</h3>
                    <p className="text-lg leading-relaxed">
                        TIR will adapt the house rep lighting plot, which will light a general performance area downstage of the projection screen, plus four specials.
                    </p>

                </div>
            </div>
        </div >
    );
}
