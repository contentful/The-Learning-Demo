import React from 'react';
import Markdown from 'react-remarkable';

export default class CallToAction extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='row'>
        <div className='col-md-3'></div>
        <div data-content-type='callToAction' className={`${this.props.className} card text-center col-lg-6 border-dark m-lg-5 p-lg-3 p-3 m-1`}>
          <Markdown source={this.props.fields.text} />
          
          <button type="button" className="bg-blue-100 shadow-md mt-2 hover:bg-blue-300 p-2 rounded-md">{this.props.fields.buttonText}</button>
        </div>
        <div className='col-md-3'></div>
      </div>
    )
  }
}
