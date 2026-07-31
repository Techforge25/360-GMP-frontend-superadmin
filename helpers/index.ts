export const formatDate = (date: string | Date) => {
  if (!date) return "";

  const formattedDate = new Date(date);

  return formattedDate.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};