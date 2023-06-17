import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'

function FrontList() {
  return (
  <section>
    <Images/>
    <EmailList/>
   
  </section>
  )
}

const Images = () => (
  <img
    src="https://github.com/Asabeneh/30-Days-Of-React/blob/master/images/frontend_technologies.png?raw=true"
    alt="Frontend Technologies"
  />

);
const EmailList = () => (
  <article className='form1'>
    <h1>SUBSCRIBE</h1>
    <p> Signup your Email address to get news and updates</p>
    <input type="text" placeholder="First Name" />
    <input type="text" placeholder="Last Name" />
    <input type="email" placeholder="Email" /><br/>
    <button>Subscribe</button>
  </article>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render( <FrontList/>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
