
import React from 'react';

const Lib1Context = React.createContext();
Lib1Context.displayName = 'Lib 1';

const Lib1state = ({ children }) => {
    return (<Lib1Context.Provider value={{ default: "value1" }}>
        {children}
    </Lib1Context.Provider>)
}

const useLib1 = () => {
    const lib1Context = React.useContext(Lib1Context);
    if (lib1Context == undefined) {
        throw new Error('useLib1 should be used within Lib1State');
    }
    return lib1Context;
}
export { Lib1state, useLib1 };