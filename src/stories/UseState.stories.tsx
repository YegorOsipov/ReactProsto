import React, {useState} from "react";

export default {
    title: "UseState Demo",
}

function generalData() {
    console.log("generalData")
    return 33451120
}

export const Example1 = () => {
    console.log("Example1")

    let [count, setCount] = useState(generalData);
    return (
        <div>
            <button onClick={() => setCount(state => state + 1)}>+</button>
            {count}
        </div>
    )
}