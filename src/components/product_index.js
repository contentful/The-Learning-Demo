import React, { Component } from 'react';
import { Link } from 'react-router';
import * as contentful from 'contentful';
import config from './config';

export default class ProductsIndex extends Component {
  constructor(props) {
      super(props);
      this.state = {
        products: null
      };
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

    document.title = 'The Learning Demo';
    contentfulClient.getEntries({content_type: 'product', order: '-sys.createdAt'}).then(data => {
      var products = data.items.map(product => product.fields.title).sort()
      var obj = {};
      for (let i = 0; i < data.items.length; i++) {
        obj[data.items[i].fields.title] = data.items[i];
      }
      this.setState({products: obj});
    });

  }

  renderProducts() {
    //console.log(this.state.products);
    return Object.keys(this.state.products).map((product, index) => {
      return (
        <div key={`product-${index}`} className='col-sm-6'>
          <div key={this.state.products[product].sys.id} className='card'>
            <div className='card-body'>
              <h5 className='card-title'>{product} <span className="badge badge-success">New!</span></h5>
              <Link to={{pathname: `/${this.state.products[product].fields.slug}`, state: {id: this.state.products[product].sys.id}}} className="btn btn-primary">View</Link>
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    if (!this.state.products) {
      return (
        <div>loading...</div>
      )
    }
    return (
      <div className='product-index row'>
        {this.renderProducts()}
      </div>
    );
  }
}
