import React, {useState, useEffect} from 'react'
import {data} from './dummydata'

export const Comments = (props) => {
    const [comments, setComments] = useState([]);
    const [show, setShow] = useState(false);

    const makeComments = (arr) => {
        let tempArr = [];
        arr.forEach((e,i) => {
            tempArr.push(
                <div className="comment-box flex-row shadow" key={i}>
                    <div className="comment" key={i}>
                    <div className="comment-bar flex-row">
                        <div className="left flex-row">
                        <div className="comment-user">{e.user}</div>
                        <div className="comment-date">{e.date} {e.time}</div>
                            
                        </div>
                        
                        
                        
                        
                    </div>
                    
                    <div className="comment-body">{e.body}</div>
                </div>
                <div className="comment-heart flex">
                    
                                    <div className="comment-like flex">
                                        <i className="material-icons" style={{fontSize:"4em", color:"#ff0000"}}>
                                        favorite
                                        </i>
                                        <div className="hearts">
                                        {e.likes}
                                        </div>
                                    </div>
                                
                </div>
                </div>
                
            )
        });
        setComments(tempArr)
    }

    useEffect(() => {
        makeComments(data[props.id].comments)
    }, [])

    return (
        <div id="comment-section" className="flex ">
<div className="comment-section-header" onClick={()=>setShow(!show)}>{show?"":"VIEW"} COMMENTS({data[props.id].comments.length})</div>
            <div className="comments flex" style={{display:show?"":"none"}}>
                {comments}
            </div>
            
        </div>
    )
}
