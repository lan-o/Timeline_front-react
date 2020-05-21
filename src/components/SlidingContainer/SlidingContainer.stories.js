import React from "react";

import '../../index.css';
import SlidingContainer from "./index";
import GameCard from '../GameCard';
import GCDetails from '../GameCard/GCDetails';
import GCBackground from '../GameCard/GCBackground';

export default {
  component: SlidingContainer,
  title: "SlidingContainer",
};

const gameCardsData = [{
    id: 1,
    backgroundData: {
      imageUrl: "https://store-images.s-microsoft.com/image/apps.46555.14633508178697795.8e68c608-a2d6-4e24-862f-b89b731a3056.3fdd1bfe-20d9-4429-955d-9a951cd2c32a?mode=scale&q=90&h=1080&w=1920&background=%23FFFFFF",
    },
    gameDetails: {
      platform: 'steam',
      title: 'Rainbow Six : Siege',
      genre: 'Tactical, FPS'
    }
  },
  {
    id: 2,
    backgroundData: {
      imageUrl: "https://store-images.s-microsoft.com/image/apps.46555.14633508178697795.8e68c608-a2d6-4e24-862f-b89b731a3056.3fdd1bfe-20d9-4429-955d-9a951cd2c32a?mode=scale&q=90&h=1080&w=1920&background=%23FFFFFF",
    },
    gameDetails: {
      platform: 'steam',
      title: 'Rainbow Six : Siege',
      genre: 'Tactical, FPS'
    }
  },
  {
    id: 3,
    backgroundData: {
      imageUrl: "https://store-images.s-microsoft.com/image/apps.46555.14633508178697795.8e68c608-a2d6-4e24-862f-b89b731a3056.3fdd1bfe-20d9-4429-955d-9a951cd2c32a?mode=scale&q=90&h=1080&w=1920&background=%23FFFFFF",
    },
    gameDetails: {
      platform: 'steam',
      title: 'Rainbow Six : Siege',
      genre: 'Tactical, FPS'
    }
  },
  {
    id: 4,
    backgroundData: {
      imageUrl: "https://store-images.s-microsoft.com/image/apps.46555.14633508178697795.8e68c608-a2d6-4e24-862f-b89b731a3056.3fdd1bfe-20d9-4429-955d-9a951cd2c32a?mode=scale&q=90&h=1080&w=1920&background=%23FFFFFF",
    },
    gameDetails: {
      platform: 'steam',
      title: 'Rainbow Six : Siege',
      genre: 'Tactical, FPS'
    }
  },
  {
    id: 5,
    backgroundData: {
      imageUrl: "https://store-images.s-microsoft.com/image/apps.46555.14633508178697795.8e68c608-a2d6-4e24-862f-b89b731a3056.3fdd1bfe-20d9-4429-955d-9a951cd2c32a?mode=scale&q=90&h=1080&w=1920&background=%23FFFFFF",
    },
    gameDetails: {
      platform: 'steam',
      title: 'Rainbow Six : Siege',
      genre: 'Tactical, FPS'
    }
  },
  {
    id: 6,
    backgroundData: {
      imageUrl: "https://store-images.s-microsoft.com/image/apps.46555.14633508178697795.8e68c608-a2d6-4e24-862f-b89b731a3056.3fdd1bfe-20d9-4429-955d-9a951cd2c32a?mode=scale&q=90&h=1080&w=1920&background=%23FFFFFF",
    },
    gameDetails: {
      platform: 'steam',
      title: 'Rainbow Six : Siege',
      genre: 'Tactical, FPS'
    }
  },
  {
    id: 7,
    backgroundData: {
      imageUrl: "https://store-images.s-microsoft.com/image/apps.46555.14633508178697795.8e68c608-a2d6-4e24-862f-b89b731a3056.3fdd1bfe-20d9-4429-955d-9a951cd2c32a?mode=scale&q=90&h=1080&w=1920&background=%23FFFFFF",
    },
    gameDetails: {
      platform: 'steam',
      title: 'Rainbow Six : Siege',
      genre: 'Tactical, FPS'
    }
  },
  {
    id: 8,
    backgroundData: {
      imageUrl: "https://store-images.s-microsoft.com/image/apps.46555.14633508178697795.8e68c608-a2d6-4e24-862f-b89b731a3056.3fdd1bfe-20d9-4429-955d-9a951cd2c32a?mode=scale&q=90&h=1080&w=1920&background=%23FFFFFF",
    },
    gameDetails: {
      platform: 'steam',
      title: 'Rainbow Six : Siege',
      genre: 'Tactical, FPS'
    }
  },
  {
    id: 9,
    backgroundData: {
      imageUrl: "https://store-images.s-microsoft.com/image/apps.46555.14633508178697795.8e68c608-a2d6-4e24-862f-b89b731a3056.3fdd1bfe-20d9-4429-955d-9a951cd2c32a?mode=scale&q=90&h=1080&w=1920&background=%23FFFFFF",
    },
    gameDetails: {
      platform: 'steam',
      title: 'Rainbow Six : Siege',
      genre: 'Tactical, FPS'
    }
  }
]

const gameCards = () => {
  return gameCardsData.map(
    (data) => {
      return <GameCard key={data.id}><GCDetails {...data.gameDetails}/><GCBackground imageUrl = {data.backgroundData.imageUrl}/></GameCard>
    }
  )
}

export const Default = () =>
  <SlidingContainer>
    {gameCards()}
  </SlidingContainer>;