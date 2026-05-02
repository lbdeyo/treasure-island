/** Alamo Drafthouse Mueller serialized chapter shows — posters live in public/img/movie-posters */

export type AlamoSerialShow = {
  dateLine: string;
  chapterLine: string;
  posterSrc: string;
  posterAlt: string;
  ticketUrl: string;
};

export const alamoSerialShows: AlamoSerialShow[] = [
  {
    dateLine: "Saturday, May 9 • noon",
    chapterLine: "Paired with Chapter One: The Vagabond",
    posterSrc: "/img/movie-posters/robin-hood.png",
    posterAlt: "Treasure Island Reimagined paired with The Adventures of Robin Hood",
    ticketUrl:
      "https://drafthouse.com/austin/event/treasure-island-reimagined-the-adventures-of-robin-hood-treasure-island",
  },
  {
    dateLine: "Saturday, June 6 • noon",
    chapterLine: "Paired with Chapter Two: The Map",
    posterSrc: "/img/movie-posters/goonies.png",
    posterAlt: "Treasure Island Reimagined paired with The Goonies",
    ticketUrl:
      "https://drafthouse.com/austin/event/treasure-island-reimagined-the-goonies",
  },
  {
    dateLine: "Saturday, June 20 • noon",
    chapterLine: "Paired with Chapter Three: The Hispaniola",
    posterSrc: "/img/movie-posters/flash-gordon.png",
    posterAlt: "Treasure Island Reimagined paired with Flash Gordon",
    ticketUrl:
      "https://drafthouse.com/austin/event/treasure-island-reimagined-flash-gordon",
  },
  {
    dateLine: "Saturday, July 11 • noon",
    chapterLine: "Paired with Chapter Four: The Island",
    posterSrc: "/img/movie-posters/hidden-fortress.png",
    posterAlt: "Treasure Island Reimagined paired with The Hidden Fortress",
    ticketUrl:
      "https://drafthouse.com/austin/event/treasure-island-reimagined-the-hidden-fortress",
  },
  {
    dateLine: "Saturday, July 25 • noon",
    chapterLine: "Paired with Chapter Five: The Stockade",
    posterSrc: "/img/movie-posters/raiders.png",
    posterAlt: "Treasure Island Reimagined paired with Raiders of the Lost Ark",
    ticketUrl:
      "https://drafthouse.com/austin/event/treasure-island-reimagined-raiders-of-the-lost-ark",
  },
  {
    dateLine: "Saturday, August 8",
    chapterLine: "Paired with Chapter Six: The Castaway",
    posterSrc: "/img/movie-posters/terminator.png",
    posterAlt: "Treasure Island Reimagined paired with The Terminator",
    ticketUrl:
      "https://drafthouse.com/austin/event/the-terminator-treasure-island-reimagined",
  },
];
