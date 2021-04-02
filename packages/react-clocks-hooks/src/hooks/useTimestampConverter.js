import {useMemo} from 'react';
/**
  Converts a given timestamp into hours, minutes and seconds
*/
const useTimestampConverter = (timestamp) => {
  const details = useMemo(() => {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return {hours, minutes, seconds, date};
  }, [timestamp]);
  return details;
};

export default useTimestampConverter;
