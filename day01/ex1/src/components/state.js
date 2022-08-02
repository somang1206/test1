import {useState} from "react"

const State = () => {
    const[state, setState] = useState("state 처음 시작")
    return(
        <div>
            {state}
        </div>
    )
}

export default State;