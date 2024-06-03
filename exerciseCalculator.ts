// import { isNotNumber } from "./utils";

interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

export function calculateExercises(period: number[], target: number): Result {
  const trainingDays = period.reduce((count, hours) => hours > 0 ? count + 1 : count, 0);
  const average = period.reduce((total, hours) => total + hours, 0) / period.length;
  return {
    periodLength: period.length,
    trainingDays: trainingDays,
    target: target,
    average: average,
    success: average >= target,
    rating: 2,
    ratingDescription: 'not too bad but could be better'
  }
}

// const period = process.argv.slice(3).map(x => parseFloat(x))
// const target = parseInt(process.argv[2])

// for (const x of period.concat(target)) {
//   if (isNotNumber(x)) {
//     throw new Error('Provied values were not numbers!')
//   }
// }

// console.log(calculateExercises(period, target))
