import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    
    const upperCaseClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }

    const lowerCaseClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }

    const clearText = () => {
        let newText = ''
        setText(newText);
        props.showAlert("All text has been cleared","success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleCopy = ()=>{
        var copyText = document.getElementById("myBox");
        copyText.select();
        copyText.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("All text has been copied","success");
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed all extra spaces","success");
    }
    return (
        <>
        <div className='container textform' style={{color: props.mode === 'dark'?'white':'black'}}>
            <h2 className='mt-5 '>{props.heading}</h2>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label">Your text</label>
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'black':'white',
                color: props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
                
            </div>
            <button className='btn btn-primary mx-2' onClick={upperCaseClick}>Convert To Uppercase</button>
            <button className='btn btn-primary mx-2' onClick={lowerCaseClick}>Convert To Lowercase</button>
            <button className='btn btn-primary mx-2' onClick={clearText}>Clear all Text</button>
            <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
            <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>

        </div>
        <div className='container my-3' style={{color: props.mode === 'dark'?'white':'black'}}>
            <h4>Your Text Summary</h4>
            <p>{text.split(" ").length} Words || {text.length} Characters<br/>
            {0.008 * text.split(" ").length} Minutes read</p>

            <h4>Preview</h4>
            <p>{text.length>0? text:'Enter something to get preview.'}</p>
        </div>
        </>
    )
}
