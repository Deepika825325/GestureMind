type Props = {
  landmarks: any[];
};

export default function LandmarkOverlay({
  landmarks,
}: Props) {

  return (

    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">

      {landmarks.map((point, index) => (

        <circle
          key={index}
          cx={`${point.x * 100}%`}
          cy={`${point.y * 100}%`}
          r="6"
          fill="#00ff88"
        />

      ))}

    </svg>

  );
}