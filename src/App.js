import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getGreet } from './redux/greets/greetSlice';
import Greetings from './components/Greetings';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGreet());
  }, [dispatch]);
  return (
    <div className="App">
      <h1>Greetings</h1>
      <Greetings />
    </div>
  );
}

export default App;
