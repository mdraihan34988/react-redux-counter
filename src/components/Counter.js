import React from 'react'
import Button from './Button'
import {connect} from 'react-redux'
import { decrement, increment } from '../redux/counter/actionCreators'

function Counter({count,increment,decrement}) {
  return (
    <div className="p-3 h-auto flex flex-col items-center justify-center space-y-2 bg-white rounded shadow">
        <span className="font-bold">Counter {count.id + 1}</span>
        <div className="text-2xl font-semibold">{count.value}</div>
        <div className="flex space-x-3">
            <Button background="bg-indigo-400" action={increment}>
                Increment ({count.id + 1})
            </Button>

            <Button background="bg-red-400" action={decrement}>
                Decrement ({count.id + 1})
            </Button>
        </div>
    </div>
  )
}

const mapStateToProps = (state,ownProps) => {
    const {index} = ownProps;
    return {
        count : state.counterList[index]
    }
}

const mapDispatchToProps = (dispatch,ownProps) => {
    const {index} = ownProps;

    return {
        increment : () => dispatch(increment(index)),
        decrement : () => dispatch(decrement(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter) 