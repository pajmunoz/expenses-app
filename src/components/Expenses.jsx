import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"

function Expenses(props) {

  return (
    <div className="expenses">
      {props.expensesProps.map((expense) => (
        <ExpenseItem key={expense.id} dataProps={{ ...expense }} />
      ))}
    </div>
  );
}

export default Expenses;
