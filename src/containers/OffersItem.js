import React from "react";

const OffersItem = ({ created_at, photos, price, sold, title, user }) => {
  const created = new Date(created_at);
  return (
    <div className="offer-item">
      {photos[0] && <img src={photos[0].url} alt={title} className="offer-photo" />}
      <div className="info">
        <div className="user">
          <h3>{user}</h3>
        </div>
        <div className="details">
          <h3>{title}</h3>
          <p>
            Prix : {price} € {sold ? "(Vendu)" : ""}
          </p>
          <p>
            Publié le {created.toLocaleDateString()} à {created.toLocaleTimeString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OffersItem;


