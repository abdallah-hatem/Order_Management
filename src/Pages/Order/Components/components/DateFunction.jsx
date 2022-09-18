const ConvertToArabicNumbers = (num) => {
  const arabicNumbers =
    "\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669";
  return new String(num).replace(/[0123456789]/g, (d) => {
    return arabicNumbers[d];
  });
};
const Months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const MonthsArabic = [
  " يناير ",
  "فبراير ",
  "مارس ",
  "أبريل ",
  "مايو ",
  "يونيو ",
  "يوليو ",
  "أغسطس ",
  "سبتمبر  ",
  "أكتوبر ",
  "نوفمبر ",
  "ديسمبر ",
];
export const DateConvertor = (date, cond) => {
  if (!date) return "";
  const d = new Date(date);
  if (cond) {
    return d.getDate() + " " + Months[d.getMonth()] + " " + d.getFullYear();
  } else {
    return (
      ConvertToArabicNumbers(d.getDate()) +
      " " +
      MonthsArabic[d.getMonth()] +
      " " +
      ConvertToArabicNumbers(d.getFullYear())
    );
  }
};
