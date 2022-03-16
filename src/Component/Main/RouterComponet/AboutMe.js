import {useContext} from 'react'
import {Persondata} from '../../../App'
function AboutMe() {
    
    const data=useContext(Persondata)
    return (
        <div className="main__wrap">
            <h3 className="main__header">Tóm tắt bản thân</h3>
            <div className="main__content">
                <p>{data.aboutMe}</p>
            </div>

        </div>
    )
}
export default AboutMe;