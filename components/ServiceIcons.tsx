type IconProps = { className?: string };

const AMBER_BG = "#FAEEDA";
const AMBER = "#C8841F";
const BLUE_BG = "#E6F0FA";
const BLUE = "#2C57A6";

function Badge({
  className,
  bg,
  children,
}: {
  className?: string;
  bg: string;
  children: React.ReactNode;
}) {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="28" cy="28" r="28" fill={bg} />
      {children}
    </svg>
  );
}

/** Homepage — Grow Revenue */
export function IconGrowRevenue({ className }: IconProps) {
  return (
    <Badge className={className} bg={AMBER_BG}>
      <path d="M16 38L40 18" stroke={AMBER} strokeWidth="2" strokeLinecap="round" />
      <circle cx="16" cy="38" r="3.2" fill={AMBER} />
      <circle cx="40" cy="18" r="3.2" fill={AMBER} />
    </Badge>
  );
}

/** Homepage — Automate Work */
export function IconAutomateWork({ className }: IconProps) {
  return (
    <Badge className={className} bg={BLUE_BG}>
      <circle cx="16" cy="28" r="3.2" fill={BLUE} />
      <circle cx="40" cy="28" r="3.2" fill={BLUE} />
      <line x1="19.5" y1="28" x2="36.5" y2="28" stroke={BLUE} strokeWidth="2" strokeLinecap="round" />
      <path d="M23 20a9 9 0 0 1 10 -2" stroke={BLUE} strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <path d="M31 16l2 3l-4 1z" fill={BLUE} />
    </Badge>
  );
}

/** Homepage — Build Better Systems */
export function IconBuildSystems({ className }: IconProps) {
  return (
    <Badge className={className} bg={BLUE_BG}>
      <path d="M28 14L16 38L40 38Z" stroke={BLUE} strokeWidth="1.8" fill="none" strokeLinejoin="round" />
      <circle cx="28" cy="14" r="2.6" fill={BLUE} />
      <circle cx="16" cy="38" r="2.6" fill={BLUE} />
      <circle cx="40" cy="38" r="2.6" fill={BLUE} />
    </Badge>
  );
}

/** Homepage — Develop Your Workforce */
export function IconWorkforce({ className }: IconProps) {
  return (
    <Badge className={className} bg={AMBER_BG}>
      <circle cx="28" cy="40" r="3.4" fill={AMBER} />
      <path d="M28 36L16 20" stroke={AMBER} strokeWidth="2" strokeLinecap="round" />
      <path d="M28 36L40 20" stroke={AMBER} strokeWidth="2" strokeLinecap="round" />
      <circle cx="16" cy="20" r="2.8" fill={AMBER} />
      <circle cx="40" cy="20" r="2.8" fill={AMBER} />
    </Badge>
  );
}

/** Homepage — Scale Smarter */
export function IconScaleSmarter({ className }: IconProps) {
  return (
    <Badge className={className} bg={AMBER_BG}>
      <circle cx="28" cy="28" r="2.8" fill={AMBER} />
      <circle cx="28" cy="28" r="14" fill="none" stroke={AMBER} strokeWidth="1.4" strokeDasharray="1 3.4" />
    </Badge>
  );
}

/** Workforce training — Workplace Safety & OSHA-Related */
export function IconSafety({ className }: IconProps) {
  return (
    <Badge className={className} bg={BLUE_BG}>
      <path
        d="M28 14 L40 20 L38 34 L28 42 L18 34 L16 20 Z"
        stroke={BLUE}
        strokeWidth="1.6"
        fill="none"
        strokeLinejoin="round"
      />
      <circle cx="28" cy="28" r="2.6" fill={BLUE} />
    </Badge>
  );
}

/** Workforce training — Compliance & Ethics */
export function IconCompliance({ className }: IconProps) {
  return (
    <Badge className={className} bg={BLUE_BG}>
      <path
        d="M18 29 L25 36 L40 18"
        stroke={BLUE}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="18" cy="29" r="2.6" fill={BLUE} />
      <circle cx="25" cy="36" r="2.2" fill={BLUE} />
      <circle cx="40" cy="18" r="2.6" fill={BLUE} />
    </Badge>
  );
}

/** Workforce training — Leadership & Management */
export function IconLeadership({ className }: IconProps) {
  return (
    <Badge className={className} bg={AMBER_BG}>
      <circle cx="28" cy="15" r="3.4" fill={AMBER} />
      <path d="M28 18.5L15 38" stroke={AMBER} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M28 18.5L28 40" stroke={AMBER} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M28 18.5L41 38" stroke={AMBER} strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="15" cy="38" r="2.1" fill={AMBER} />
      <circle cx="28" cy="40" r="2.1" fill={AMBER} />
      <circle cx="41" cy="38" r="2.1" fill={AMBER} />
    </Badge>
  );
}

/** Workforce training — Sales & Customer Service */
export function IconSalesCS({ className }: IconProps) {
  return (
    <Badge className={className} bg={BLUE_BG}>
      <circle cx="18" cy="28" r="3" fill={BLUE} />
      <circle cx="38" cy="28" r="3" fill={BLUE} />
      <path d="M22 24a12 7 0 0 1 12 0" stroke={BLUE} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M22 32a12 7 0 0 0 12 0" stroke={BLUE} strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </Badge>
  );
}

/** Workforce training — Business & Professional Skills */
export function IconBizSkills({ className }: IconProps) {
  return (
    <Badge className={className} bg={AMBER_BG}>
      <path
        d="M16 38L28 30L40 20"
        stroke={AMBER}
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="38" r="2.6" fill={AMBER} />
      <circle cx="28" cy="30" r="2.6" fill={AMBER} />
      <circle cx="40" cy="20" r="2.6" fill={AMBER} />
    </Badge>
  );
}

/** Workforce training — K-12, Afterschool & Youth Development */
export function IconYouth({ className }: IconProps) {
  return (
    <Badge className={className} bg={BLUE_BG}>
      <circle cx="17" cy="36" r="2.2" fill={BLUE} />
      <path d="M20 33L36 21" stroke={BLUE} strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="38" cy="20" r="4.4" fill={BLUE} />
    </Badge>
  );
}

/** Workforce training — Employee Onboarding */
export function IconOnboarding({ className }: IconProps) {
  return (
    <Badge className={className} bg={AMBER_BG}>
      <circle cx="36" cy="28" r="3.4" fill={AMBER} />
      <line x1="14" y1="28" x2="30" y2="28" stroke={AMBER} strokeWidth="2" strokeLinecap="round" />
      <path
        d="M25 23l5 5l-5 5"
        stroke={AMBER}
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Badge>
  );
}
