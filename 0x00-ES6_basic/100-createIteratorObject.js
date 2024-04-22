export default function createIteratorObject(report) {
  let allEmployees = [];

  for (const department in report.allEmployees) {
    allEmployees = [...allEmployees, ...report.allEmployees[department]];
  }

  let currentIndex = 0;

  return {
    [Symbol.iterator]() {
      return {
        next() {
          if (currentIndex < allEmployees.length) {
            return { value: allEmployees[currentIndex++], done: false };
          } else {
            return { done: true };
          }
        },
      };
    },
  };
}
