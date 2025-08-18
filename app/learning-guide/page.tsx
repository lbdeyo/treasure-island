import Image from "next/image";

export default function LearningGuide() {
    return (
        <div className="bg-[url('/img/art/p18-burn.jpg')] bg-cover bg-top bg-repeat min-h-screen">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
                <div className="bg-[url('/img/art/paper-light.jpg')] bg-cover bg-top bg-repeat min-h-screen max-w-3xl border-3 border-black">
                    <div className="space-y-8">
                        {/* Complete Learning Guide */}
                        <div className="max-w-3xl   bg-opacity-100 p-7 " >
                            <h1 className=" mb-6 pt-5" style={{ fontSize: '5rem' }}>Complete Learning Guide</h1>
                            < p className="text-lg leading-relaxed mb-8" >
                                <Image src="/img/art/select-13.jpg" alt="learning eye" width={300} height={300} className="border-1 border-black mb-5 md:float-right md:ml-5" />
                                <a href="#" className="font-semibold">Download</a> the guide as a pdf.
                            </p>

                            <div className="mb-12">
                                <h3 className="text-xl font-bold mb-4">Learning Guide Contents:</h3>
                                <ul className="text-lg leading-relaxed space-y-1 list-disc list-inside">
                                    <li><a href="#overview" className="font-medium">Educational Programming Overview</a></li>
                                    <li><a href="#learning-objectives" className="font-medium">Learning Objectives</a></li>
                                    <li><a href="#standards" className="font-medium">Education Standards Alignment</a></li>
                                    <li><a href="#what-to-expect" className="font-medium">What to Expect</a></li>
                                    <li><a href="#text-comparison" className="font-medium">Text Comparison Activities</a></li>
                                    <li><a href="#before-show" className="font-medium">Before the Performance</a></li>
                                    <li><a href="#after-show" className="font-medium">After the Performance</a></li>
                                    <li><a href="#activities" className="font-medium">Try It Yourself Activities</a></li>
                                    <li><a href="#further-exploration" className="font-medium">Continue Exploring</a></li>
                                    <li><a href="#historical-context" className="font-medium">Real-Life History</a></li>
                                    <li><a href="#glossary" className="font-medium">Glossary of Nautical Terms</a></li>
                                </ul>
                            </div>

                            <h3 id="overview" className="text-2xl font-bold mb-4">Educational Programming and Learning Guide</h3>

                            <p className="text-lg leading-relaxed mb-6">
                                Jane Hawkins and the Pirate's Gold is Jason Neulander's newest "live-action graphic novel." Adapted from Robert Louis Stevenson's classic pirate story Treasure Island, this production features live voices, sound effects, and cinematic score as more than 1,200 comic-book images play out sequentially, projected on a huge screen, to tell the story in a multimedia spectacle like none other.
                            </p>

                            <Image src="/img/art/long-john-silver-char-sheet.jpg" alt="Learning Guide Cover" width={1000} height={1000} className="border-3 border-black mb-5" />

                            <p className="text-lg leading-relaxed mb-4">
                                <strong>Recommended ages:</strong> Grades 3 and up, including middle- and high-school. Contact us for the graphic novel to use in the classroom before or after seeing the show.
                            </p>

                            <p className="text-lg leading-relaxed mb-4">
                                Matinee performances for schools are available in the full-length, two-act version of the show (2 hours including intermission) or an abridged version (55 minutes).
                            </p>

                            <p className="text-lg leading-relaxed mb-6">
                                This study guide is modeled on a program at the Kennedy Center.
                            </p>

                            <p className="text-lg leading-relaxed mb-6 italic">
                                The year is 1754. The place, the western shores of Scotland. Jane Hawkins, twelve years old, works at a sleepy seaside inn. When a sinister vagabond arrives with a mysterious trunk, Jane's humdrum life swerves towards adventure…
                            </p>

                            <h4 id="learning-objectives" className="text-xl font-bold mb-4">In this Learning Guide, you'll...</h4>
                            <ul className="text-lg leading-relaxed mb-6 list-disc list-inside space-y-2">
                                <li>Engage in a comprehensive and analytical evaluation of the theatrical production, utilizing critical reflection skills and participating in meaningful discussions to enhance your understanding of the performance.</li>
                                <li>Compare and contrast the differences in storytelling styles between original text and theatrical script adaptation through text analysis and discussion.</li>
                                <li>Effectively express your thoughts, feelings, and ideas using various mediums such as writing, drawing, and discussion.</li>
                            </ul>

                            <h4 id="standards" className="text-xl font-bold mb-4">Education Standards Alignment</h4>

                            <h5 className="text-lg font-bold mb-2">National Core Arts Standards</h5>
                            <ul className="text-lg leading-relaxed mb-4 list-disc list-inside space-y-1">
                                <li>TH:Cr1: Generate and conceptualize artistic ideas and work.</li>
                                <li>TH:Cr2: Organize and develop artistic ideas and work.</li>
                                <li>TH:Cn10: Synthesize and relate knowledge and personal experiences to make art.</li>
                                <li>TH:Cn11: Relate artistic ideas and works with societal, cultural, and historical context to deepen understanding.</li>
                            </ul>

                            <h5 className="text-lg font-bold mb-2">Common Core Standards</h5>
                            <ul className="text-lg leading-relaxed mb-4 list-disc list-inside space-y-1">
                                <li>CCSS.ELA-LITERACY.RL.6.7: Compare and contrast the experience of reading a story, drama, or poem to listening to or viewing an audio, video, or live version of the text.</li>
                                <li>CCSS.ELA-LITERACY.W.6.3.D: Use precise words and phrases, relevant descriptive details, and sensory language to convey experiences and events.</li>
                            </ul>

                            <h5 className="text-lg font-bold mb-2">CASEL Competencies (Social and Emotional Learning)</h5>
                            <div className="text-lg leading-relaxed mb-6 space-y-3">
                                <div>
                                    <strong>Self-Awareness:</strong> The abilities to understand one's own emotions, thoughts, and values and how they influence behavior across contexts.
                                    <ul className="list-disc list-inside ml-4 mt-1">
                                        <li>Integrating personal and social identities</li>
                                        <li>Linking feelings, values, and thoughts</li>
                                    </ul>
                                </div>
                                <div>
                                    <strong>Social Awareness:</strong> The abilities to understand the perspectives of and empathize with others, including those from diverse backgrounds, cultures, & contexts.
                                    <ul className="list-disc list-inside ml-4 mt-1">
                                        <li>Perspective-taking</li>
                                        <li>Demonstrating empathy and compassion</li>
                                    </ul>
                                </div>
                                <div>
                                    <strong>Relationship Skills:</strong> The abilities to establish and maintain healthy and supportive relationships and to effectively navigate settings with diverse individuals and groups.
                                    <ul className="list-disc list-inside ml-4 mt-1">
                                        <li>Communicating effectively</li>
                                        <li>Identifying solutions for personal and social problems</li>
                                        <li>Reflecting on one's role to promote personal, family, and community well-being</li>
                                    </ul>
                                </div>
                            </div>


                            <h4 id="what-to-expect" className="text-xl font-bold mb-4">What to Expect</h4>

                            <Image src="/img/art/select-7.jpg" alt="Learning Guide Cover" width={300} height={300} className="border-1 border-black mb-5 md:float-right md:ml-5" />

                            <h5 className="text-lg font-bold mb-2">Performance</h5>
                            <ul className="text-lg leading-relaxed mb-4 list-disc list-inside space-y-1">
                                <li>The story is told through dialogue, sound effects, music, and projected comic-book artwork.</li>
                                <li>The play is a swashbuckling adventure story with life-and-death stakes. Please be advised that the content includes what could be considered sensitive themes portrayed on stage, including death and trauma.</li>
                            </ul>

                            <h5 className="text-lg font-bold mb-2">Performers</h5>
                            <ul className="text-lg leading-relaxed mb-4 list-disc list-inside space-y-1">
                                <li>All of the actors play multiple characters in the show. To become different characters, the actors change their voices and movements.</li>
                                <li>The actors also make all of the sounds that you'll hear during the performance, including sound effects and music.</li>
                            </ul>

                            <h5 className="text-lg font-bold mb-2">Sound</h5>
                            <ul className="text-lg leading-relaxed mb-4 list-disc list-inside space-y-1">
                                <li>The performers sometimes illustrate strong emotions, like when Jane flees for her life from Israel Hands.</li>
                                <li>The music during the performance is occasionally exuberant and can be loud for some audience members.</li>
                                <li>The music and soundscapes throughout the performance include thunder, gunshots, and other loud noises.</li>
                            </ul>

                            <h5 className="text-lg font-bold mb-2">Projection</h5>
                            <ul className="text-lg leading-relaxed mb-4 list-disc list-inside space-y-1">
                                <li>The entire story is shown through the sequential projection of more than a thousand comic-book images.</li>
                                <li>Some of those images may be scary to some audience members.</li>
                            </ul>

                            <h5 className="text-lg font-bold mb-2">What to Bring</h5>
                            <p className="text-lg leading-relaxed mb-6">
                                Everyone is encouraged to bring any sensory or accessibility tools that will help make the experience comfortable for them. A few suggestions of items audience members may find useful include noise-canceling headphones, sunglasses or visors, fidgets, and communication devices.
                            </p>

                            <h4 id="text-comparison" className="text-xl font-bold mb-4">Transforming Words into Action:</h4>
                            <p className="text-lg leading-relaxed mb-4">
                                Explore the magic of bringing literature to the stage with a glimpse into Robert Louis Stevenson's novel Treasure Island and the comic-book and stage adaptation it inspired. The following is an excerpt along with a corresponding scene adapted from the chapter entitled "Israel Hands".
                            </p>
                            <ul className="text-lg leading-relaxed mb-6 list-disc list-inside space-y-1">
                                <li>Excerpt from the book (link to be added)</li>
                                <li>Excerpt from the comic-book (link to be added)</li>
                            </ul>

                            <h5 className="text-lg font-bold mb-2">Questions to inspire thought and spark discussion</h5>

                            <h6 className="text-lg font-bold mb-2">Pre-Show</h6>
                            <ul className="text-lg leading-relaxed mb-4 list-disc list-inside space-y-1">
                                <li>What stood out to you when comparing the two texts?</li>
                                <li>How do these texts compare in terms of language, structure, and characterization?</li>
                                <li>Do you think that the scripted scene captures the same emotion as the book excerpt or is it different? Why?</li>
                            </ul>

                            <h6 className="text-lg font-bold mb-2">Post-Show</h6>
                            <ul className="text-lg leading-relaxed mb-6 list-disc list-inside space-y-1">
                                <li>How did reading the scene compare to watching it performed live?</li>
                                <li>How has the stage performance influenced your opinion of the book?</li>
                                <li>What do you think are some advantages and disadvantages of adapting a novel for the stage? For a graphic novel?</li>
                            </ul>

                            <h4 id="before-show" className="text-xl font-bold mb-4">Before the Performance</h4>
                            <h5 className="text-lg font-bold mb-2">What to Look and Listen for:</h5>
                            <ul className="text-lg leading-relaxed mb-6 list-disc list-inside space-y-1">
                                <li>Keep an eye on the performers they use various instruments and objects to create the sounds in the show. How does your imagination help make those sounds part of the action and plot of the story?</li>
                                <li>Listen for how performers switch up their tone, pitch, speed, and voice quality to bring a whole cast of characters to life on stage.</li>
                                <li>Check out all of the innovative ways that technology is used in the production to take theatrical storytelling to the next level, like projections and sound effects.</li>
                            </ul>

                            <Image src="/img/art/select-11.jpg" alt="Learning Guide Cover" width={1000} height={1000} className="border-3 border-black mb-5" />

                            <h4 id="after-show" className="text-xl font-bold mb-4">After the Performance</h4>
                            <h5 className="text-lg font-bold mb-2">Think About and Discuss:</h5>
                            <ul className="text-lg leading-relaxed mb-6 list-disc list-inside space-y-1">
                                <li>Which character in the play do you feel like you could relate to? Why?</li>
                                <li>Did Jane change over the course of her experience? If so, how? What do you think she learned?</li>
                                <li>Jane is given the option of growing up in English society or becoming a pirate. Given what you now know about her situation, what would you do if you were her? Why?</li>
                                <li>Dr. Livesey and Long John Silver both serve as mentors to Jane in his own way? How did Jane respond to each of their points of view? How did you respond?</li>
                                <li>Both Jane and Doctor Livesey are unique in the context of the story because of either their gender or their race. How do they navigate their situations? Have you ever felt like you were different from everyone else? How have you navigated that situation?</li>
                            </ul>

                            <h4 id="activities" className="text-xl font-bold mb-4">Try It Yourself</h4>
                            <ul className="text-lg leading-relaxed mb-6 list-disc list-inside space-y-2">
                                <li><strong>Be a comic-book artist!</strong> create a comic-book version of a chapter of your favorite book. How does adding pictures change how you tell the story?</li>
                                <li><strong>Treasure Hunt:</strong> what's something you own that's valuable to you? Has owning it changed you? Hide it in your house and create a treasure map for it. Can any family members now find it?</li>
                                <li><strong>Write your own adventure.</strong> Have you ever done something exciting or thrilling? Write a version of that story with cliffhangers.</li>
                            </ul>

                            <h4 id="further-exploration" className="text-xl font-bold mb-4">Continue exploring</h4>
                            <ul className="text-lg leading-relaxed mb-6 list-disc list-inside space-y-1">
                                <li>Watch a video of Jason Neulander talking about what inspires him and his creative process.</li>
                                <li>Read the original novel by Robert Louis Stevenson</li>
                                <li>Creating characters: use Kennedy Center "Character Sketches" as a model</li>
                                <li>Creating plot: use Kennedy Center "Plotting a Story" as a model</li>
                            </ul>

                            <Image src="/img/art/still-1.jpg" alt="Learning Guide Cover" width={1000} height={1000} className="border-3 border-black mb-5" />
                            <h4 id="historical-context" className="text-xl font-bold mb-4">The Real-Life History in "Jane Hawkins and the Pirate's Gold"</h4>

                            <div className="text-lg leading-relaxed mb-6 space-y-4">
                                <p><strong>Pirates, corsairs, and privateers - the life of a seafaring outlaw.</strong> Piracy reached its peak in the Atlantic Ocean the middle of the 18th Century. Both in the European continent and in the Americas pirates and privateers were a common scourge to the law-abiding seaman. Unlike law-abiding ships, though, pirate ships operated as a democracy, with the sailors voting for their captain. Find out more about real life pirates (and their legalized counterparts, privateers) here: <a href="https://goldenageofpiracy.org">https://goldenageofpiracy.org</a></p>

                                <p><strong>Women in British society in the 18th Century.</strong> In Jane Hawkins and Pirate's Gold, Jane is a girl who gets to have a life-changing adventure. In real life, most girls didn't get those kinds of opportunities. They were expected to marry and bear children. When they got married, they and everything they owned became the property of their husband. Find out more about the lives of women in 1700s England: <a href="https://sites.udel.edu/britlitwiki/social-and-family-life-in-the-late17th-early-18th-centuries/">https://sites.udel.edu/britlitwiki/social-and-family-life-in-the-late17th-early-18th-centuries/</a></p>

                                <p><strong>Real life female captains.</strong> In Jane Hawkins and Pirate's Gold, Silver offers Jane the opportunity to become a pirate captain. In real life, one way that women could chart their own courses in 18th Century England was to become a pirate. And in fact, in real life there were female pirate captains. The most famous were Cheng I Sao, Anne Bonny, and Mary Read. Find out more about these and other female captains here: <a href="https://www.history.com/articles/5-notorious-female-pirates">https://www.history.com/articles/5-notorious-female-pirates</a></p>

                                <p><strong>Black People in British society in the 18th Century.</strong> In Jane Hawkins and the Pirate's Gold, Dr. Livesey is a free Black man. In real life in 1754, most Black people in Great Britain and its colonies were enslaved. Discover what life was like for Black people in 1700s England and the real-life free Black men on whom Dr. Livesey is based: <a href="https://www.english-heritage.org.uk/visit/places/portchester-castle/history-and-stories/black-people-in-late-18th-century-britain/">https://www.english-heritage.org.uk/visit/places/portchester-castle/history-and-stories/black-people-in-late-18th-century-britain/</a></p>
                            </div>
                            <Image src="/img/art/still-4.jpg" alt="Learning Guide Cover" width={1000} height={1000} className="border-3 border-black mb-5" />
                            <h4 id="glossary" className="text-xl font-bold mb-4">Glossary of terms you may hear in the show</h4>
                            <div className="text-lg leading-relaxed space-y-2">
                                <p><strong>Aft</strong> - the direction of the stern of a ship (see Stern)</p>
                                <p><strong>Black Spot</strong> - a scrap of paper marked with a black splotch of ink. Whoever receives the Black Spot will be killed by pirates.</p>
                                <p><strong>Boom</strong> - a horizontal pole to which the bottom of a triangular sail is tied. It is connected to the lower part of the mast and used to control the sail relative to the wind.</p>
                                <p><strong>Bow</strong> - the frontmost point of a ship</p>
                                <p><strong>Bow-ports</strong> - windows at the bow of a ship</p>
                                <p><strong>Bowsprit</strong> - the pole that extends forward from the bow of the ship, to which the jib is attached</p>
                                <p><strong>Brace</strong> - a rope used to rotate a yard arm around a mast</p>
                                <p><strong>Capsize</strong> - to roll a ship so hard that it flips sideways or upside-down in the water. Caused by huge waves, strong winds, or both. The sailors thrown overboard must be rescued or they will drown.</p>
                                <p><strong>Cat-o-nine-tails</strong> - a whip with nine lashes, often used by the first mate on sailors on a ship when they misbehave</p>
                                <p><strong>Clew</strong> - the aft corner of a sail</p>
                                <p><strong>Deck</strong> - the floor of the open-air part of the ship</p>
                                <p><strong>First Mate</strong> - the second in command on a ship, reports directly to the captain</p>
                                <p><strong>Fore</strong> - the direction of the bow of a ship</p>
                                <p><strong>Forecastle</strong> - the raised part of the deck at the bow of the ship</p>
                                <p><strong>Fortnight</strong> - a period of time equal to two weeks</p>
                                <p><strong>Furl</strong> - to bundle and tie up. Sailed are furled to a yard arm or boom when they are not in use.</p>
                                <p><strong>Guy</strong> - a rope used to control a sail</p>
                                <p><strong>Haul</strong> - to drag something in the water</p>
                                <p><strong>Hawse-hole</strong> - a hole cut into the bow of a ship for ropes to pass through</p>
                                <p><strong>Helm</strong> - the steering wheel, or tiller, of a ship</p>
                                <p><strong>Hull</strong> - the main outer body of a ship</p>
                                <p><strong>Jib</strong> - a sail at the bow of a ship, connected at one end to the bowsprit and the other end to the foremost mast.</p>
                                <p><strong>Keel</strong> - the bottom part of the hull of a ship that keeps the ship from moving forward and not sideways in the water.</p>
                                <p><strong>Keel-haul</strong> - a legendary form of punishment designed to strike fear in the hearts of sailors. A sailor is tied to a rope, thrown off the bow of a ship and dragged underwater, under the keel, to the back of the ship. There is no evidence this form of torture was ever used.</p>
                                <p><strong>Knight-head</strong> - an upright piece of wood connecting the bowsprit to the bow of a ship</p>
                                <p><strong>Leeward</strong> - the side of a ship protected from the wind</p>
                                <p><strong>Lubber</strong> - a person who doesn't know how to sail</p>
                                <p><strong>Main mast</strong> - the largest mast of a ship. On a three-masted ship, the middle mast.</p>
                                <p><strong>Main-sail</strong> - the lowest and largest sail on the main mast of a ship</p>
                                <p><strong>Mariner</strong> - a sailor</p>
                                <p><strong>Mast</strong> - the pole to which the sails of a ship are attached</p>
                                <p><strong>Nor'-easter</strong> - a vicious winter storm</p>
                                <p><strong>Pieces of Eight</strong> - gold coins that can be broken into eight smaller pieces. Also a term for gold that has sunk to the bottom of the ocean in a shipwreck.</p>
                                <p><strong>Pirates Code, The</strong> - the code of honor that the pirates in this story must abide by. Without its strict rules, pirates would descend into anarchy.</p>
                                <p><strong>Port</strong> - the left side of a ship, looking towards the bow</p>
                                <p><strong>Pox</strong> - small pox, a deadly disease now eradicated because of vaccines</p>
                                <p><strong>Reef tackles</strong> - ropes used to make a sail smaller when the wind threatens to capsize a ship</p>
                                <p><strong>Royal</strong> - a small sail flown at the top of a mast</p>
                                <p><strong>Rudder</strong> - the part of the ship used to control direction in the water</p>
                                <p><strong>Quarterdeck</strong> - the raised part of the deck at the aft of a ship. Often, the captain's quarters will be directly under it.</p>
                                <p><strong>Schooner</strong> - a type of ship that has triangular, not square, sails, sits lower in the water than a ship with square sales, and is faster than a ship with square sails</p>
                                <p><strong>Scupper</strong> - an opening in the side of a ship that allows water to drain</p>
                                <p><strong>Scurvy</strong> - a disease caused by a lack of Vitamin C, often suffered on a ship due to a lack of fresh citrus fruit</p>
                                <p><strong>Sheet</strong> - the rope that controls a sail of a ship to take best advantage of the wind</p>
                                <p><strong>Snuff</strong> - powdered tobacco sniffed by men and women in the 18th Century</p>
                                <p><strong>Squall</strong> - a storm at sea</p>
                                <p><strong>Starboard</strong> - the right side of a ship, looking towards the bow</p>
                                <p><strong>Stern</strong> - the back wall of a ship</p>
                                <p><strong>Stockade</strong> - a building used to protect its inhabitants</p>
                                <p><strong>Studding sail</strong> - an extra sail used in good weather to take better advantage of the wind</p>
                                <p><strong>Tiller</strong> - the steering wheel on a ship</p>
                                <p><strong>Unfurl</strong> - to untie and drop or raise a sail so that its full surface can be used to catch the wind</p>
                                <p><strong>Weather-eye</strong> - a careful watch for something</p>
                                <p><strong>Windward</strong> - the side of a ship that the wind is blowing from, in a strong wind the side that can get the most damage</p>
                                <p><strong>Yard Arm</strong> - the horizontal bar from which square sails hang when unfurled and to which sails are tied when furled. It runs across the mast. Large ships will have three or four per mast, one for each of the sails. Also simply called a yard.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

