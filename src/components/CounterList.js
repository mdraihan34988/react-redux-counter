import React from 'react'
import {connect} from 'react-redux'
import Counter from './Counter'

function CounterList({counterList}) {
  return (
    <>
        {counterList.map((value,key) => (
            <Counter key={value.id} index={value.id}/>
        ))} 
    </>
  )
}

const mapStateToProps = (state,ownProps) => {
    console.log(state)
    return {
        counterList : state.counterList
    }
  }
  
  const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(CounterList); 