import Image from "next/image";

export default function Home() {
  return (
    <div className=" bg-[url('/img/art/home-background.jpg')] bg-cover ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8  ">
        <div className="grid gap-6 md:grid-cols-12">
          {/* Title and Director */}

          <div className="md:col-span-7 flex items-start">
            <div className="w-full " >
              <Image
                src="/img/art/cover-art.jpg"
                alt="Treasure Island Reimagined: Jane Hawkins and the Pirate's Gold"
                width={1200}
                height={1800}
                className="block w-full h-auto border-3 border-black"
                priority
              />
            </div>
          </div>
          <div className="md:col-span-5 md:col-start-8 space-y-5">

            {/* Main Description */}
            <div className="max-w-2xl text-2xl  bg-[url('/img/art/paper-light.jpg')] bg-cover border-3 border-black p-5 mb-8  " >
              <p className="  mb-6">
                <span className="float-left text-9xl mr-2 -mt-4">S</span>lated to begin touring in the Fall of 2026, <strong>Treasure Island Reimagined: Jane Hawkins and the Pirate's Gold</strong> is Jason Neulander's newest "live-action graphic novel." In this adaptation of Robert Louis Stevenson's classic, four performers provide all the voices, sound effects, and cinematic score - live and in front of your eyes - in front of a huge screen to tell an on-the-edge-of-your-seat tale of danger and adventure for the kid in everyone.
              </p>

              <p className="  ">
                The year is 1754. The place, the western shores of Scotland. Jane Hawkins, twelve years old, works at a sleepy seaside inn. When a sinister vagabond arrives with a mysterious trunk, Jane's humdrum life swerves towards adventure…
              </p>
            </div>

          </div>


        </div>
      </div>
    </div>

  );
}
