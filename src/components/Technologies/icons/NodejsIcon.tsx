const NodejsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 40 40" fill="none" width={40} height={40} {...props}>
    <g>
      <polygon points="20,4 36,12 36,28 20,36 4,28 4,12" fill="#8CC84B" />
      <text
        x="20"
        y="26"
        textAnchor="middle"
        fontSize="12"
        fill="#fff"
        fontFamily="Arial"
        fontWeight="bold"
      >
        Node
      </text>
    </g>
  </svg>
);
export default NodejsIcon;
