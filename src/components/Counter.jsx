export function Counter() {

    let counter = 0;
    function increment() {
        console.log('Incrementing');
    }
    return(
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>
                Increment</button>
        </div>
    );
}