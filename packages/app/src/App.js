import React from 'react';
import { useLib1, Lib1state } from '@context-issue/lib1';
import MyComp from '@context-issue/mycomp';

const AppChild = () => {
  const value = useLib1();

  console.log(value)
  return value.default + ' from child';


}
const MyComp1 = () => {
  const value = useLib1();

  console.log(value)
  return value.default + ' from myComp';


}
function App() {
  return (
    <div className="App">
      <Lib1state>
        <AppChild />
        <div>
          <MyComp />
        </div>
      </Lib1state>
    </div>
  );
}

export default App;
