import "./card.scss";
import CardTemplate from "./card.twig";

export default {
  title: "General/Card",
  argTypes: {
    card: {
      description: "Define the card content",
      control: "object",
      type: {
        required: true,
      },
    },
  },
};

export const Card = CardTemplate.bind({});
Card.args = {
  "card": {
    "modifier": "",
    "media": {
      "video": "",
      "image": "<img src='https://source.unsplash.com/PhYq704ffdA/640x360' alt='test image' />",
      "caption": ""
    },
    "eyebrow": {
      "text": "Optional eyebrow",
      "modifier": " card__eyebrow"
    },
    "heading": {
      "title": "Phasellus auctor, turpis",
      "heading_level": "2",
      "url": "#",
      "modifier": "card__title"
    },
    "subhead": {
      "title": "Optional Subhead Lorem Ipsum Dolor Sit Amet",
      "heading_level": "3",
      "modifier": "card__subhead",
      "url": ""
    },
    "summary_text": "This copy is optional, if nothing is entered nothing will display. Facit nulla in vulputate vulputate aliquam. Commodo esse habent tation nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed orci lacus.",
    "link": {
      "url": "#",
      "text":"Optional Link"
    }
  }
};