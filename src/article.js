import React, {useState, useEffect} from 'react'
import {data} from './dummydata'
import { TitleBar } from './titlebar'
import { Comments } from './comments';

export const Article = (props) => {
    const test = "Empty.";
    // const id = 1;
    const [body, setBody] = useState(test);
    const [loggedIn, setLoggedIn] = useState(false);
    const [showBodyEdit, setShowBodyEdit] = useState(null);
    const [edit, setEdit] = useState(false);

    const handleChange = (e) => {
        
        setBody(e.target.value);
        console.log(body);
    }

    const save = (id) =>{
        localStorage.setItem(id, JSON.stringify(body))
        setEdit(false);
    }

    const getBody=(id)=>{
        if(localStorage.getItem(id))
        {
            setBody(JSON.parse(localStorage.getItem(id)));
        }else{
            setBody(data[props.id].body)
        }
    }

    const showEditor=(show)=>{
        if(loggedIn && show){
            setShowBodyEdit(true)
        }else{
            setShowBodyEdit(false)
        }
    }

    

    useEffect(()=>{
        getBody(props.id);
    },[])

    useEffect(()=>{
        getBody(props.id);
    },[props.id])

    

    
    
      return (
        <div className="article flex fade-in" key={props.id}>
            <div className="title-box flex shadow">
                <div className="title flex">{props.title.toUpperCase()}</div>
                <TitleBar 
                category="Gaming" 
                name="Jon Buckman" 
                date="11/26/19"
                image="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1331&q=80"/>
            </div>
            <img src={props.src} alt={props.alt} className="image shadow"/>
            <div className="body-box flex shadow">
                <div id="edit-body" className="flex-row" style={{display:loggedIn?"":"none"}} onClick={()=>setEdit(true)}>
                    <div className="edit-btn btn">Edit</div>
                </div>
                <div className="body">
            
                    {body}
                
                </div>
            </div>

            <div className="text-edit-modal flex" style={{display:edit?"":"none"}}>
                   <textarea name="body-input" id="" onChange={e=>handleChange(e)} value={body}></textarea> 
                   <div className="edit-panel flex-row">
                       <div className="save-btn btn" onClick={()=>setEdit(false)}>Cancel</div>
                       <div className="save-btn btn" onClick={()=>save(props.id)}>Save</div>
                   </div>
            </div>
            <Comments id={props.id}/>
            
            
        </div>
    )  
    
        


    
    
}
