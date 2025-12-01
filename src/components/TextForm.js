import React, { useState } from 'react';

export default function TextForm(props) {
    // Function to convert text to uppercase
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    // Function to convert text to lowercase
    const handleLoClick = () => {
        // console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    // Function to clear text
    const handleClearClick = () => {
        // console.log("Clear Text was clicked" + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    // Function to handle typing in textarea
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
        // Removed alert here to avoid spamming on every keystroke
    }

    // Function to copy text to clipboard
    const handleCopy = () => {
        console.log("I am copy");
        navigator.clipboard.writeText(text); // ✅ cleaner way
        props.showAlert("Copied to Clipboard!", "success");
    }

    // Function to remove extra spaces
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces!", "success");
    }

    // State to hold text value
    const [text, setText] = useState('');

    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state

    return (
        <>
            <div className="container"
                style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>

                <h1>{props.heading}</h1>

                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        style={{
                            backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
                            color: props.mode === 'dark' ? 'white' : '#042743'
                        }}
                        id="myBox"
                        rows="8">
                    </textarea>
                </div>

                {/* Action buttons */}
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>
                    Convert to Uppercase
                </button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>
                    Convert to Lowercase
                </button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>
                    Clear Text
                </button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>
                    Copy Text
                </button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
                    Remove Extra Spaces
                </button>
            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your text summary</h2>

                {/* Word count fixed to ignore empty strings */}
                <p>{text.split(/\s+/).filter((element) => element.length !== 0).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element) => element.length !== 0).length} Minutes read</p>

                <h2>Preview</h2>

                {/* Typo fixed in message */}
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    );
}
