import React from 'react'

function Option(props) {

    const {type, handleSelect} = props

    const option = [
        {
            value:"html",
            label:"html"
        },
        {
            value:"text",
            label:"text"
        }
    ]
    return (
        <select value={type} onChange={handleSelect} className="form__field"  placeholder="No" name="no">
        {option.map(key => <option value={key.value}>{key.label}</option> )}
        </select>
    )
}

export default Option
