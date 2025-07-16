const ReactIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 40 40" fill="none" width={40} height={40} {...props}>
    <g>
      <ellipse cx="20" cy="20" rx="3.5" ry="3.5" fill="#61DAFB" />
      <ellipse
        cx="20"
        cy="20"
        rx="15"
        ry="6"
        stroke="#61DAFB"
        strokeWidth="2"
      />
      <ellipse
        cx="20"
        cy="20"
        rx="6"
        ry="15"
        stroke="#61DAFB"
        strokeWidth="2"
        transform="rotate(60 20 20)"
      />
      <ellipse
        cx="20"
        cy="20"
        rx="6"
        ry="15"
        stroke="#61DAFB"
        strokeWidth="2"
        transform="rotate(120 20 20)"
      />
    </g>
  </svg>
);
export default ReactIcon;
