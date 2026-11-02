import type { SVGProps } from 'react';

const base = (props: SVGProps<SVGSVGElement>) => ({
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  ...props,
});

export const ArrowUpRight = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);
export const ArrowRight = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
export const ArrowDown = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M12 5v14M6 13l6 6 6-6" />
  </svg>
);
export const Download = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M12 4v11M7 11l5 5 5-5M4 19h16" />
  </svg>
);
export const Play = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)} fill="currentColor" stroke="none">
    <polygon points="9,6 18,12 9,18" />
  </svg>
);
export const Plus = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);
export const Minus = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M5 12h14" />
  </svg>
);
export const Pin = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M12 21s-6-5.5-6-11a6 6 0 1 1 12 0c0 5.5-6 11-6 11Z" />
    <circle cx="12" cy="10" r="2" />
  </svg>
);
export const Mail = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <rect x="3" y="5" width="18" height="14" rx="1" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);
export const Linkedin = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <rect x="3" y="3" width="18" height="18" rx="1" />
    <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 1 1 4 0v4M12 10v7" />
  </svg>
);
export const Globe = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
  </svg>
);
export const Menu = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)} width={22} height={22}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);
export const Close = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)} width={22} height={22}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);
export const MotionIcon = ({ on, ...p }: SVGProps<SVGSVGElement> & { on: boolean }) => (
  <svg {...base(p)} width={14} height={14}>
    {on ? <path d="M8 6v12M16 6v12" /> : <polygon points="8,6 17,12 8,18" />}
  </svg>
);
export const Laurel = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 48" fill="currentColor" aria-hidden {...p}>
    <path d="M12 46c-6-4-9-10-9-18 2 1 4 3 5 6 0-4-1-8 1-12 2 2 3 5 3 9 1-4 3-7 6-9 0 4-1 8-3 11 2-2 4-4 7-5-1 8-5 14-10 18Z" />
  </svg>
);
export const SoundIcon = ({ on, ...p }: SVGProps<SVGSVGElement> & { on: boolean }) => (
  <svg {...base(p)} width={14} height={14}>
    <path d="M4 10v4h3l4 3V7L7 10H4z" />
    {on ? <path d="M15 9a4 4 0 0 1 0 6M17.5 6.5a8 8 0 0 1 0 11" /> : <path d="M15 9l5 6M20 9l-5 6" />}
  </svg>
);
