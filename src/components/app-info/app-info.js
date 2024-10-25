import "./app-info.css";

const AppInfo = ({increased, employees}) => {
    return (
        <div className="app-info">
            <h1>Accounting for employees in company N</h1>
            <h2>Total employee count: {employees}</h2>
            <h2>Bonus for: {increased}</h2>
        </div>
    )
}

export default AppInfo;