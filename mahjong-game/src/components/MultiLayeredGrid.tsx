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
  return (
    <LayerContainer level={level}>

      {level.board.map((layer: (Mahjong | null)[][], layerIndex: number) => (
        <Grid
          key={layerIndex}
          columns={layer[0].length} // Number of columns in this layer
          rows={layer.length} // Number of rows in this layer
          gap={0}
          height={150}
          width={100}
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

