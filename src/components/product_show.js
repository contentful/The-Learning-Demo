import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import * as contentful from 'contentful';
import Section from './section';
import LocaleSelect from './locale_select';
import config from './config.contentful-demo';

const TEST_IMAGE_URL = "https://images.ctfassets.net/34zhepmq2vpx/4ClyFr0XGwcOiKUMyyiMKO/c47e029fa790bf3c01b8900bd6cacf87/TWD_Test_Image6.png";

export default class ProductShow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productsByLocale: {},
      locales: [],
      currentLocale: undefined,
      defaultLocale: undefined,
      defaultImageURL: undefined
    };

    this.handleSelectLocale = this.handleSelectLocale.bind(this);
  }

  //Perform handling for the selection of the locale
  handleSelectLocale(selectedCode) {
    this.setState(()=>({currentLocale: selectedCode}));
  }

  componentWillMount() {
    const options = {}
    
    let is_preview = this.props.location.query.hasOwnProperty('preview')
    let space_id = this.props.location.query.space_id
    let access_token = this.props.location.query.access_token

    options.space = space_id ? space_id : config.space_id
    options.host = is_preview ? 'preview.contentful.com' : undefined
    options.accessToken = access_token ? access_token : is_preview ? config.preview_token : config.delivery_token
    
    const contentfulClient = contentful.createClient(options)
    //Get the locales setup for the space and do necessary processing
    contentfulClient.getLocales().then(data => {
      //Store current locale codes in array to be populated in select dropdown on page
      const localeCodes = data.items.map( (localeData) => localeData.code );

      //Filter to find the default locale to use later
      const defaultLocale = data.items.filter( (item) => item.default === true )[0].code;

      let productsByLocale = {};

      //Get entries for each locale setup for the space
      localeCodes.map((localeCode)=>{
        contentfulClient.getEntries({content_type: 'product', locale:localeCode, 'fields.slug': this.props.location.pathname.split('/')[1], include: 10})
        .then(data => {
          productsByLocale[localeCode] = data.items[0];

          //If on the last object of the array, set the state after we get the entry
          if(localeCodes.indexOf(localeCode) == localeCodes.length - 1){
            //Fetch a default image that can be used in case of errors retrieving others (e.g. fallbacks not defined and API doesn't return assets)
            //TODO: Handling this way for now since there hasn't been resolution whether this should fallback to the default locale or not. Can reassess when this is resolved.
            //Also set state
            this.setState(()=>({
              productsByLocale: productsByLocale,
              locales: localeCodes,
              currentLocale: defaultLocale,
              defaultLocale: defaultLocale,
              defaultImageURL: TEST_IMAGE_URL
            }));
          }
        })
      })
    })
  }

  renderMarkdown(content) {
    return {
      __html: marked(content, {sanitize: true})
    }
  }

  render() {
    if (!this.state.productsByLocale[this.state.currentLocale]) {
      return (<div>Loading...</div>);
    }

    document.title = this.state.productsByLocale[this.state.currentLocale].fields.title;

    let sections = this.state.productsByLocale[this.state.currentLocale].fields.sections.map((section, idx) => (
      <Section
        sectionType={section.sys.contentType.sys.id}
        section={section}
        key={section.sys.id}
        sys={section.sys}
        currentLocale={this.state.currentLocale}
        defaultImageURL={this.state.defaultImageURL}
      />)
    )

    return (
      <div>
        {sections}
        <LocaleSelect locales={this.state.locales} currentLocale={this.state.currentLocale} handleSelectLocale={this.handleSelectLocale} />
      </div>
    )
  }
}
