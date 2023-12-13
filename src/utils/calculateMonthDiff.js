export function calculateMonthDifference(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const yearDiff = end.getFullYear() - start.getFullYear();
  const monthDiff = end.getMonth() - start.getMonth();

  const totalMonths = yearDiff * 12 + monthDiff;

  return totalMonths;
}

// Example usage
const startDate = "2023-12-30";
const endDate = "2024-02-29";
const monthsDifference = calculateMonthDifference(startDate, endDate);

console.log(`Months Difference: ${monthsDifference}`);
