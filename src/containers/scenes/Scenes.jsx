import React, { useState } from 'react';
import { ScenesStyled } from './styled';
import Navigation from '../../components/navigations/Navigations';
import scenesJSON from '../../scenes.json';

const Scenes = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const { scenes } = scenesJSON;
  console.log(scenes);

  return (
    <ScenesStyled>
      <img src={scenes[currentPosition].imageUrl} alt="center_img" />
      {
        scenes[currentPosition].navigations.map((navigation) => (
          <Navigation 
            left={navigation.left}
            bottom={navigation.bottom}
          />
        ))
      }
    </ScenesStyled>
  )
};

export default Scenes;
