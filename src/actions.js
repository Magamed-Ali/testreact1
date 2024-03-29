export function loaddTodos(){
    return function (dispatch){
        dispatch({type: 'started'})
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(json =>{
                dispatch({
                    type: 'load',
                    payload: json
                })
            })
    }
}