import './employees-item.css'
import { Component } from 'react';


class EmployeesItem extends Component  {
    constructor(props){
        super(props);
        this.state = {
            increase:false,
            like:false
        }
    }

    onIncrease = ()=>{
        this.setState(({increase})=>({      //increase - тут диструктуризирован, чтобы не писать this.state
            increase:!increase              //при нажатий состояние increase меняется в противоположенный
        }))
    }

    onFavorites = () => {
        this.setState(({like}) =>({
            like:!like
        }))
    }

    render(){
        const {name,salary} = this.props;
        const {increase,like} = this.state;
        let classes = 'list-group-item d-flex justify-content-between';
        if(increase){                       //проверка свойства increase - true или false
            classes += ' increase';
        }
        if(like){
            classes += ' like';
        }

        return(                             //в зависимости от своиства обьекта (increase) добавляется класс increase
            <li className={classes}>    
                <span className="list-group-item-label" onClick={this.onFavorites}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue = {salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={this.onIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    }
}

export default EmployeesItem;