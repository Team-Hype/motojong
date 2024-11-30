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
  bottom: ${({height, gap, rows}) => (rows * (height + gap))}px;
  right: ${({width, gap, columns}) => columns * (width + gap)}px;
`;

const isBlocked = (index: number, columns: number, rows: number, mahjongs: (Mahjong | null)[][]) => {
  return true;
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
          isBlocked={isBlocked(index, columns, rows, mahjongs)}
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

