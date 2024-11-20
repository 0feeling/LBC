import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import OffersItem from "./OffersItem";
import "./Offers.css";
import { fakeDatas } from "../Data/FakeDatas";
import Pages from "../components/Pages";

const Offers = () => {
  const [data, setData] = useState({ count: 0, offers: [] });
  const [pageNum, setPageNum] = useState(1);
  const itemsPerPage = 10; // Définissez le nombre d'éléments par page

  useEffect(() => {
    setData({ count: fakeDatas.itemsTotal, offers: fakeDatas.items });
  }, []);

  const displayedOffers = data.offers.slice((pageNum - 1) * itemsPerPage, pageNum * itemsPerPage);

  return (
    <div className="offers">
      <h1>Liste des annonces :</h1>
      {displayedOffers.length > 0 ? (
        displayedOffers.map((offer) => (
          <Link key={offer.id} to={`/oneoffer/${offer.id}`} aria-label={`Voir l'annonce ${offer.title}`}>
            <OffersItem
              created_at={offer.created_at}
              photos={offer.photos}
              price={offer.price}
              sold={offer.sold}
              title={offer.title}
            />
          </Link>
        ))
      ) : (
        <p>Aucune annonce disponible.</p>
      )}
      <Pages pageTotal={Math.ceil(data.count / itemsPerPage)} setpageNum={setPageNum} pageNum={pageNum} />
    </div>
  );
};

export default Offers;


