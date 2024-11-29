import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

type GridCellProps = {
  isSelected: boolean;
  onClick: () => void;
  defaultImage: string;
};

const StyledGridCell = styled(motion.div)<{ isSelected: boolean; defaultImage: string;}>`
  background-image: ${({defaultImage}) => `url(${defaultImage})`};
  background-size: cover;
  background-position: center;
  cursor: grab;
  filter: ${({ isSelected }) => isSelected ? 'grayscale(1) contrast(0.5) sepia(1) hue-rotate(5deg)' : 'none'};
`;

const GridCell: React.FC<GridCellProps> = ({ isSelected, onClick, defaultImage }) => {
  return (
    <StyledGridCell
      onClick={onClick}
      isSelected={isSelected}
      defaultImage={defaultImage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      whileDrag={{ scale: 0.95 }}
      drag
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
    />
  );
};

export default GridCell;
