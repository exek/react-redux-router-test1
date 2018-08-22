import React from "react";
import PropTypes from "prop-types";

import SocialLink from "./SocialLink";

const user = {
  userId: 1,
  city: "Москва",
  languages: ["English", "Русский"],
  social: [
    {
      label: "vk",
      link: "vk.com/maxpfrontend"
    },
    {
      label: "telegram",
      link: "t.me/maxpfrontend"
    },
    {
      label: "web",
      link: "https://maxpfrontend.ru"
    },
    {
      label: "youtube",
      link: "https://www.youtube.com/channel/UCqJyAVWwIqPWKEkfCSP1y4Q"
    },
    {
      label: "twitter",
      link: "https://twitter.com/MaxPatsiansky"
    },
    {
      label: "twitch",
      link: "http://twich.tv/maxpfrontend"
    }
  ]
};

const UserInfo = ({ user: { userId, city, languages, social } }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Card title for id: {userId}</h5>
        <p className="card-text">City: {city}</p>
        <p className="card-text">Languages: {languages.join(", ")}</p>
        <ul>
          {social.map(item => (
            <li>
              <SocialLink key={item.label} {...item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

UserInfo.propTypes = {
  city: PropTypes.string,
  languages: PropTypes.arrayOf(PropTypes.string),
  social: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      link: PropTypes.string
    })
  )
};

export default UserInfo;
