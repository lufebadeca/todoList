import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'


const Counter = ( {completed, total} )=>{

    //useState is the first hook, destructured into two objects, the variable (init=0) and the function.
    //const [quantity, setQuantity] = useState(0);
    const percentage = (completed / total) * 100;
    const radius = 46; // Radius of the circle
    const circumference = 2 * Math.PI * radius; // Circumference of the circle
    const offset = circumference - (percentage / 100) * circumference;

    return (
    <>
        <h2 className='counter' variant='success'>
        You have completed <span>{completed}</span> out of <span>{total}</span> tasks
        </h2>

        <div className='progressBar'>
        <svg className='CircularProgressbar' width="120" height="120" viewBox="0 0 100 100">
          <circle
            className='CircularProgressbar-trail'
            cx="50"
            cy="50"
            r={radius}
            strokeWidth="8"
            fill="none"
          />
          <circle
            className='CircularProgressbar-path'
            cx="50"
            cy="50"
            r={radius}
            strokeWidth="8"
            fill="none"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={offset}
            style={{ transition: 'stroke-dashoffset 0.5s ease' }}
          />
          <text className='CircularProgressbar-text' x="50" y="50" dy=".3em">
            {Math.round(percentage)}%
          </text>
        </svg>
      </div>
    </>
)}


export {Counter}