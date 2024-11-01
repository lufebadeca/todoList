import React from "react"
import './counter.css'
import {TodoContext} from "../TodoContext"
import {useLanguage } from "../LanguageContext"

const Counter = ( )=>{

    //lang context
    const { t} = useLanguage(); //translations for current language

    //UseContext
    const { completedItems: completed, totalItems: total} = React.useContext(TodoContext);

    //useState is the first hook, destructured into two objects, the variable (init=0) and the function.
    //const [quantity, setQuantity] = useState(0);
    let percentage;
    total!==0 ? percentage = (completed / total) * 100 : percentage=0; 
    const radius = 50; // Radius of the circle
    const circumference = 2 * Math.PI * radius; // Circumference of the circle
    const offset = circumference - (percentage / 100) * circumference;

    return (
    <>
      <br></br>
      <h2 className='counter'>
      {t.haveCompleted} <span>{completed}</span> {t.from} <span>{total}</span> {t.tasks} <br></br>
      { (percentage===100) && t.congrats }
      </h2>

      <div className='progressBar'>
        <svg className='CircularProgressbar' width="140" height="140" viewBox="0 0 120 120">
          <circle
            className='CircularProgressbar-trail'
            cx="60"
            cy="60"
            r={radius}
            strokeWidth="20"
            fill="none"
          />
          <circle
            className='CircularProgressbar-path'
            cx="60"
            cy="60"
            r={radius}
            strokeWidth="20"
            fill="none"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={offset}
          />
          <text className='CircularProgressbar-text' x="60" y="60" dy=".3em">
            {Math.round(percentage)}%
          </text>
        </svg>
      </div>
    </>
)}


export {Counter}