import React, { Component } from 'react';
import './PlacesPanel.css'
import PlaceItem from './PlaceItem.js'

class PlacesPanel extends Component {
  render() {
    const places = this.props.app.state.places

    let placeItems= <div className="no-results">Nothing Added yet</div>
    if (places.length > 0) {
      placeItems = places.map((place, index) => {
        return <PlaceItem place={place} app={this.props.app} key={index}></PlaceItem>
      })
    }

    


    return (
      <div className="places">
        {placeItems}
      </div>
    )
  }
}

export default PlacesPanel;
