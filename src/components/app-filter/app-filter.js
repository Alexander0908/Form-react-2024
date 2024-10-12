import "./app-filter.css";

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'All employee', colored: false},
        {name: 'rise', label: 'Salary increase', colored: false},
        {name: 'moreThen1000', label: 'Salary more 1000$', colored: true},
        {name: 'increase', label: 'Bonus', colored: false}
    ];

    const buttons = buttonsData.map(({name, label, colored}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        const style = colored ? {color: 'red'} : null;
        return (
            <button type="button"
                className={`btn ${clazz}`}
                key={name}
                onClick={() => props.onFilterSelect(name)}
                style={style}>
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