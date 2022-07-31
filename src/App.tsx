import React from 'react';
import Hello from './components/Hello';

function App() {
  return (
    <>
      <div className='text-3xl text-orange-600'>Hello</div>
      <Hello name='TypeScript' enthusiasmLevel={10} />
    </>
  );
}

export default App;
