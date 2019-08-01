import React, { Component } from 'react';

import UnitSelect from './UnitSelect/UnitSelect';
import Title from './Title/Title';
import SearchBar from './SearchBar/SearchBar';
import SavedSearches from './SavedSearches/SavedSearches';



class HeadSection extends Component {

  render() {
    return (
        <div className="head-section">
            <SavedSearches
              saved={this.props.saved}
              tempUnit={this.props.tempUnit}
              windUnit={this.props.windUnit}
              deleteSnapshot={this.props.deleteSnapshot}/>
            <div className="page-header">
              <Title />
              <SearchBar setCity={this.props.setCity} />
            </div>
            <UnitSelect setScale={this.props.setScale} scale={this.props.scale} />
        </div>
    );
  }
}

export default HeadSection;
