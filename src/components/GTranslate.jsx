import { useEffect, useRef } from "react";

function GTranslate() {
  const containerRef = useRef(null);

  useEffect(() => {
    const wrapper = document.querySelector(".gtranslate_wrapper");
    if (wrapper && containerRef.current) {
      containerRef.current.appendChild(wrapper);
    }
  }, []);

  return <div ref={containerRef}></div>;
}

export default GTranslate;