import React, {useState} from "react";

type UsersPropsType ={
    users: Array<string>
}

const UsersForMemo = (props: UsersPropsType) => {
    console.log("Users")
    return (
        <div>
            {props.users.map((u, i) => <div key={i}>{u}</div>)}
        </div>
    )
}
const Users = React.memo(UsersForMemo);

type CounterPropsType = {
    count: number
}
const CounterForMemo = (props: CounterPropsType) => {
    console.log("Count");
    return (
        <div>
            <div>{props.count}</div>
        </div>
    )
}
const Counter = React.memo(CounterForMemo);

export const Example = () => {
    const style = {
        "display": "flex"
    }

    const [users, setUsers] = useState(["Egor", "Lev", "David"]);
    let [count, setCount] = useState(0);

    const addUser = () => {
        return setUsers([...users, "Kirill"]);
    }

    return (
        <div>
            <div style={style}>
                <button onClick={() => {setCount(count + 1)}}>+</button>
                <Counter count={count}/>
            </div>
            <Users users={users}/>
            <button onClick={addUser}>add user</button>
        </div>
    )
}