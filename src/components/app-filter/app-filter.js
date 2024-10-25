import "./app-filter.css";

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'All employee'},
        {name: 'rise', label: 'Salary increase'},
        {name: 'moreThen1000', label: 'Salary more 1000$'},
        {name: 'increase', label: 'Bonus'}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button type="button"
                className={`btn ${clazz}`}
                key={name}
                onClick={() => props.onFilterSelect(name)}>
                {label}
            </button>
        )
    });

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;