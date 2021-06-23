// import React, { Component, PropTypes } from 'react';
import React, { memo, useState, useEffect, useCallback } from "react";
import { Link } from 'react-router';
import * as contentful from 'contentful';
import Section from './section';
import LocaleSelect from './locale_select';
import config from './config';
import ReactJson from 'react-json-view'

import marked from 'marked'

const TEST_IMAGE_URL = "https://images.ctfassets.net/34zhepmq2vpx/4ClyFr0XGwcOiKUMyyiMKO/c47e029fa790bf3c01b8900bd6cacf87/TWD_Test_Image6.png";

export default function ProductShow(props){
  let options = {}

  let is_preview = ""
  let space_id = ""
  let access_token = ""

  options.space = space_id ? space_id : config.space_id
  options.host = is_preview ? 'preview.contentful.com' : undefined
  options.accessToken = access_token ? access_token : is_preview ? config.preview_token : config.delivery_token
  // hard code to start
  options.environment = config.environment ? config.environment : 'master';
 const [isLocalSet, setIsLocalSet ] = useState(false)

  const [productsByLocale, setProductsByLocale ] = useState("")
  const [currentLocale, setCurrentLocale ] = useState("")
  const [defaultLocale, setDefaultLocale ] = useState("")
  const [locales, setLocales ] = useState("")
  
  const [defaultImageURL, setDefaultImageURL ] = useState("")


  const handleSelectLocale = (selectedCode) => {
    
    setCurrentLocale(selectedCode)
  }
  
  // get contentful space data
  const getCtflSpace = async () =>{
      // contentful queries here
      const contentfulClient =  contentful.createClient(options)
      //Get the locales setup for the space and do necessary processing
       await contentfulClient.getLocales().then(data => {
       //Store current locale codes in array to be populated in select dropdown on page
       const localeCodes = data.items.map( (localeData) => localeData.code );
      //  console.log("localeCodes", data.items)
     
 
       //Filter to find the default locale to use later
       const defaultLocaleHolder = data.items.filter( (item) => item.default === true )[0].code;
 
       let productsByLocaleHolder = {};
 
       //Get entries for each locale setup for the space
       localeCodes.map((localeCode)=>{
         contentfulClient.getEntries({content_type: 'landingPage', 
         locale: localeCode, 
         'fields.slug': props.location.pathname.split('/')[1], 
         include: 10})
         .then(data2 => {
          productsByLocaleHolder[localeCode] = data2.items[0];
           console.log("localeCodes 2 ERRORX", data2.items)
           //If on the last object of the array, set the state after we get the entry
           if(localeCodes.indexOf(localeCode) == localeCodes.length - 1){
             //Fetch a default image that can be used in case of errors retrieving others (e.g. fallbacks not defined and API doesn't return assets)
             //TODO: Handling this way for now since there hasn't been resolution whether this should fallback to the default locale or not. Can reassess when this is resolved.
             //Also set state
           
      
             setProductsByLocale(productsByLocaleHolder)
             setCurrentLocale(defaultLocaleHolder)
             setDefaultLocale(defaultLocaleHolder)
             setDefaultImageURL(TEST_IMAGE_URL)
             setLocales(localeCodes)
      
           }else{
             // alert("sorry something went wrong")
           }
         })
       })
     })

  }


  useEffect(()=>{
    getCtflSpace()
   
    return ()=>{}
  },[])

  useEffect(()=>{
    if(!productsByLocale[currentLocale]){
      getCtflSpace()
    }

    return ()=>{}
  },[productsByLocale])


  // if(!isLocalSet){
  //   return <div>Locale is not set {JSON.stringify(options)}</div>

  // }
  if (!productsByLocale[currentLocale]) {
    console.log("ERRORX occured", productsByLocale,currentLocale )
    return (<div>Loading... 
            <div className="flex flex-col justify-items-center items-center">
          <div className="mb-2"> 
          <h1>SHOWING DATA IN REACT JSON VIEW</h1>
          </div>
          <div className="mt-2 mb-2"> 

          {productsByLocale ?  <ReactJson displayDataTypes={false} collapsed={true} src={productsByLocale} /> : ""}

          </div>

      </div>
      {/* {currentLocale} 
      {JSON.stringify(productsByLocale)} */}
      </div> );
 }

 

 document.title = productsByLocale[currentLocale].fields.title;

 let sections = productsByLocale[currentLocale].fields.sections.map((section, idx) => (
   <div   key={idx}>
     <Section
     sectionType={section.sys.contentType.sys.id}
     section={section}
     key={section.sys.id}
     ArrayKey={idx}
     sys={section.sys}
     currentLocale={currentLocale}
     defaultImageURL={defaultImageURL}
   />
     </div>)
 )
  return (
    <div className="w-full ">
    {/* {currentLocale} */}
    {/* {JSON.stringify(productsByLocale.hasOwnProperty('en-US'))} */}
    {sections}
    <LocaleSelect locales={locales} currentLocale={currentLocale} 
    handleSelectLocale={handleSelectLocale} 
    />

      <div className="flex flex-col justify-items-center items-center">
          <div className="mb-2"> 
          <h1>SHOWING DATA IN REACT JSON VIEW</h1>
          </div>
          <div className="mt-2 mb-2"> 
          {productsByLocale ?  <ReactJson displayDataTypes={false} collapsed={true} src={productsByLocale} /> : ""}

         

          </div>

      </div>
  </div>
  )
}



