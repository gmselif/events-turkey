import React from 'react'
import { Container } from 'react-bootstrap';
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
  const shareUrl = 'https://github.com/gmselif';

  return (
    <Container>
      <h1>Share This Page On:</h1>
      <LinkedinShareButton
        url={shareUrl}
        source={shareUrl}
        hashtag={`#${eventType}`}
        summary={`#${eventDescription}`}
      >
        <LinkedinIcon size={40} round={true} />
      </LinkedinShareButton>
      <FacebookShareButton
        url={shareUrl}
        quote={eventName}
        hashtag={`#${eventType}`}
      >
        <FacebookIcon size={40} round={true} />
      </FacebookShareButton>
      <TwitterShareButton
        url={shareUrl}
        title={eventName}
        hashtags={[`#${eventType}`, `#${eventName}`]}
      >
        <TwitterIcon size={40} round={true} />
      </TwitterShareButton>
      <WhatsappShareButton
        url={shareUrl}
        title={eventName}
      >
        <WhatsappIcon size={40} round={true} />
      </WhatsappShareButton>
      <TelegramShareButton
        url={shareUrl}
        title={eventName}
      >
        <TelegramIcon size={40} round={true} />
      </TelegramShareButton>
      <TumblrShareButton
        url={shareUrl}
        title={eventName}
        caption={eventDescription}
        tags={[eventType, eventName]}
      >
        <TumblrIcon size={40} round={true} />
      </TumblrShareButton>
      <RedditShareButton
        url={shareUrl}
        title={eventName}
      >
        <RedditIcon size={40} round={true} />
      </RedditShareButton>
      <EmailShareButton
        url={shareUrl}
        subject={eventName}
      >
        <EmailIcon size={40} round={true} />
      </EmailShareButton>
    </Container>
  )
}

export default ShareButtons