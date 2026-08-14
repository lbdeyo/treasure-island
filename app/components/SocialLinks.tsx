const INSTAGRAM_URL = "https://www.instagram.com/treasureislandreimagined/";
const YOUTUBE_URL = "https://www.youtube.com/@TreasureIslandReimagined";

function InstagramLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <radialGradient id="instagram-gradient" cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <path
        fill="url(#instagram-gradient)"
        d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM17.5 6a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"
      />
    </svg>
  );
}

function YouTubeLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="#FF0000"
        d="M23.5 6.2a3.05 3.05 0 0 0-2.15-2.16C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.35.44A3.05 3.05 0 0 0 .5 6.2 32.1 32.1 0 0 0 0 12a32.1 32.1 0 0 0 .5 5.8 3.05 3.05 0 0 0 2.15 2.16C4.5 20.4 12 20.4 12 20.4s7.5 0 9.35-.44a3.05 3.05 0 0 0 2.15-2.16A32.1 32.1 0 0 0 24 12a32.1 32.1 0 0 0-.5-5.8Z"
      />
      <path fill="#FFFFFF" d="M9.75 15.57V8.43L15.84 12l-6.09 3.57Z" />
    </svg>
  );
}

const iconClass = "h-8 w-8 shrink-0";
const linkClass =
  "inline-flex items-center gap-2 text-black no-underline hover:text-black hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 rounded-sm text-lg font-medium";

type SocialLinksProps = {
  className?: string;
};

export default function SocialLinks({ className = "" }: SocialLinksProps) {
  return (
    <nav
      aria-label="Social media"
      className={`flex flex-wrap items-center gap-x-6 gap-y-3 ${className}`.trim()}
    >
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        <InstagramLogo className={iconClass} />
        Instagram
      </a>
      <a
        href={YOUTUBE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        <YouTubeLogo className={iconClass} />
        YouTube
      </a>
    </nav>
  );
}
