export const formatTime = () => {
  const time = new Date().getHours();
  if (time >= 0 && time <= 12) return "PAGI";
  if (time >= 12 && time <= 15) return "SIANG";
  if (time >= 15 && time <= 18) return "SORE";
  if (time >= 18 && time <= 23) return "MALAM";

  return time;
};