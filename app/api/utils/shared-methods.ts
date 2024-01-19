import dayjs from "dayjs";

export function oneYearAgo() {
  const currentDate = dayjs();
  return {
    today: currentDate.format("YYYY-MM-DD"),
    oneYearAgo: currentDate.subtract(1, "year").format("YYYY-MM-DD"),
  };
}
