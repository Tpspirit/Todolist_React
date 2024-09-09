function TodoTable(props) {
  return (
    <table>
      <tbody>
        <tr>
          <td>Date</td>
          <td>Description</td>
        </tr>
        {props.param.map((todo, index) => (
          <tr key={index}>
            <td>{todo.date}</td>
            <td>{todo.desc}</td>
            <td>
              <button onClick={() => props.deleteFunction(index)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TodoTable;
