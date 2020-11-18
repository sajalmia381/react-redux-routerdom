import React from 'react'
import {connect} from 'react-redux'

import {incrementAction, decrementAction} from '../services/actions/counterAction'

let styles = {
    textAlign: 'center'
}

const Counter = ({incrementAction, decrementAction, count}) => {
    return <div style={styles}>
        <h4>Count: {count}</h4>
        <button type="button" onClick={() => incrementAction(5)}>Increase</button>
        <button type="button" onClick={() => decrementAction(5)}>Decrease</button>
    </div>
}

const mapStateToProps = (state) => {
    return {
        count: state.counterReducer.count   
    }
}

export default connect(mapStateToProps, {incrementAction, decrementAction})(Counter)