import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Loading = ({loadingText}) => {      
  return (
    <div className="loading_atom">{loadingText+"..."}</div>
  )
}

Loading.propTypes = {  
  loadingText: PropTypes.string    
};

Loading.defaultProps = {    
  loadingText: "Loading"
};

export default (Loading);