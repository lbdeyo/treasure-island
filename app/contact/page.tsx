export default function Contact() {
    return (
        <div className="bg-[url('/img/art/contact-bg.jpg')] bg-cover bg-top bg-repeat min-h-screen">

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="max-w-3xl bg-[url('/img/art/paper-light.jpg')] bg-cover border-3 border-black p-5" >
                    <div className="space-y-8">
                        {/* Page Header */}
                        <div className="max-w-3xl">
                            <h1 className=" mb-8">Contact</h1>
                        </div>

                        {/* Production Information */}
                        <div className="max-w-3xl">
                            <h2 className="text-2xl font-bold mb-4">For information about the production:</h2>
                            <p className="text-lg leading-relaxed">
                                Jason Neulander – <a href="mailto:jason@theplanetzygon.com">jason@theplanetzygon.com</a> – <a href="tel:+15127399769">512-739-9769</a>
                            </p>
                        </div>

                        {/* Tour Bookings */}
                        <div className="max-w-3xl">
                            <h2 className="text-2xl font-bold mb-4">For tour bookings:</h2>
                            <div className="space-y-2">
                                <p className="text-lg leading-relaxed">
                                    Simon Shaw | <a href="tel:+19173926739">(917) 392-6739</a> | <a href="mailto:simon@shawentertainment.com">simon@shawentertainment.com</a>
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Sherri Leathers | <a href="tel:+16155006922">(615) 500-6922</a> | <a href="mailto:sherri@shawentertainment.com">sherri@shawentertainment.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
