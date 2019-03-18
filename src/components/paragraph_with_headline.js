import React from 'react';
import Markdown from 'react-remarkable';

export default class ParagraphWithHeadline extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div data-content-type='paragraphWithHeadline' className={this.props.className}>
        <h2 className='text-center'>{this.props.fields.headline}</h2>
        <Markdown source={this.props.fields.paragraph} />
      </div>
    )
  }
}
