import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add/employees-add';

import './app.css';


function App(){

    const data = [                      //типо серверден келетін данный
        {name:'Asan',salary: 2500, increase : false , id:1},    //добавляем атрибут id чтобы использовать их как ключь
        {name:'Akjol',salary: 1500, increase : true , id:2},    //ключи используем для того чтобы при изменений списка Реакт внезависимости куда (в начало или в конец) добавлен
        {name:'Amanzhan',salary: 2100, increase : false , id:3},//новый елемент - смотря на id, добавлял новый елемент а не удалял весь список и заново создавал
    ]

    return(
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    );
}
export default App;