import React,{useState} from 'react'
import "./App.css"

const Tour = ({id,image, name, info, price, removeTour}) => {
    const [readMore, setReadMore] = useState(false);
    return (
        <div className="card">
              <div className="header">
                <img src={image} alt={image} />
              </div>
              <div className="body">
                <div className="d_flex">
                  <h4>{name}</h4>
                  <p className="pricing">${price}</p>
                </div>
                <div className="para_text">
                  <p>{readMore ? info : `${info.substring(0,200)}...` }
                  <button className="toggle_btn" onClick={()=>setReadMore(!readMore)}>
                      {readMore ? 'showless' : 'showMore'}
                      </button></p>
                </div>
                <div className="Tours_btn">
                  <button className="btn" onClick={()=>removeTour(id)}>Not Interested</button>
                </div>
              </div>
            </div>
    )
}

export default Tour
