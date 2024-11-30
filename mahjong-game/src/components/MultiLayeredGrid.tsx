import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Grid from './Grid';
import { Level } from './game/Level';
import { Mahjong } from './game/mahjongs/Mahjong';

const LayerContainer = styled(motion.div)<{level: Level}>`
  position: absolute;
  height: 100vh;
  background-color: #41454C;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
`;

type MultiLayerGridProps = {
  level: Level;
};

const MultiLayerGrid: React.FC<MultiLayerGridProps> = ({ level }) => {
  var screenHeight = window.innerHeight;
  var screenWidth = window.innerWidth;
  var ratio = 3 / 2;
  var height = Math.min(screenHeight / (level.size.y + 1), screenWidth / (level.size.x + 1) * ratio);
  var width = Math.min(screenWidth / (level.size.x + 1), screenHeight / (level.size.y + 1) * (1 / ratio));
  var gap = 0;

  return (
    <LayerContainer level={level}>

      {level.board.map((layer: (Mahjong | null)[][], layerIndex: number) => (
        <Grid
          key={layerIndex}
          columns={layer[0].length} // Number of columns in this layer
          rows={layer.length} // Number of rows in this layer
          gap={gap}
          height={height}
          width={width}
          style={{
            zIndex: layerIndex + 1, // Ensure each layer is stacked
                      }}
          mahjongs={layer}
        />
      ))}
    </LayerContainer>
  );
};

export default MultiLayerGrid;

