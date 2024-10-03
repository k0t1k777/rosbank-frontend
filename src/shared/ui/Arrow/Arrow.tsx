interface ArrowProps {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}

export default function Arrow ({ startX, startY, endX, endY }: ArrowProps) {
  const arrowHeadSize = 10;
  const angle = Math.atan2(endY - startY, endX - startX);
  const arrowX1 = endX - arrowHeadSize * Math.cos(angle - Math.PI / 6);
  const arrowY1 = endY - arrowHeadSize * Math.sin(angle - Math.PI / 6);
  const arrowX2 = endX - arrowHeadSize * Math.cos(angle + Math.PI / 6);
  const arrowY2 = endY - arrowHeadSize * Math.sin(angle + Math.PI / 6);

  const svgWidth = Math.max(startX, endX) + arrowHeadSize;
  const svgHeight = Math.max(startY, endY) + arrowHeadSize;

  return (
    <svg
      width={svgWidth}
      height={svgHeight}
      style={{ position: 'absolute', pointerEvents: 'none' }}
    >
      <line
        x1={startX}
        y1={startY}
        x2={endX}
        y2={endY}
        className="arrow-line"
        stroke='#8c8c8c'
        strokeWidth='2'
      />
      <line
        x1={endX}
        y1={endY}
        x2={arrowX1}
        y2={arrowY1}
        className="arrow-line"
        stroke='#8c8c8c'
        strokeWidth='2'
      />
      <line
        x1={endX}
        y1={endY}
        x2={arrowX2}
        y2={arrowY2}
        className="arrow-line"
        stroke='#8c8c8c'
        strokeWidth='2'
      />
    </svg>
  );
};
