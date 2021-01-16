import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import SearchBar from '../SearchBar/SearchBar';

function HomePage(props) {
  const [heading, setHeading] = useState('Home Page');

  return (
    <div>
      <h2>{heading}</h2>
      <SearchBar />
    </div>
  );
}

export default connect(mapStoreToProps)(withRouter((HomePage)));
