export const convertDate = (inputDate) => {
  const date = new Date(inputDate);

  // Array to hold day names
  const days = ["일", "월", "화", "수", "목", "금", "토"];

  // Extract year, month, day, and day of the week from the date object
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Months are 0-indexed, so add 1
  const day = date.getDate();
  const dayOfWeek = days[date.getDay()]; // Get the day of the week

  // Adjust the time to the desired timezone (in this case, 7 hours ahead)
  const hours = date.getUTCHours() + 7;
  const minutes = date.getMinutes();

  const formattedDate = `${year}.${month}.${day}(${dayOfWeek}) ${
    hours < 10 ? "0" + hours : hours
  }:${minutes < 10 ? "0" + minutes : minutes}`;

  return formattedDate;
};

export const formatDate = (inputDate) => {
  const date = new Date(inputDate);

  // Extract year, month, and day from the date object
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Months are 0-indexed, so add 1
  const day = date.getDate();

  const formattedDate = `${year}.${month}.${day}`;

  return formattedDate;
};

export function checkDeadline(isoDate) {
  const date = new Date(isoDate);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Check if the deadline has passed
  if (date < today) {
    return "Deadline Passed";
  }
}

export const calculateRefundAmount = (departureDate, price) => {
  const now = new Date();
  const departure = new Date(departureDate);
  const diffTime = departure - now;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  let refundAmount;

  if (diffDays > 7) {
    // Full refund
    refundAmount = price;
  } else if (diffDays <= 7 && diffDays >= 3) {
    // 50% refund
    refundAmount = price / 2;
  } else if (diffDays < 3 && diffDays >= 0) {
    // No refund
    refundAmount = 0;
  } else {
    // In case the departure date has already passed
    refundAmount = 0;
  }

  return refundAmount;
};
