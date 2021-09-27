import { useState } from 'react'

function Search(){
    const [visible, setVisible] = useState(false) 
    
    return (
        <div>
            {visible ? <input placeholder="Search..." type="text"></input>:null}
            <button onClick={() => setVisible(!visible)}>{visible?'x':'Form'}</button>
        </div>
    )
}

export default Search;