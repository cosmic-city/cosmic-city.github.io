import { useState, useEffect } from "react";

export default function Cursor() {
  const [mouse, setMouse] = useState<{ x: string; y: string } | null>(null);

  useEffect(() => {
    const update = (e: MouseEvent) => {
      setMouse({ x: `${e.clientX}px`, y: `${e.clientY}px` });
    };
    window.addEventListener("mousemove", update);
    return () => {
      window.removeEventListener("mousemove", update);
    };
  }, []);
  return (
    <span
      className={`h-2 w-2 bg-white absolute z-10 rounded-full ${mouse ? `left-[${mouse.x}] top-[${mouse.y}]` : ""}`}
    />
  );
}
;
