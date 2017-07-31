import React, { Component } from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import './styles/flexstyle.css'

class App extends Component {
  render() {
    return (
      <main className='site'>
        <Header name="Chris Scouras" />
        <Content />
        <Footer />
      </main>
    )
  }
}

export default App
