import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.scss';
import Icon from '../Icon';

const ButtonTextIcon = ({to, disabled,classname, text, onClick, color, type, icon}) => {

  const _renderLink = (toLink) => (    
      /^https?:\/\//.test(toLink)
        ? <a href={toLink} style={{textDecoration: 'none'}} target="_blank">
            <button className={`${color} button`} type={type}>
              {_renderButton(icon)}
            </button>
        </a>
        : <Link to={toLink} style={{textDecoration: 'none'}}>
            <button className={`${color} button`} type={type}>
              {_renderButton(icon)}
            </button>
        </Link>      
  )

  const _renderButton = (icon) => {
    return (
      <>
        {icon && <div className={"button-icon-container"}>
          <Icon type={icon} />
        </div>}
        <span className={"button-text"}>{text}</span>
      </>
    );
  };

  return (
    <Fragment>
        {to && !disabled && _renderLink(to)}
        {(!to || disabled) && (
          <button
            className={`${color} button ${classname}`}
            disabled={disabled}        
            onClick={onClick}    
            type={type}
          >
            {(icon) ? _renderButton(icon) : (
              <span className={"button-text"}>{text}</span>
            )}
          </button>
        )}
      </Fragment>    
  )
}

ButtonTextIcon.propTypes = {  
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  classname : PropTypes.string
};

ButtonTextIcon.defaultProps = {
  disabled: false,
  onClick: event => event,
  type: 'button',
  color: 'primary'
};

export default ButtonTextIcon;
