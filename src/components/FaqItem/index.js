// Write your code here.
import {Component} from 'react'

import './index.css'

const plusImg =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minusImg =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {
    isActive: false,
  }

  onToggleAnswer = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  renderActiveImage = () => {
    const {isActive} = this.state
    const image = isActive ? minusImg : plusImg
    const altText = isActive ? 'minus' : 'plus'

    return (
      <button className="button" type="button" onClick={this.onToggleAnswer}>
        <img className="image" src={image} alt={altText} />
      </button>
    )
  }

  renderAnswer = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    const {isActive} = this.state

    if (isActive === true) {
      return (
        <div>
          <hr className="horizontal-line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails

    return (
      <li className="faq-item">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          {this.renderActiveImage()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
