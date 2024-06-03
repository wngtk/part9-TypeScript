function calculateBmi(height: number, weight: number): string {
  const bmi = weight/Math.pow(height / 100, 2)
  let category = 'Very overweight'
  if (bmi >= 27.5) {
    category = 'Very overweight'
  } else if (bmi >= 23) {
    category = 'Overweight'
  } else if (bmi >= 18.5) {
    category = 'healthy'
  } else {
    category = 'Underweight'
  }
  return `Normal (${category} ${bmi})`
}

const height = process.argv[2]
const weight = process.argv[3]

console.log(calculateBmi(180, 74))
