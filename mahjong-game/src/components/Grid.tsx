import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import GridCell from './GridCell'; // Import the encapsulated GridCell component
import { Mahjong } from './game/mahjongs/Mahjong';

type GridProps = {
  columns: number;
  rows: number;
  gap: number;
  height: number;
  width: number;
  style?: React.CSSProperties;
  mahjongs: (Mahjong | null)[][];
};

const StyledGrid = styled(motion.div)<GridProps>`
  position: relative;
  justify-content: center;
  align-content: center;
  display: flex;
  flex-wrap: wrap;
`;
const isLeftRightNeighbour = (index: number, columns: number, rows: number, mahjongs: (Mahjong | null)[][]) => {
  const leftIndex = index - 1;
  const rightIndex = index + 1;
  const isLeftNeighbour = leftIndex >= 0 && leftIndex % columns !== 0 && mahjongs[Math.floor(leftIndex / columns)][leftIndex % columns];
  const isRightNeighbour = rightIndex < columns * rows && rightIndex % columns !== 0 && mahjongs[Math.floor(rightIndex / columns)][rightIndex % columns];
  const isLeftBounded = index % columns === 0;
  const isRightBounded = (index + 1) % columns === 0;
  return (!isLeftNeighbour || isLeftBounded) || (!isRightNeighbour || isRightBounded);
};

const Grid: React.FC<GridProps> = ({ columns, rows, gap, height, width, style, mahjongs }) => {
  const [selectedCells, setSelectedCells] = useState<{ [key: number]: boolean }>({});

  const onCellClick = (index: number) => {
    setSelectedCells((prevSelectedCells) => ({
      ...prevSelectedCells,
      [index]: !prevSelectedCells[index],
    }));
  };

  return (
    <StyledGrid columns={columns} rows={rows} gap={gap} height={height/2} width={width/2} style={style} mahjongs={mahjongs}>
      {mahjongs.flat().map((mahjong, index) => (
        <GridCell
          key={index}
          isBlocked={!isLeftRightNeighbour(index, columns, rows, mahjongs)}
          column={index % columns}
          row={Math.floor(index / columns)}
          gap={gap}
          height={height}
          width={width}
          isSelected={selectedCells[index] || false}
          onClick={() => onCellClick(index)}
          mahjong={mahjong}
        />
      ))}
    </StyledGrid>
  );
};

export default Grid;

