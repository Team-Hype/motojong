import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

type GridCellProps = {
  isSelected: boolean;
  onClick: () => void;
};

const StyledGridCell = styled(motion.div)<{ isSelected: boolean }>`
  background-color: ${({ isSelected }) => (isSelected ? 'rgba(40, 44, 52, 0.5)' : 'red')};
  cursor: grab;
`;

const GridCell: React.FC<GridCellProps> = ({ isSelected, onClick }) => {
  return (
    <StyledGridCell
      onClick={onClick}
      isSelected={isSelected}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      whileDrag={{ scale: 0.95 }}
      drag
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
    />
  );
};

export default GridCell;
