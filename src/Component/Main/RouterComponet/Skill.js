import { useContext}  from 'react'
import "./Skill.css"
import {Persondata} from '../../../App'

function Skill() {
    const data=useContext(Persondata)
    const color= ['#04AA6D','#2196F3','#f44336','#808080','#04AA6D'];
    return (
        <div className="main__wrap">
            <h3 className="main__header">Kỹ năng</h3>

            {data.listSkill.map((skill,index) => {
                return (
                    <div className="main__content" key={index}>
                        <p>{skill.name}</p>
                        <div className="skill_wrap">
                            <div className={`skill_item`} style={{width: skill.value, backgroundColor: color[index] }} >{skill.value}</div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}
export default Skill;