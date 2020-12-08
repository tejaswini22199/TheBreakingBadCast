import React from 'react'
import {useState} from 'react'
const Searchbar = ({getQuery}) => {
    const [text,setText]=useState([])
    const onChange=(e)=>
    {
        setText(e);
        getQuery(e);
    }
    return (
        <div className="search">
            <form>
            <input type="text" className="form-control" value={text} onChange={(e)=>onChange(e.target.value)
            }autofocus 
                />
            </form>
           
        </div>
    )
}

export default Searchbar
