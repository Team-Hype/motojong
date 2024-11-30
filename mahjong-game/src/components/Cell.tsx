import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

type CellProps = {
    top: number;
    left: number;
    zIndex: number;
    image: string;
    isSelected: boolean;
    isBlocked: boolean;
    onClick: (e: React.MouseEvent) => void;
    height: number;
    width: number;
    animate?: { opacity: number; scale?: number };  // Добавляем анимацию
    exit?: { opacity: number; scale: number };     // Убираем элементы с анимацией
    initial?: { opacity: number };                 // Начальное состояние
};

const StyledCell = styled(motion.div)<{
    top: number;
    left: number;
    zIndex: number;
    width: number;
    height: number;
    image: string;
    isBlocked: boolean;
    isSelected: boolean;
}>`
    position: absolute;
    top: ${({ top }) => `${top}px`};
    left: ${({ left }) => `${left}px`};
    width: ${({ width }) => `${width * 2}px`};
    height: ${({ height }) => `${height * 2}px`};
    z-index: ${({ zIndex }) => zIndex};

    background-image: ${({ image }) => `url(${image})`};
    background-size: cover;
    background-position: center;
    cursor: ${({ isBlocked }) => (isBlocked ? 'not-allowed' : 'grab')};
    filter: ${({ isBlocked }) => (isBlocked ? 'brightness(0.8)' : 'none')};
    ${({ isBlocked, isSelected }) =>
    isBlocked ? '' : isSelected && 'filter: brightness(0.8) contrast(1.1) sepia(0.7) hue-rotate(10deg) saturate(3);'}
    
`;

const Cell: React.FC<CellProps> = React.memo(
    ({ top, left, zIndex, image, height, width, isBlocked = false, isSelected, onClick, animate, exit, initial }) => {
        return (
            <StyledCell
                top={top}
                left={left}
                zIndex={zIndex}
                height={height}
                width={width}
                image={image}
                isBlocked={isBlocked}
                isSelected={isSelected}
                onClick={isBlocked ? (e) => e.preventDefault() : onClick}
                whileHover={isBlocked ? undefined : { scale: 1.05 }}
                whileTap={isBlocked ? undefined : { scale: 0.95 }}
                whileDrag={isBlocked ? undefined : { scale: 0.95 }}
                drag={isBlocked ? false : true}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                initial={initial}    // Начальное состояние для анимации
                animate={animate}    // Анимации
                exit={exit}          // Анимации при удалении
            />
        );
    }
);

export default Cell;
