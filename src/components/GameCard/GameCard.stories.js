import React from "react";

import "../../index.css";
import GameCard from "./index";
import GCBackground from "./GCBackground";
import GCDetails from "./GCDetails";

export default {
  component: GameCard,
  title: "GameCard",
};

const backgroundData = {
  imageUrl:
    "https://store-images.s-microsoft.com/image/apps.46555.14633508178697795.8e68c608-a2d6-4e24-862f-b89b731a3056.3fdd1bfe-20d9-4429-955d-9a951cd2c32a?mode=scale&q=90&h=1080&w=1920&background=%23FFFFFF",
};

const gameDetails = {
  platform: 'steam',
  title: 'Rainbow Six : Siege',
  genre: 'Tactical, FPS'
}
export const Default = () => <GameCard />;

export const WithBG = () => (
  <GameCard>
    <GCBackground imageUrl={backgroundData.imageUrl} />
  </GameCard>
);

export const WithBGAndDetails = () => (
  <GameCard>
    <GCDetails {...gameDetails} />
    <GCBackground imageUrl={backgroundData.imageUrl} />
    
  </GameCard>
);
