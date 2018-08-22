import React from "react";
import NewsItem from "../NewsItem";

export default ({ news }) => {
  return (
    <div>
      {news.map(item => (
        <NewsItem key={item.id} {...item} />
      ))}
    </div>
  );
};
