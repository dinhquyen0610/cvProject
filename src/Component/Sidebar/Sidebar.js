import {useEffect, useRef, useState} from 'react'
import "./Sidebar.css"
function Sidebar({data}){
    const [info,setInfo]=useState({image:"no_load.png"});
   useEffect(()=>{
        fetch("https://my.api.mockaroo.com/myCV.json?key=70973d50")
        .then(res=>res.json())
        .then(post=>setInfo(post[0]))
    },[])
   
    return(
        <div className="sidebar">
              
                <h3 className="sidebar__header">{info.name}</h3>
                <img className="sidebar_img" src={require(`../image/${info.image}`)}  />
                <div className="sidebar__information">
                    <div className="sidebar__information-item">
                        <i className="fa-solid fa-calendar-days"></i>
                        <span>Birthday: {info.date}</span>
                    </div>
                    <div className="sidebar__information-item">
                        <i className="fa-solid fa-briefcase"></i>
                        <span>Job: {info.job}</span>
                    </div>
                    <div className="sidebar__information-item">
                        <i className="fa-solid fa-envelope"></i>
                        <span>{info.email}</span>
                    </div>
                    <div className="sidebar__information-item">
                        <i className="fa-solid fa-phone"></i>
                        <span>Phone: {info.phone}</span>
                    </div>
                </div>
            </div>
    )
}
export default Sidebar;