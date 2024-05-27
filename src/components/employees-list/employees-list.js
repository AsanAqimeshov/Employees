import EmployeesItem from "../employees-item/employees-item";
import './employees-list.css';

const EmployeesList = ({data}) => {         //app.js  тен келген данныйды осында кабылдаймыз

    const elements = data.map(item =>{      //каждый элемент массива с данными размещаем в компонент Item(возврощает новый массив)
        // const {id,...itemProps} = item
        return(
            <EmployeesItem name = {item.name} salary={item.salary} increase={item.increase} key ={item.id}/>    //тут вообще можно было {...item}
        );
    })

    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}
export default EmployeesList;   