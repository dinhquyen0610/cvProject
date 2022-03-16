import {useContext} from 'react'
import {Persondata} from '../../../App'
function CareerGoals() {
    const data=useContext(Persondata)
    return (
        <div className="main__wrap">
            <h3 className="main__header">Mục tiêu nghề nghiệp</h3>
            <div className="main__content">
                <p>{data.careerGoals}</p>
            </div>

        </div>
    )
}
export default CareerGoals;