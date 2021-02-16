import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import { addNumber, subNumber } from './store/actions/actions';

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.countReducer.count);

  return (
    <div className='App'>
      <h1>{count}</h1>
      <div>
        <h2>
          <button onClick={() => dispatch(addNumber())}>+</button>
        </h2>
        <h2>
          <button onClick={() => dispatch(subNumber())}>-</button>
        </h2>
      </div>
    </div>
  );
};

export default App;
