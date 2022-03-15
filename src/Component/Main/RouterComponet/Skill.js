import { useRef,useEffect, useState } from 'react'
import "./Skill.css"
function Skill() {
    const [skills, setSkills] = useState(()=>{
    
        return []
    })
    useEffect(() => {
        fetch("https://my.api.mockaroo.com/mycv.json?key=ef517730")
            .then(res => res.json())
            .then(post => setSkills(post[2].listSkill))
    }, [])
    const color= ['#04AA6D','#2196F3','#f44336','#808080','#04AA6D'];
    return (
        <div className="main__wrap">
            <h3 className="main__header">Kỹ năng</h3>

            {skills.map((skill,index) => {
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