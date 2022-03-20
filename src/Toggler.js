import React, { Component } from 'react';
import './Toggler.css'

class Toggler extends Component {
  setLayer(url) {
    this.props.app.setState({
      style: url
    })
  }
  
  render () {
    const styles = [
      { name: "Satellite", url: "mapbox://styles/mapbox/satellite-v9" },
      { name: "Dark", url: "mapbox://styles/mapbox/dark-v9" },
      { name: "Light", url: "mapbox://styles/mapbox/light-v9" }
    ]

    const buttons = styles.map(style => {
      return <button onClick={() => this.setLayer(style.url)}>
          {style.name}
        </button>
    })


    return (
      <div className="toggler">
        {buttons}
        {this.props.app.state.style}
      </div>
    )
  }
}

export default Toggler;
