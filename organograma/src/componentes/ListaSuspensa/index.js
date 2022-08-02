import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    console.log(props.label)
    return (
       <div>
            <label>{props.label}</label>
            <select>
                <option>??/</option>
            </select>
       </div>
    )
}
export default ListaSuspensa