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

                {name: 'John S.', salary: 2000, increase: false, rise: false, id: 1},
                {name: 'Alex M.', salary: 900, increase: true, rise: false, id: 2},
                {name: 'Carl W.', salary: 5000, increase: false, rise: true, id: 3},
                {name: 'Helen A.', salary: 3000, increase: false, rise: false, id: 4},
                {name: 'Mike U.', salary: 1300, increase: false, rise: false, id: 5}
            ],

            term: '',
            filter: 'all'
        }

        this.maxId = 6;
    }

    deleteItem = (id) => {

        this.setState(({data}) => {

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
            rise: false,
            id: this.maxId++
        }

        this.setState(({data}) => {

            const newArr = [...data, newItem];

            return {

                data: newArr
            }
        });
    }

    onToggleProp = (id, prop) => {

        this.setState(({data}) => ({

            data: data.map(item => {

                if (item.id === id) {

                    return {...item, [prop]: !item[prop]}
                }

                return item;
            })
        }));
    }

    searchEmp = (items, term) => {

        if (term.length === 0) {

            return items;
        }

        return items.filter(item => {

            return item.name.indexOf(term) > -1;
        });
    }

    onUpdateSearch = (term) => {

        this.setState({term});
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render() {

        const {data, term, filter} = this.state;

        const employees = this.state.data.length,
              increased = this.state.data.filter(item => item.increase).length;

        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <div className="app">
                <AppInfo
                    employees={employees}
                    increased={increased}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter}
                        onFilterSelect={this.onFilterSelect}/>
                </div>
    
                <EmployeesList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;