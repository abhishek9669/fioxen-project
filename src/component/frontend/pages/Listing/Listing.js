import React from "react";
import Welcome from "../../common/Welcome";
import ListHeroBanner from "./pages/ListHeroBanner";
import ListingListArea from "./pages/ListingListArea";

export default function Listing() {
  return (
    <>
      <Welcome>
        <ListingListArea/>
      </Welcome>
    </>
  );
}
