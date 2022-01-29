function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'repair/reinforce smoke drums',
      isCompleted: false,
    },
    {
      text: 'rig funnelator pump',
      isCompleted: false,
    },
    {
      text: 'hang target painting',
      isCompleted: false,
    },
    {
      text: 'strike stage fans',
      isCompleted: false,
    }
  ]);

  return(
    <>
      {todos.map((todo, i) => <div key={i}>{todo.text}</div>)}
    </>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
