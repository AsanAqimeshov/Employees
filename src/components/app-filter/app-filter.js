import './app-filter.css';


const AppFilter = () =>{
    return (
        <div className="btn-group">
            <button 
                className="btn btn-light"
                type="button">
                    Все сотрудники
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                    На повышение
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                    З/П больще 700 000 тг
            </button>
        </div>
    );
}

export default AppFilter;
