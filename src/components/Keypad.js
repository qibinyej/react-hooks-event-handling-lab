// Code Keypad Component Here

function handleChange(event){
    return event.target.value
}

function keypad(){

    return (
    <div>
        <input type='text' onChange={handleChange} value="Entering password">Password</input>
    </div>
        
    )
}


export default keypad