import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import ColorPicker from './components/ColorPicker'

class App extends Component {
  render() {
    return <ColorPicker title="Hooked Color Picker" />
  }
}

export default App
