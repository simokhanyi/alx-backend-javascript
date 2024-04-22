export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task = true;  // Removed "var" here to avoid redeclaration
    task2 = false; // Removed "var" here to avoid redeclaration
  }

  return [task, task2];
}
