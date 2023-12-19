import React from 'react'
import { Row, Col } from 'react-bootstrap';
import {
  LinkedinShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  TumblrShareButton,
  RedditShareButton,
  EmailShareButton,
  LinkedinIcon,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  TelegramIcon,
  TumblrIcon,
  RedditIcon,
  EmailIcon,
} from 'react-share';


function ShareButtons({ eventName, eventType, eventDescription }) {
  const shareUrl = 'https://events-turkey.vercel.app/';

  return (
    <Row className="justify-content-around">
      <Col xs={3} md={1} className="mb-3 mb-md-0">
        <LinkedinShareButton
          url={shareUrl}
          source={shareUrl}
          hashtag={`#${eventType}`}
          summary={`#${eventDescription}`}
        >
          <LinkedinIcon size={40} round={true} />
        </LinkedinShareButton>
      </Col>
      <Col xs={3} md={1}>
        <FacebookShareButton
          url={shareUrl}
          quote={eventName}
          hashtag={`#${eventType}`}
        >
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton>
      </Col>
      <Col xs={3} md={1}>
        <TwitterShareButton
          url={shareUrl}
          title={eventName}
          hashtags={[`#${eventType}`, `#${eventName}`]}
        >
          <TwitterIcon size={40} round={true} />
        </TwitterShareButton>
      </Col>
      <Col xs={3} md={1}>
        <WhatsappShareButton
          url={shareUrl}
          title={eventName}
        >
          <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton>
      </Col>
      <Col xs={3} md={1}>
        <TelegramShareButton
          url={shareUrl}
          title={eventName}
        >
          <TelegramIcon size={40} round={true} />
        </TelegramShareButton>
      </Col>
      <Col xs={3} md={1}>
        <TumblrShareButton
          url={shareUrl}
          title={eventName}
          caption={eventDescription}
          tags={[eventType, eventName]}
        >
          <TumblrIcon size={40} round={true} />
        </TumblrShareButton>
      </Col>
      <Col xs={3} md={1}>
        <RedditShareButton
          url={shareUrl}
          title={eventName}
        >
          <RedditIcon size={40} round={true} />
        </RedditShareButton>
      </Col>
      <Col xs={3} md={1}>
        <EmailShareButton
          url={shareUrl}
          subject={eventName}
        >
          <EmailIcon size={40} round={true} />
        </EmailShareButton>
      </Col>
    </Row>
  )
}

export default ShareButtons