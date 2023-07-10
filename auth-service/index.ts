import bodyParser from 'body-parser'
import express, { Request, Response } from 'express'

const app = express()

app.use(bodyParser.json())

app.post('/register', (req: Request, res: Response) => {
  const { email, password } = req.body
  console.log('Registering user')

  return res.send('OK')
});

app.post('/login', (req: Request, res: Response) => {
  const { email, password } = req.body
  console.log('Login user')

  return res.send('OK')
});

app.get('/', (req: Request, res: Response) => {
  res.send('hi mom')
});

app.listen(5000, () => {
  console.log(`Server is listening on port 5000`)
});