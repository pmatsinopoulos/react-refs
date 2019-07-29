import React from 'react'

class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleButtonClick(e) {
    e.preventDefault()
    console.debug('ref', this.myRef)
  }

  render() {
    return (
      <div ref={this.myRef}>MyComponent
        <button onClick={this.handleButtonClick}>Click Me</button>
      </div>
    )
  }
}

export default MyComponent