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
            ]
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

    // onToggleIncrease = (id) => {

    //     // this.setState(({data}) => {

    //     //     const index = data.findIndex(elem => elem.id === id);

    //     //     const old = data[index],
    //     //           newItem = {...old, increase: !old.increase},
    //     //           newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

    //     //     return {

    //     //         data: newArr
    //     //     }
    //     // });

    //     // другой вариант

    //     this.setState(({data}) => ({

    //         data: data.map(item => {

    //             if (item.id === id) {

    //                 return {...item, increase: !item.increase}
    //             }

    //             return item;
    //         })
    //     }));
    // }

    // onToggleRise = (id) => {

    //     this.setState(({data}) => ({

    //         data: data.map(item => {

    //             if (item.id === id) {

    //                 return {...item, rise: !item.rise}
    //             }

    //             return item;
    //         })
    //     }));
    // }

    // объединение 2-х методов

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

    render() {

        const employees = this.state.data.length,
              increased = this.state.data.filter(item => item.increase).length;

        return (
            <div className="app">
                <AppInfo
                    employees={employees}
                    increased={increased}/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;