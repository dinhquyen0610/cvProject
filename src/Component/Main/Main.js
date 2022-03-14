import { Routes, Route } from 'react-router-dom'
import "./Main.css"
import AboutMe from './RouterComponet/AboutMe'
import Skill from './RouterComponet/Skill'
import CareerGoals from './RouterComponet/CareerGoals'
function Main() {
    return (
        <div className="main">
          
           <Routes>
               <Route path='/' element={<AboutMe/>}/>
               <Route path='/Skill' element={<Skill/>}/>
               <Route path='/CareerGoals' element={<CareerGoals/>} />
           </Routes>
        </div>
        
    )
}
export default Main;