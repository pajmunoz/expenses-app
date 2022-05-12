import "./ExpenseDate.css";
const ExpenseDate = (props) => {
  console.log(props.dateProps);
  const expenseDate = {
    date: props.dateProps.toLocaleString("es-ES", { day: "2-digit" }),
    month: props.dateProps.toLocaleString("es-ES", { month: "long" }),
    year: props.dateProps.getFullYear(),
  };

  const data = {
    expenseDate: {
      date: expenseDate.date,
      month: expenseDate.month,
      year: expenseDate.year,
    },
  };
  return (
    <div className="expense-date">
      <div className="expense-date__month">{data.expenseDate.month}</div>
      <div className="expense-date__year">{data.expenseDate.year}</div>
      <div className="expense-date__day">{data.expenseDate.date}</div>
    </div>
  );
};

export default ExpenseDate;
