import React from 'react';
import { useLib1, Lib1state } from '@context-issue/lib1';


const AppChild = () => {
  const value = useLib1();
  return value.default;
}
function App() {
  return (
    <div className="App">
      <Lib1state>
        <AppChild />
      </Lib1state>
    </div>
  );
}

export default App;
