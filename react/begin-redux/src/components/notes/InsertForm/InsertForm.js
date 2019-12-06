import React from "react";

const InsertForm = ({ noteInput, onChangeInput, onAdd, error }) =>{
    const handleChange = e =>{
        const { value } = e.target;
        onChangeInput({ value });
    };

    const handleKeyPress = e => {
        if (e.key === "Enter") {
          onAdd();
        }
    };

    return(
        <div>
            <div> Insert Your Note Here...</div>
            <div>
                {error.triggered && (
                    <div>{error.message}</div>
                )}
            </div>
            <input 
                type="text" 
                name="note" 
                value={noteInput} 
                onChange={handleChange}
                onKeyPress={handleKeyPress}
            />
        </div>
    );
};

export default InsertForm;