import './App.css';
import Button from './components/Button';
import Dashboard from './components/Dashboard';
import {Provider} from 'react-redux'
import store from './redux/store';
import CounterList from './components/CounterList';

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
            Simple Counter Application
        </h1>
        <div className="max-w-md mx-auto mt-2 space-y-1">
          <Dashboard count={0}/>
        </div>
        <div className="max-w-md mx-auto mt-5 space-y-2">
            <CounterList/>
        </div>
        <div className="max-w-md mx-auto space-y-5">
          <div className="p-4 h-auto flex flex-col items-end justify-center space-y-5">
            <div className="flex space-x-3">
              <Button background="bg-indigo-400" action={()=>console.log("add counter")}>
                  + Add Another Counter
              </Button>

              <Button background="bg-red-400" action={()=>console.log("reset counter")}>
                  Reset Counter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
