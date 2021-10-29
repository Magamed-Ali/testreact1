import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loaddTodos} from "./actions";

function App(props) {
    const loading = useSelector(state => state.todos);
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    useEffect(()=>{
dispatch(loaddTodos())
    },[])
    return (
        <div style={{background: "#a9e7c2"}}>
            список дела:
            {loading ? "идет загрузга" : ''}
            <div>
                {todos.map(todo => {
                    return (
                        <div>
                            <div>{todo.id}</div>
                            <div>{todo.title}</div>
                            <div>{todo.body}</div>
                        </div>
                )
                })}
            </div>
        </div>
    );
}

export default App;