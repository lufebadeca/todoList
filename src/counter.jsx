import React , {useState, useRef} from "react"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Counter = (props)=>{

    //useState is the first hook, destructured into two objects, the variable and the function. 0?
    const [quantity, setQuantity] = useState(0);

    //const inputRef

    return (
    <div className='container-fluid m-m p-4'>
        <p>Quantity: {quantity}</p>
        <label for='inputQ'>New amount</label>
        <input type='number' id="inputQ" name='inputQ' ref={inputRef}></input>
        <button className='btn btn-primary btn-sm' onClick={()=>setQuantity(quantity+1)} >+</button>
        <button className='btn btn-primary btn-sm' onClick={()=>setQuantity(quantity-1)}>-</button>
    </div>
)}


export {Counter}