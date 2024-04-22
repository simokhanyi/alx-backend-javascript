export default function createIteratorObject(employeesReport) {
  const allEmployees = Object.values(employeesReport.allEmployees).flat();

  return {
    [Symbol.iterator]() {
      let currentIndex = 0;

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
