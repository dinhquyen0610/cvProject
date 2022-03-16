import {useContext} from 'react'
import "./Sidebar.css"
import {Persondata} from "../../App"
function Sidebar({props}){
//     const [info,setInfo]=useState({image:"no_load.png"});
//    useEffect(()=>{
//         fetch("https://my.api.mockaroo.com/mycv.json?key=ef517730")
//         .then(res=>res.json())
//         .then(post=>setInfo(post[0]))
//     },[])
   const data=useContext(Persondata)
    return(
        <div className="sidebar">
              
                <h3 className="sidebar__header">{data.name}</h3>
                <img className="sidebar_img" src={require(`../image/${data.image}`)}  />
                <div className="sidebar__information">
                    <div className="sidebar__information-item">
                        <i className="fa-solid fa-calendar-days"></i>
                        <span>Birthday: {data.date}</span>
                    </div>
                    <div className="sidebar__information-item">
                        <i className="fa-solid fa-briefcase"></i>
                        <span>Job: {data.job}</span>
                    </div>
                    <div className="sidebar__information-item">
                        <i className="fa-solid fa-envelope"></i>
                        <span>{data.email}</span>
                    </div>
                    <div className="sidebar__information-item">
                        <i className="fa-solid fa-phone"></i>
                        <span>Phone: {data.phone}</span>
                    </div>
                </div>
            </div>
    )
}
export default Sidebar;