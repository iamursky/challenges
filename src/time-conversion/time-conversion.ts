export default function timeConversion(s: string): string {
  if (s === "12:00:00AM") return "00:00:00";
  if (s === "12:00:00PM") return "12:00:00";

  const [hours, minutes, seconds] = s.slice(0, -2).split(":").map(Number);

  if (s.endsWith("AM") && hours === 12) {
    return addLeadingZeros(0, minutes, seconds);
  }

  if (s.endsWith("PM") && hours !== 12) {
    return addLeadingZeros(hours + 12, minutes, seconds);
  }

  return addLeadingZeros(hours, minutes, seconds);
}

function addLeadingZeros(hours: number, minutes: number, seconds: number): string {
  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}
