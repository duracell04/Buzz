import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  animated?: boolean;
  title?: string;
};

const Logo = ({ className, animated = false, title = "Buzz" }: LogoProps) => {
  return (
    <svg
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={cn("shrink-0", className)}
    >
      {animated && (
        <style>{`
          .heart {
            transform-box: fill-box;
            transform-origin: 50% 55%;
            animation: beat 2.4s infinite ease-in-out;
          }

          @keyframes beat {
            0%, 100% { transform: scale(1); }
            25% { transform: scale(1.02); }
            50% { transform: scale(0.995); }
            75% { transform: scale(1.015); }
          }

          .pulse {
            stroke-dasharray: 260;
            stroke-dashoffset: 260;
            animation: pulseMove 3s infinite ease-out;
          }

          @keyframes pulseMove {
            0% {
              stroke-dashoffset: 260;
              opacity: 0;
            }
            20% {
              opacity: 0.7;
            }
            70% {
              stroke-dashoffset: 0;
              opacity: 0.9;
            }
            100% {
              stroke-dashoffset: 0;
              opacity: 0;
            }
          }
        `}</style>
      )}

      <rect x="6" y="6" width="108" height="108" rx="24" fill="hsl(var(--night-plum))" />
      <path
        className={animated ? "heart" : undefined}
        d="M60 98 L26 64 C14 52 14 34 27 26 C39 19 52 22 60 33 C68 22 81 19 93 26 C106 34 106 52 94 64 L60 98Z"
        fill="none"
        stroke="hsl(var(--warm-honey))"
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        className={animated ? "pulse" : undefined}
        points="16 62 36 62 46 48 54 78 64 40 74 62 104 62"
        fill="none"
        stroke="hsl(var(--off-white))"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Logo;
