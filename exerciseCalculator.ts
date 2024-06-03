interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

function calculateExercises(period: number[], target: number): Result {
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

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2))