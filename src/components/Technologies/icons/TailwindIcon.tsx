const TailwindIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 40 40" fill="none" width={40} height={40} {...props}>
    <g>
      <rect width="40" height="40" rx="8" fill="#38BDF8" />
      <path
        d="M12 24c1.5-4 4.5-6 8-6 3.5 0 5.5 2 7 6-1.5 4-4.5 6-8 6-3.5 0-5.5-2-7-6z"
        fill="#fff"
      />
      <path
        d="M16 16c1-2.5 3-3.5 5-3.5s4 1 5 3.5c-1 2.5-3 3.5-5 3.5s-4-1-5-3.5z"
        fill="#fff"
        fillOpacity="0.7"
      />
    </g>
  </svg>
);
export default TailwindIcon;
