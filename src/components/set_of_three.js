import React from 'react';

import CallToAction from './call_to_action';
import Headline from './headline'
import ImageWithCaption from './image_with_caption';
import ParagraphWithHeadline from './paragraph_with_headline'
import TextWithImage from './text_with_image'

export default class SetOfThree extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='set-of-three row' data-content-type='setOfThree'>
      {this.props.fields.items.map((item, idx) => {
        switch (item.sys.contentType.sys.id) {
          case 'callToAction':
            return ( <CallToAction          className="col-lg" key={item.sys.id} fields={item.fields} /> )
          case 'headline':
            return ( <Headline              className="col-lg" key={item.sys.id} fields={item.fields} /> )
          case 'imageWithCaption':
            return ( <ImageWithCaption      className="col-lg" key={item.sys.id} fields={item.fields} defaultImageURL={this.props.defaultImageURL} /> )
          case 'paragraphWithHeadline':
            return ( <ParagraphWithHeadline className="col-lg" key={item.sys.id} fields={item.fields} /> )
          case 'textWithImage':
            return ( <TextWithImage         className="col-lg" key={item.sys.id} fields={item.fields} defaultImageURL={this.props.defaultImageURL} /> )
        }
      })}
    </div>
    )
  }
}
