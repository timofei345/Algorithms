
// User
// Задача заключается в следующем. Имеется три стержня — левый, средний и правый. На левом стержне находятся n дисков, диаметры которых различны. Диски упорядочены по размеру диаметра, сверху лежит наименьший, снизу — наибольший. Требуется перенести диски с левого стержня на правый, используя средний стержень как вспомогательный.
// Головоломка имеет следующие два правила:
//       1. Вы не можете поместить больший диск на меньший диск.
//       2. За один раз можно перемещать только один диск.
// Реализуйте два подхода для решения.
// Итеративно
// Рекурсивно

function towersOfHanoiIterative(numberOfDisks, source, auxiliary, destination) {
  let totalMoves = Math.pow(2, numberOfDisks) - 1;

  for (let move = 1; move <= totalMoves; move++) {
    if (move % 2 !== 0) {
      console.log(`Move disk from ${source} to ${destination}`);
    } else {
      console.log(`Move disk from ${source} to ${auxiliary}`);
      [auxiliary, destination] = [destination, auxiliary];
    }
  }
}

function towersOfHanoiRecursive(numberOfDisks, source, auxiliary, destination) {
  if (numberOfDisks === 1) {
    console.log(`Move disk from ${source} to ${destination}`);
  } else {
    towersOfHanoiRecursive(numberOfDisks - 1, source, destination, auxiliary);
    console.log(`Move disk from ${source} to ${destination}`);
    towersOfHanoiRecursive(numberOfDisks - 1, auxiliary, source, destination);
  }
}

let numberOfDisks = 3;
let source = 'A';
let auxiliary = 'B';
let destination = 'C';

console.log('Iterative solution:');
towersOfHanoiIterative(numberOfDisks, source, auxiliary, destination);

console.log('\nRecursive solution:');
towersOfHanoiRecursive(numberOfDisks, source, auxiliary, destination);