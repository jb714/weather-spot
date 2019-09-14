import React, { Component } from 'react';

import UnitSelect from './UnitSelect/UnitSelect';
import Title from './Title/Title';
import SearchBar from './SearchBar/SearchBar';
import SavedSearches from './SavedSearches/SavedSearches';



class HeadSection extends Component {

  render() {
    const props = this.props;
    return (
        <div className="head-section">
            <SavedSearches {...props} />
            <div className="page-header">
              <Title />
              <SearchBar setCity={props.setCity} />
            </div>
            <UnitSelect setScale={props.setScale} scale={props.scale} />
        </div>
    );
  }
}

export default HeadSection;
