import React, { Component } from 'react'
import Counter from '../compontents/Counter'
import CounterWithHook from '../compontents/CounterWithHook'

class CounterPage extends Component {
    render() {
        return <>
            <Counter />
            <CounterWithHook />
        </>
    }
}

export default CounterPage