import React, { useCallback, useRef, useState, useEffect } from 'react';
import './style.scss';
//import ShowIcon from '../../../../../assets/icons/BaselineVisibility24Px';
//import HideIcon from '../../../../../assets/icons/BaselineVisibilityOff24Px';

const TextInput = (props) => {  
  const { onChange, label = '', value = '', type = 'text' ,readOnly=false} = props;
  const [focus, setFocus] = useState(value.length > 0 ? 'text-input--active' : '');
  const [passwordMode, setPasswordMode] = useState(false);
  const field = useRef(null);
  const showPassword = useCallback(() =>
      (val => {
        field.current.type = val === 'password' ? 'text' : 'password';
        setPasswordMode(val === 'password');
      })(field.current.type),
    [field, setPasswordMode],
  );
  const handleFocus = ({ type }) =>
    setFocus(value.length > 0 || type === 'focus' ? 'text-input--active' : '');

  useEffect( () => {    
    setFocus(value.length > 0 ? 'text-input--active' : '');
  }, [props.value])  
  return (
    <>
    {(props.labelInside) ? (
      <div className={`text-input ${focus}`}>
        <label className={'text-input__label'}>
          <span className={'text-input__label-text'}>{label}</span>
          <input
            ref={field}
            className={'text-input__field'}
            type={type}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleFocus}
            value={value}
            {...props}
          />
        </label>
        
      {type === 'password' &&
        <span className={'text-input__post-icon'} onClick={showPassword}>
          {/*<img src={passwordMode ? hideIcon : showIcon} alt=''/>*/}
          {/*passwordMode ? <HideIcon /> : <ShowIcon/>*/}
        </span>
      }
    </div>
      ) :
      (
        <>
          <span className={'text-input__label-text-outside'}>{label}</span>
          <div className={`text-input ${focus}`}>
            <label className={'text-input__label'}>
              <input
                ref={field}
                className={'text-input__field'}
                type={type}
                onChange={onChange}
                onFocus={handleFocus}
                onBlur={handleFocus}
                value={value}
                readOnly ={readOnly}
                {...props}
              />
              {type === 'password' &&
                <span className={'text-input__post-icon'} onClick={showPassword}>
                  {/*<img src={passwordMode ? hideIcon : showIcon} alt=''/>*/}
                  {/*passwordMode ? <HideIcon /> : <ShowIcon/>*/}
                </span>
              }
            </label>

          </div>
      </>
      )}
   </>       
  );
};

export default TextInput;