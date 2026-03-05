import { useEffect, useState } from "react";

const CursorSpotlight = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300"
      style={{
        background: `radial-gradient(
          300px circle at ${position.x}px ${position.y}px,
          rgba(99,102,241,0.15),
          transparent 50%
        )`,
      }}
    />
  );
};

export default CursorSpotlight;