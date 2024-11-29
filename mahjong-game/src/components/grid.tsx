import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

type GridProps = {
  columns: number;
  rows: number;
  gap: number;
  height: number;
  width: number;
  style?: React.CSSProperties;
};

type GridCell = {
    isSelected: boolean;
}

const LayerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const StyledGrid = styled(motion.div)<GridProps>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, ${({ width }) => width}px);
  grid-template-rows: repeat(${({ rows }) => rows}, ${({ height }) => height}px);
  grid-gap: ${({ gap }) => gap}px;
  justify-content: center;
  align-content: center;
  background-color: rgba(40, 44, 52, 0.5);
  position: absolute; 
  top: 0;
  height: 100%;
  width: 100%;
  left: 0;
`;

const StyleGridCell = styled(motion.div)<GridCell>`
  background-color: ${({ isSelected }) => isSelected ? 'rgba(40, 44, 52, 0.5)' : 'red'};
`;

const Grid = ({ columns, rows, gap, height, width, style }: GridProps) => {
  const [selectedCells, setSelectedCells] = useState<{[key: number]: boolean}>({});

  const onCellClick = (index: number) => {
    setSelectedCells((selectedCells) => {
      return {
        ...selectedCells,
        [index]: !selectedCells[index],
      };
    });
  };

  return (
    <StyledGrid columns={columns} rows={rows} gap={gap} height={height} width={width} style={style}>
      {[...Array(columns * rows)].map((_, index) => (
        <StyleGridCell onClick={() => onCellClick(index)} 
        isSelected={selectedCells[index]} key={index} 
        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} whileDrag={{ scale: 0.95 }}
         drag dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }} />
      ))}
    </StyledGrid>
  );
};

const MultiLayerGrid = () => {
  return (
    <LayerContainer>
      <Grid columns={10} rows={6} gap={5} height={150} width={100} style={{ zIndex: 1, backgroundColor: '#41454C' }} />
      <Grid columns={9} rows={5} gap={5} height={150} width={100} style={{ zIndex: 2}} />
      <Grid columns={8} rows={4} gap={5} height={150} width={100} style={{ zIndex: 3}} />

    </LayerContainer>
  );
};

export default MultiLayerGrid;

