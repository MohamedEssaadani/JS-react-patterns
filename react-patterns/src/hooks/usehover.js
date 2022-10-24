// customerhook

import { useEffect, useRef, useState } from "react";

export function useHover() {
  // track hovering event
  const [isHovering, setIsHovering] = useState(false);

  // tracked component
  const ref = useRef(null);

  // events handlers
  const handleMouseOver = () => setIsHovering(true);

  const handleMouseOut = () => setIsHovering(false);

  useEffect(() => {
    const node = ref.current;

    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);

      return () => {
        node.removeEventListener("mouseover", handleMouseOver);
        node.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, [ref.current]);

  return [ref, isHovering];
}
