function calculateBmi(height: number, weight: number): string {
  const bmi = weight/Math.pow(height / 100, 2)
  return `Normal (healthy ${bmi})`
}

console.log(calculateBmi(180, 74))