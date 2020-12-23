
import React from 'react';
import { useLib1 } from '@context-issue/lib1';

const MyComp = () => {
    const value = useLib1();
    return value.default;
}
export default MyComp;