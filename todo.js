function Todo({todo,index,remove}){
    function handle(){
        remove(index);
    }

    return <div className="todo" id onClick={handle}>{todo.text}</div>
}