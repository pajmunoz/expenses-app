import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const expenseTitle = props.dataProps.title;
  const expensePrice = props.dataProps.amount;
  const data = {
    expenseTitle: expenseTitle,
    expensePrice: expensePrice,
  };
  //console.log(props.dataProps.date);

  return (
    <Card className="expense-item">
      <ExpenseDate dateProps={props.dataProps.date} />
      <div className="expense-item__description">
        <h2>{data.expenseTitle}</h2>
        <div className="expense-item__price">${data.expensePrice}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
