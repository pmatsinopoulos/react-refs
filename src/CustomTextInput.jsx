import React from 'react'

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props)

    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this)
  }

  focusTextInput(e) {
    e.preventDefault()
    this.textInput.current.focus()
  }

  render() {
    return (
      <React.Fragment>
        <input type="text" ref={this.textInput} placeholder="Type something here"/>
        <button onClick={this.focusTextInput}>Click to focus on text input</button>
      </React.Fragment>
    )
  }
}

export default CustomTextInput
