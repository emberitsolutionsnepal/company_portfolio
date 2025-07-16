const AwsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 40 40" fill="none" width={40} height={40} {...props}>
    <g>
      <rect width="40" height="40" rx="8" fill="#232F3E" />
      <path
        d="M10 28c4 2.5 8 2.5 12 0"
        stroke="#FF9900"
        strokeWidth="2"
        fill="none"
      />
      <ellipse cx="20" cy="18" rx="8" ry="4" fill="#FF9900" />
      <text
        x="20"
        y="24"
        textAnchor="middle"
        fontSize="10"
        fill="#fff"
        fontFamily="Arial"
        fontWeight="bold"
      >
        AWS
      </text>
    </g>
  </svg>
);
export default AwsIcon;
