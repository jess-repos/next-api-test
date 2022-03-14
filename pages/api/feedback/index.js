import fs from 'fs'
import path from 'path'

export function buildPath() {
  return path.join(process.cwd(), 'data', 'feedback.json')
}

export function getData(filePath) {
  const fileData = fs.readFileSync(filePath)
  const data = JSON.parse(fileData)
  return data
}

const handler = (req, res) => {
  if (req.method === 'POST') {
    const { email, text } = req.body

    const feedback = {
      id: new Date().toISOString(),
      email: email,
      text: text,
    }
    const filePath = buildPath()
    const data = getData(filePath)

    data.push(feedback)
    fs.writeFileSync(filePath, JSON.stringify(data))
    res.status(201).json({ message: 'Success', feedback: feedback })
  } else if (req.method === 'GET') {
    const filePath = buildPath()
    const data = getData(filePath)
    res.status(200).json(data)
  }
}

export default handler
