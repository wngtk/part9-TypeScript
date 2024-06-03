import express from 'express'
import calculateBmi from './bmiCalculator'

const app = express()

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!').end()
})

app.get('/bmi', (req, res) => {
  const {height, weight} = req.query

  // validate the data here

  try {
    const result = calculateBmi(Number(height), Number(weight))
    res.json({
      height,
      weight,
      bmi: result
    })
  } catch (error: unknown) {
    res.status(400).json({ error: 'malformatted parameters' })
  }
}) 

app.listen(3003, () => {
  console.log(`Server running on port 3003`)
})
