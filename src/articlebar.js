import React, {useState, useEffect} from 'react'

export const ArticleBar = (props) => {
    const [articles, setArticles] = useState([])

    const makeArticles = (array) => {
        let tempArr = []
        array.forEach((e,i) => {
            if(props.current !== i){
                tempArr.push(
                    <div key={i} className="next-article-box shadow" onClick={()=>props.chooseArticle(i)}>
                        <div className="next-text">
                            {e.title}
                        </div>
                        <div style={{backgroundImage:`url(${e.image})`}} className="next-article-image"></div>
                    </div>
                )
            }
            
        });
        setArticles(tempArr);
    }

    useEffect(()=>{
        makeArticles(props.articles)
    },[]);

    useEffect(()=>{
        makeArticles(props.articles)
    },[props.current]);


    return (
        <React.Fragment>
            <div className="article-bar-header">SEE MORE LIKE THIS...</div>
            <div id="article-bar" className="flex-row">
            
            {articles}
        </div>
        </React.Fragment>
        
    )
}
