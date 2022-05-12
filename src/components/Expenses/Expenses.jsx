import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.expensesProps.map(expense => (
        <ExpenseItem key={expense.id} dataProps={{ ...expense }} />
      ))}
    </Card>
  );
};

export default Expenses;
