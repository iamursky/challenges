export default function timeConversion(s: string): string {
  if (s === "12:00:00AM") return "00:00:00";
  if (s === "12:00:00PM") return "12:00:00";

  const [hours, minutes, seconds] = s.slice(0, -2).split(":").map(Number);

  if (s.endsWith("AM")) {
    return addLeadingZeros(hours, minutes, seconds);
  }

  const formattedHours = Math.max(12, hours + 12);

  return addLeadingZeros(formattedHours, minutes, seconds);
}

function addLeadingZeros(hours: number, minutes: number, seconds: number): string {
  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}
