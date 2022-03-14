import React from 'react'
import { buildPath, getData } from './api/feedback'

const feedback = ({ feedbackItems }) => {
  return (
    <ul>
      {feedbackItems.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  )
}

export async function getStaticProps() {
  const filePath = buildPath()
  const data = getData(filePath)
  return {
    props: {
      feedbackItems: data,
    },
  }
}

export default feedback
