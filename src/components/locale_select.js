import React from 'react';

const LocaleSelect = (props) => {
    if (!props.locales){
      return <div></div>;
    }

    //Make options from the current locale options
    let localeOptions = props.locales.map((code) =>
      <option value={code} key={code}>{code}</option>
    );

    //Return JSX with select control for choosing locale options
    return (
      <div className='row'>
        <div className='col-md-3'></div>
        <div className={`text-center border-0 col-lg-6 m-lg-5 p-lg-3 p-3 m-1`}>
          <select
            className='locale-control text-center'
            onChange={ (e)=>{
              props.handleSelectLocale(e.target.value)
          }}>
            {localeOptions}
          </select>
        </div>
        <div className='col-md-3'></div>
      </div>
    )
}

export default LocaleSelect;
