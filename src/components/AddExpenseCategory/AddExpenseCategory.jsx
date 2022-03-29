import react from 'react'

const AddExpenseCategory = ({label, icon, name}) => {

    return (
        <li>
            <div className="list-items">
                <span>
                    <img src={icon} alt="food" />
                    <p>{label}</p>
                    <input className="list-item-checkbox" type="checkbox" name={name} />
                </span>
            </div>
        </li>
    )
}