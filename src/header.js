import React, {useState, useEffect} from 'react'

export const Header = () => {
    const [show, setShow] = useState(true)
    

    const getScroll = () => {
        let pos = 0;
        window.addEventListener('scroll', (e)=>{
            
            let newPos = e.currentTarget.scrollY
            console.log('pos: ',newPos)
            if (newPos < 64){
                setShow(true)
                return
            }
            if(newPos>pos){
                console.log('ran')
                setShow(false)
            }else{
                console.log('runned')
                setShow(true)
            }
            pos = newPos
            
            
        })
    }

    useEffect(()=>{
        getScroll()
    },[])

    return (
        <div id="header" className={`flex-row shadow ${show?"show":"hide"}`}>
            <div className="logo flex">MIRAGE</div>
            <div className="hor-div"></div>
            <div className="tab flex">HOME</div>
            <div className="tab flex">LATEST</div>
            <div className="tab flex">VIDEO</div>
        </div>
    )
}
