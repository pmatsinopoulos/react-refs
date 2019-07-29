import React from 'react'

class CustomTextInputWithCallbackRef extends React.Component {
  constructor(props) {
    super(props)

    this.textInput = null
    this.setTextInputRef = element => {
      this.textInput = element
    }
    this.focusTextInput = () => {
      if (this.textInput) this.textInput.focus()
    }
  }

  componentDidMount() {
    this.focusTextInput()
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.setTextInputRef}/>
        <input type="button" value="Focus on text input" onClick={this.focusTextInput}/>
      </div>
    )
  }

}

export default CustomTextInputWithCallbackRef

