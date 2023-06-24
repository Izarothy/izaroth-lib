const formatTime = (time: number): string => {
  const formattedTime = new Date(time).toISOString().slice(11, 19);
  return formattedTime;
};

export default formatTime;
