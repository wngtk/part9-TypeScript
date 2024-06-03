import express from 'express'
import calculateBmi from './bmiCalculator'
import { calculateExercises } from './exerciseCalculator'

const app = express()

app.use(express.json())

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

app.post('/exercises', (req, res) => {
  const { daily_exercises, target } = req.body

  if (!daily_exercises || !target) {
    return res.status(400).send({ error: 'parameters missing' })
  }
  
  if (!daily_exercises || (daily_exercises as string[]).some(x => isNaN(Number(x)))) {
    return res.status(400).send({ error: 'malformed daily_exercises' })
  }
  if (!target || isNaN(Number(target))) {
    return res.status(400).send({ error: 'malformed target'})
  }
  const result = calculateExercises(Array.from(daily_exercises, Number), Number(target))
  return res.json(result)
})

app.listen(3003, () => {
  console.log(`Server running on port 3003`)
})
