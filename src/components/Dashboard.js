import React from 'react'

function Dashboard({count}) {
  return (
    <div className="p-2 h-auto flex flex-col items-center justify-center space-y-1 bg-slate-200 rounded shadow">
        <span className="font-bold text-2xl">Dashboard</span>
        <div className="text-lg font-bold">Total Count : {count} </div>
    </div>
  )
}

export default Dashboard