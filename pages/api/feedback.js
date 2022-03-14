import fs from 'fs'
import path from 'path'

const handler = (req, res) => {
  console.log(req.body)
  if (req.method === 'POST') {
    const { email, text } = req.body

    const feedback = {
      id: new Date().toISOString(),
      email: email,
      text: text,
    }
    const filePath = path.join(process.cwd(), 'data', 'feedback.json')
    const fileData = fs.readFileSync(filePath)
    const data = JSON.parse(fileData)
    data.push(feedback)
    fs.writeFileSync(filePath, JSON.stringify(data))
    res.status(201).json({ message: 'Success', feedback: feedback })
  } else {
    res.status(200).json({ message: 'This is Feedback' })
  }
}

export default handler
