import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Mahjong } from './game/mahjongs/Mahjong';

type GridCellProps = {
  isSelected: boolean;
  isBlocked: boolean;
  onClick: (e : React.MouseEvent) => void;
  mahjong: (Mahjong | null);
  column: number;
  row: number;
  gap: number;
  height: number;
  width: number;
};

const StyledGridCell = styled(motion.div)<{ row: number; column: number; width: number; height: number; gap: number;isBlocked: boolean; isSelected: boolean; mahjong: (Mahjong | null);}>`
  background-image: ${({mahjong}) => `url(${mahjong ? mahjong.image : ''})`};
  background-size: cover;
  background-position: center;
  cursor: ${({isBlocked}) => isBlocked ? 'not-allowed' : 'grab'};
  position: absolute;
  top: ${({ row, height, gap }) => (row * (height + gap))}px;
  left: ${({ column, width, gap }) => column * (width + gap)}px;
  width: ${({ width }) => width*2}px;
  height: ${({ height }) => height*2}px;
  ${({ mahjong }) => !mahjong && 'pointer-events: none;'}
  filter: ${({ isBlocked }) => isBlocked ? 'brightness(0.5)' : 'none'};
  ${({ isBlocked, isSelected }) => isBlocked ? '' : isSelected && 'filter: brightness(0.7) contrast(1.1) sepia(0.5) hue-rotate(10deg);'}
`;

const GridCell: React.FC<GridCellProps> = ({column, row, gap, height, width,isBlocked, isSelected, onClick, mahjong }) => {
  return (
    <StyledGridCell
      isBlocked={isBlocked}
      onClick={onClick}
      isSelected={isSelected}
      mahjong={mahjong}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      whileDrag={{ scale: 0.95 }}
      column = {column}
      row = {row}
      gap = {gap}
      height={height}
      width={width}
      drag
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
    />
  );
};

export default GridCell;

