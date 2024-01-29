import { Component } from 'react';
import './employees-list-item.css';

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            salary: props.salary
        };
    }

    onSalaryChange = (e) => {
        const newSalary = e.target.value;
        this.setState({ salary: newSalary });
        this.props.onSalaryChange(this.props.id, newSalary);
    };

    render() {
        const { name, onDelete, onToggleProp, increase, rise } = this.props;
        const { salary } = this.state;

        let classNames = "list-group-item d-flex justify-content-between";
        if (increase) {
            classNames += " increase";
        }
        if (rise) {
            classNames += " like";
        }

        return (
            <li className={classNames}>
                <span className="list-group-item-label" onClick={onToggleProp} data-toggle="rise" >{name}</span>
                <input 
                    type="text" 
                    className="list-group-item-input" 
                    defaultValue={salary + '$'}
                    onChange={this.onSalaryChange}
                />
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={onToggleProp}
                        data-toggle="increase">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }

    
}

export default EmployeesListItem;