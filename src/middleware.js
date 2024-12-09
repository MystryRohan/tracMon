// Function to get the start of the week (Monday) for a given date
function getStartOfWeek(date) {
  const startOfWeek = new Date(date);
  const day = startOfWeek.getDay();
  const diff = startOfWeek.getDate() - day + (day == 0 ? -6 : 1); // Adjust date to Monday
  startOfWeek.setDate(diff);
  startOfWeek.setHours(0, 0, 0, 0); // Set time to 00:00:00
  return startOfWeek;
}

// Function to get the start of last week
function getStartOfLastWeek(date) {
  const startOfWeek = getStartOfWeek(date);
  startOfWeek.setDate(startOfWeek.getDate() - 7); // Move back by 7 days for last week
  return startOfWeek;
}

// Function to get the end of the week (Sunday) for a given date
function getEndOfWeek(date) {
  const startOfWeek = getStartOfWeek(date);
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6); // Add 6 days to get the Sunday of the same week
  endOfWeek.setHours(23, 59, 59, 999); // Set time to 23:59:59
  return endOfWeek;
}

// Example function to differentiate data based on the current date
export function differentiateData(data) {
  const currentDate = new Date();

  // Get the start and end of this week and last week
  const startOfThisWeek = getStartOfWeek(currentDate);
  const endOfThisWeek = getEndOfWeek(currentDate);
  const startOfLastWeek = getStartOfLastWeek(currentDate);
  const endOfLastWeek = getEndOfWeek(startOfLastWeek);

  // Arrays to store categorized data
  const thisWeekData = [];
  const lastWeekData = [];
  const olderData = [];

  // Categorize data based on the date
  data.forEach((item) => {
    const itemDate = new Date(item.date);

    if (itemDate >= startOfThisWeek && itemDate <= endOfThisWeek) {
      thisWeekData.push(item); // Data from this week
    } else if (itemDate >= startOfLastWeek && itemDate <= endOfLastWeek) {
      lastWeekData.push(item); // Data from last week
    } else {
      //   olderData.push(item);
      //   continue // Data from earlier weeks
    }
  });

  return {
    thisWeekData,
    lastWeekData,
  };
}
