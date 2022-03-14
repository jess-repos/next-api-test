import { useRef, useState } from 'react'

export default function Home() {
  const emailInputRef = useRef()
  const feedbackInputRef = useRef()

  const [feedbackItems, setFeedbackItems] = useState([])

  const submitHandler = async (e) => {
    e.preventDefault()
    const enteredEmail = emailInputRef.current.value
    const enteredFeedback = feedbackInputRef.current.value

    const reqBody = {
      email: enteredEmail,
      text: enteredFeedback,
    }

    const response = await fetch('/api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reqBody),
    })
    const data = await response.json()
    console.log(data)
  }

  const loadFeedbackHandler = async () => {
    const response = await fetch('/api/feedback')
    const data = await response.json()
    setFeedbackItems(data)
  }

  return (
    <div>
      <h1>Home Page</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor='email'>Your Email Address</label>
          <input type='email' id='email' ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor='feedback'>Your Feedback</label>
          <textarea rows={5} id='feedback' ref={feedbackInputRef} />
        </div>
        <button>Send Feedback</button>
      </form>
      <hr />
      <button onClick={loadFeedbackHandler}>Load Feedback</button>
      <ul>
        {feedbackItems.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  )
}
