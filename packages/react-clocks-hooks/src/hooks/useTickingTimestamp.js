import React, { useState, useEffect } from "react";

const useTickingTimestamp = ({ timestamp }) => {
  const [tickingTimestamp, setTickingTimestamp] = useState(timestamp);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const timestamp = Date.now();
      setTickingTimestamp((timestamp) => timestamp + 1000);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return tickingTimestamp;
};

export default useTickingTimestamp;
