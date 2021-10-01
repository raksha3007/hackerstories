import React from 'react';
import Item from './Item';



function List(props){
    console.log(props)
    return(
        <>
        <div className="lists">
           <div className="list">
            <img src={props.imgsrc} alt="mypic" className="list_img"/>
              <div className="list_info">
               <span className="list_category"> 
               {props.title}</span>
               <h2 className="list_title">{props.sname}</h2>
                <a href={props.link} target="_blank">
                <button> watch now </button>
        
                  </a>
              </div>
          </div>
        </div>
        
    <Item/>
    </>
     
    );
  }
  export default List;