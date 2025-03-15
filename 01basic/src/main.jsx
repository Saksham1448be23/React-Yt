import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Hello() {
  return (
    <>
      <h1>EK aur Function</h1>
    </>
  )
}

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google site</a>
);

const reactElement = React.createElement('a', {
  href: 'https://google.com',
  target: '_blank',
}, 'Visit my React google site'
)

ReactDOM.createRoot(document.getElementById('root')).
  render(
    <React.StrictMode>
      {reactElement}
    </React.StrictMode>,
  )
