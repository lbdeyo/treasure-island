import Image from "next/image";

export default function Home() {
  return (
    <div className=" bg-[url('/img/art/p18.jpg')] bg-cover">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8  ">
        <div className="space-y-5">
          {/* Production Credits */}
          <div className="max-w-3xl bg-[#D4D6AD] p-5 border border-6 border-black" style={{ filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.4))' }}>
            <p className="text-2xl text-black leading-relaxed font-['TerraIgnota']" >
              Chemistry Laboratories and Shaw Entertainment Group Present • A Jason Neulander Production • Treasure Island Reimagined • Sound effects designed by Buzz Moran • Music by Sam Lipman • Art by Johnny Dombrowski • Produced by Jason Neulander and Simon Shaw
            </p>
          </div>

          {/* Title and Director */}
          <div className="max-w-3xl bg-[url('/img/art/paper.jpg')] bg-cover p-5 border border-6 border-black" style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.4))' }}>
            <Image
              src="/img/home-header.png"
              alt="Treasure Island Reimagined: Jane Hawkins and the Pirate's Gold"
              width={800}
              height={200}
              className="mb-2"
              priority
            />
            <p className="text-2xl text-black font-bold text-center">Written and Directed by Jason Neulander</p>
          </div>

          {/* Main Description */}
          <div className="max-w-3xl text-2xl text-white bg-[#B02025] p-5 mb-8 border border-6 border-black " style={{ filter: 'drop-shadow(0 4px 8px rgba(219, 220, 169, 0.4))' }}>
            <p className=" leading-relaxed mb-6">
              <span className="float-left text-9xl mr-2 -mt-4">S</span>lated to begin touring in the Fall of 2026, <strong>Treasure Island Reimagined: Jane Hawkins and the Pirate's Gold</strong> is Jason Neulander's newest "live-action graphic novel." In this adaptation of Robert Louis Stevenson's classic, four performers provide all the voices, sound effects, and cinematic score - live and in front of your eyes - in front of a huge screen to tell an on-the-edge-of-your-seat tale of danger and adventure for the kid in everyone.
            </p>

            <p className=" leading-relaxed ">
              The year is 1754. The place, the western shores of Scotland. Jane Hawkins, twelve years old, works at a sleepy seaside inn. When a sinister vagabond arrives with a mysterious trunk, Jane's humdrum life swerves towards adventure…
            </p>
          </div>
        </div>
      </div>
    </div>

  );
}
