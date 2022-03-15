import {memo,useEffect, useState} from 'react'

function CareerGoals() {
    const [content,setContent]=useState();
    useEffect(()=>{
         fetch("https://my.api.mockaroo.com/mycv.json?key=ef517730")
         .then(res=>res.json())
         .then(post=>setContent(post[3].careerGoals))
     },[])
    return (
        <div className="main__wrap">
            <h3 className="main__header">Mục tiêu nghề nghiệp</h3>
            <div className="main__content">
                <p>{content}</p>
            </div>

        </div>
    )
}
export default memo(CareerGoals);