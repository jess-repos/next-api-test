import { buildPath, getData } from '.'

const handler = (req, res) => {
  const { feedbackId } = req.query
  const filePath = buildPath()
  const data = getData(filePath)
  const selected = data.find((item) => item.id === feedbackId)
  res.status(200).json(selected)
}

export default handler
