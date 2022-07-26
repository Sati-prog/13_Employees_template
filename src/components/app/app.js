import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [

                {name: 'John S.', salary: 2000, increase: false, id: 1},
                {name: 'Alex M.', salary: 900, increase: true, id: 2},
                {name: 'Carl W.', salary: 5000, increase: false, id: 3},
                {name: 'Helen A.', salary: 3000, increase: false, id: 4},
                {name: 'Mike U.', salary: 1300, increase: false, id: 5}
            ]
        }
        this.maxId = 6;
    }

    deleteItem = (id) => {

        this.setState(({data}) => {

            // const index = data.findIndex(elem => elem.id === id);
            
            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);

            // const newArr = [...before, ...after];

            // второй способ

            return {
                data: data.filter(item => item.id !== id)
            }
        });
    }

    addItem = (name, salary) => {

        const newItem = {

            name, 
            salary,
            increase: false,
            id: this.maxId++
        }

        this.setState(({data}) => {

            const newArr = [...data, newItem];

            return {

                data: newArr
            }
        });
    }

    render() {

        return (
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}/>
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;