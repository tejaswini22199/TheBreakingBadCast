import React from 'react'
import Characterview from './Characterview'
const CharacterGrid = ( {items}) =>
 {
    return (<section className="cardmain">{
        items.map((item,index) =>
            (
             
               <Characterview item={item} key={index} className="card-cards"/>
            
            

            ))  
            }
      </section>
    )
    }
export default CharacterGrid
