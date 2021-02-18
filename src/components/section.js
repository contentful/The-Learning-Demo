import React from 'react';
import Markdown from 'react-remarkable';

import CallToAction from './call_to_action';
import Header from './header';
import Headline from './headline'
import HeroImage from './hero_image';
import ImageWithCaption from './image_with_caption';
import ParagraphWithHeadline from './paragraph_with_headline'
import SetOfTwo from './set_of_two'
import SetOfThree from './set_of_three'
import TextWithImage from './text_with_image'

export default class Section extends React.Component {
  constructor(props) {
    super(props);
  }

  renderSection() {
    switch (this.props.sectionType) {
      case 'callToAction':
        return ( <CallToAction          fields={this.props.section.fields} /> )
      case 'header':
        return ( <Header                fields={this.props.section.fields} defaultImageURL={this.props.defaultImageURL} /> )
      case 'headline':
        return ( <Headline              fields={this.props.section.fields} /> )
      case 'heroImage':
        return ( <HeroImage             fields={this.props.section.fields} defaultImageURL={this.props.defaultImageURL} /> )
      case 'imageWithCaption':
        return ( <ImageWithCaption      fields={this.props.section.fields} defaultImageURL={this.props.defaultImageURL} /> )
      case 'paragraphWithHeadline':
        return ( <ParagraphWithHeadline fields={this.props.section.fields} /> )
      case 'setOfTwo':
        return ( <SetOfTwo              fields={this.props.section.fields} defaultImageURL={this.props.defaultImageURL} /> )
      case 'setOfThree':
        return ( <SetOfThree            fields={this.props.section.fields} defaultImageURL={this.props.defaultImageURL} /> )
      case 'textWithImage':
        return ( <TextWithImage         fields={this.props.section.fields} defaultImageURL={this.props.defaultImageURL} /> )
      default:
        console.log("Section type not found: " + this.props.sectionType);
        return ( <div data-content-type='not-found'>Illegal Section Type</div> )
    }
  }

  render() {
    return (
      <div className='section'>
        {this.renderSection()}
      </div>
    )
  }
}
