import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {incrementAction, decrementAction} from '../services/actions/counterAction'

let styles = {
    textAlign: 'center'
}

const CounterWithHook = () => {

    const count = useSelector( state => state.counterReducer.count)
    const dispatch = useDispatch()

    return <div style={styles}>
        <h4>Count: {count}</h4>
        <button type="button" onClick={() => dispatch(incrementAction(5))}>Increase</button>
        <button type="button" onClick={() => dispatch(decrementAction(5))}>Decrease</button>
    </div>
}

export default CounterWithHook