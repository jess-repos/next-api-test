// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const routes = [
    {
      feedback: '/api/feedback',
    },
  ]
  res.status(200).json({ routes })
}
