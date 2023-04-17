// Задача 1

function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]
    }

    if (arr[i] > max) {
      max = arr[i]
    }

    sum += arr[i];
  }
  const avg = sum / arr.length;
  const avgFormatted = avg.toFixed(2);
  const avgResult = Number.parseFloat(avgFormatted);
  return { min: min, max: max, avg: avgResult };
};

function getArrayParams2(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  const avg = (sum / arr.length).toFixed(2);
  const avgFormatted = Number.parseFloat(avg);
  return { min: min, max: max, avg: avgFormatted };
};

//Задача 2

function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

function differenceMaxMinWorker(...arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (max < num) {
      max = num;
    }
    else if (min > num) {
      min = num;
    };
  }
  const result = max - min;
  return result || 0;
};

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement = sumEvenElement + arr[i];
    } else {
      sumOddElement = sumOddElement + arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
};

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i]
      countEvenElement += 1
    }
  }
  return sumEvenElement / countEvenElement;
};

// Задача 3

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const workerResult = func(...arrOfArr[i]);
    if (workerResult > maxWorkerResult) {
      maxWorkerResult = workerResult
    }
  }
  return maxWorkerResult;
};
