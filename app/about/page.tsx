export default function About() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="space-y-8">
                {/* Page Header */}
                <div className="max-w-3xl">
                    <h1 className="text-4xl font-bold mb-8">About the Play</h1>
                </div>

                {/* Production Credits */}
                <div className="max-w-3xl">
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Chemistry Laboratories and Shaw Entertainment Group Present • A Jason Neulander Production • Treasure Island Reimagined • Sound effects designed by Buzz Moran • Music by Sam Lipman • Art by Johnny Dombrowski • Produced by Jason Neulander and Simon Shaw
                    </p>
                </div>

                {/* Title and Director */}
                <div className="max-w-3xl">
                    <h2 className="text-5xl font-bold mb-4">Treasure Island Reimagined</h2>
                    <h3 className="text-2xl text-gray-700 mb-2">Jane Hawkins and the Pirate's Gold</h3>
                    <p className="text-lg text-gray-600">Written and Directed by Jason Neulander</p>
                </div>

                {/* Main Description */}
                <div className="max-w-3xl">
                    <p className="text-lg leading-relaxed mb-6">
                        Slated to begin touring in the Fall of 2026, <strong>Treasure Island Reimagined: Jane Hawkins and the Pirate's Gold</strong> is Jason Neulander's newest "live-action graphic novel." In this adaptation of Robert Louis Stevenson's classic, four performers provide all the voices, sound effects, and cinematic score - live and in front of your eyes - in front of a huge screen to tell an on-the-edge-of-your-seat tale of danger and adventure for the kid in everyone.
                    </p>

                    <p className="text-lg leading-relaxed text-gray-700">
                        The year is 1754. The place, the western shores of Scotland. Jane Hawkins, twelve years old, works at a sleepy seaside inn. When a sinister vagabond arrives with a mysterious trunk, Jane's humdrum life swerves towards adventure…
                    </p>
                </div>
            </div>
        </div>
    );
}
