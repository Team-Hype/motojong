import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Grid from './Grid';
import { Level } from './game/Level';
import { Mahjong } from './game/mahjongs/Mahjong';

const LayerContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100vh;
`;

type MultiLayerGridProps = {
  level: Level;
};

const MultiLayerGrid: React.FC<MultiLayerGridProps> = ({ level }) => {
  return (
    <LayerContainer layout>
      {level.board.map((layer: Mahjong[][], layerIndex: number) => (
        <Grid
          key={layerIndex}
          columns={layer[0].length} // Number of columns in this layer
          rows={layer.length} // Number of rows in this layer
          gap={0}
          height={150}
          width={100}
          style={{
            zIndex: layerIndex + 1, // Ensure each layer is stacked
            backgroundColor: layerIndex === 0 ? '#41454C' : 'transparent', // Optional styling for the first layer
          }}
          mahjongs={layer}
        />
      ))}
    </LayerContainer>
  );
};

export default MultiLayerGrid;

