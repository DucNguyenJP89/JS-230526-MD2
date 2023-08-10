import React, {useState} from 'react';

function DemoUseState() {
    // declare state
    const [count, setCount] = useState(0);
    // initiate handleClick, use setCount to update value of count
    const handleClick = () => {
        setCount(count+1);
    }
    return (
        <div>
            <p>You click {count} time(s)</p>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default DemoUseState