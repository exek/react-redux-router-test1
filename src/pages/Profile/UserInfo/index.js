import React from "react";
import PropTypes from "prop-types";

import SocialLink from "./SocialLink";

const UserInfo = ({ user: { userId, city, languages, social } }) => {
  const sorted = Array.from(social).sort((a, b) => {
    if (a["label"] === "web") return -1;
    return 1;
  });

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Card title for id: {userId}</h5>
        <p className="card-text">City: {city}</p>
        <p className="card-text">Languages: {languages.join(", ")}</p>
        <ul>
          {sorted.map(item => (
            <li key={item.label}>
              <SocialLink {...item} />
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
