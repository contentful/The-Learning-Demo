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
      <div className='row w-full mb-8'>
        <div className="flex flex-col items-center mt-2 mb-2">
          <div className="">
          <select
            className='locale-control text-center w-full'
            onChange={ (e)=>{
              props.handleSelectLocale(e.target.value)
          }}>
            {localeOptions}
          </select>
          </div>
        </div>
        <div className='col-md-3'></div>
     
      </div>
    )
}

export default LocaleSelect;
