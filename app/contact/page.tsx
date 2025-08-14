export default function Contact() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="space-y-8">
                {/* Page Header */}
                <div className="max-w-3xl">
                    <h1 className="text-4xl font-bold mb-8">CONTACT</h1>
                </div>

                {/* Production Information */}
                <div className="max-w-3xl">
                    <h2 className="text-2xl font-bold mb-4">For information about the production:</h2>
                    <p className="text-lg leading-relaxed">
                        Jason Neulander – <a href="mailto:jason@theplanetzygon.com" className="text-blue-600 hover:text-blue-800 underline">jason@theplanetzygon.com</a> – 512-739-9769
                    </p>
                </div>

                {/* Tour Bookings */}
                <div className="max-w-3xl">
                    <h2 className="text-2xl font-bold mb-4">For tour bookings:</h2>
                    <div className="space-y-2">
                        <p className="text-lg leading-relaxed">
                            Simon Shaw | (917) 392-6739 | <a href="mailto:simon@shawentertainment.com" className="text-blue-600 hover:text-blue-800 underline">simon@shawentertainment.com</a>
                        </p>
                        <p className="text-lg leading-relaxed">
                            Sherri Leathers | (615) 500-6922 | <a href="mailto:sherri@shawentertainment.com" className="text-blue-600 hover:text-blue-800 underline">sherri@shawentertainment.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
