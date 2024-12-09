import { useEffect, useState } from "react";

const useWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [sidePanel, setSidePanel] = useState(false);
  const lgSize = 1024;

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    if (width > lgSize) setSidePanel(false);
    else setSidePanel(true);

    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return { sidePanel };
};

export default useWidth;
