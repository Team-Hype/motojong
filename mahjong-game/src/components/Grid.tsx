import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import GridCell from './GridCell'; // Import the encapsulated GridCell component
import { Mahjong, EmptyMahjong } from '../mahjongs/Mahjong';
import { stat } from 'fs';
import { BMWHexagon, BMWLogo } from '../mahjongs/BMWSample';
type GridProps = {
  columns: number;
  rows: number;
  gap: number;
  height: number;
  width: number;
  style?: React.CSSProperties;
};

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

const Grid: React.FC<GridProps> = ({ columns, rows, gap, height, width, style }) => {
  const [selectedCells, setSelectedCells] = useState<{ [key: number]: boolean }>({});

  const onCellClick = (index: number) => {
    setSelectedCells((prevSelectedCells) => ({
      ...prevSelectedCells,
      [index]: !prevSelectedCells[index],
    }));
  };

  return (
    <StyledGrid columns={columns} rows={rows} gap={gap} height={height} width={width} style={style}>
      {[...Array(columns * rows)].map((_, index) => (
        <GridCell
          key={index}
          isSelected={selectedCells[index] || false}
          onClick={() => onCellClick(index)}
          mahjong={new  BMWLogo()}
        />
      ))}
    </StyledGrid>
  );
};

export default Grid;
