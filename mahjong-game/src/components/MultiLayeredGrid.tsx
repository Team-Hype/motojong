import React, { useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence for the animation
import { Level } from './game/Level';
import Cell from './Cell';

const LayerContainer = styled(motion.div)<{ width: number; height: number }>`
    display: flex;
    justify-content: center;  /* Center the content horizontally */
    align-items: center;      /* Center the content vertically */
    position: relative;
    width: ${(props) => props.width}px;  /* Use dynamic width */
    height: ${(props) => props.height}px; /* Use dynamic height */
`;

type MultiLayerGridProps = {
    given_level: Level;
    width: number;
    height: number;
    addPoint: () => void;
};

const MultiLayerGrid: React.FC<MultiLayerGridProps> = ({ given_level, width, height, addPoint }) => {
    const [level, setLevel] = useState<Level | null>(null);
    const [selectedCell, setSelectedCell] = useState<{ x: number; y: number; z: number } | null>(null);
    const [heightCell, setHeightCell] = useState(0);
    const [widthCell, setWidthCell] = useState(0);
    const [gap, setGap] = useState<number>(0);
    const [topOffset, setTopOffset] = useState<number>(0);
    const [leftOffset, setLeftOffset] = useState<number>(0);

    useEffect(() => {
        setLevel(given_level);
    }, [given_level]);

    useEffect(() => {
        if (level !== null) {
            const screenHeight = height;
            const screenWidth = width;
            const ratio = 3 / 2;
            const computedHeightCell = Math.min(
                screenHeight / (level.size.y + 1),
                (screenWidth / (level.size.x + 1)) * ratio
            );
            const computedWidthCell = Math.min(
                screenWidth / (level.size.x + 1),
                (screenHeight / (level.size.y + 1)) * (1 / ratio)
            );
            setGap(computedWidthCell / 10 );
            setLeftOffset( ( screenWidth - (computedWidthCell + gap)* level.size.x ) / 2 );
            setLeftOffset( ( screenWidth - (computedWidthCell + gap)* level.size.x ) / 2 );
            setHeightCell(computedHeightCell);
            setWidthCell(computedWidthCell);
        }
    }, [level, height, width]);

    const handleCellClick = (col: number, row: number, layerIndex: number) => {
        console.log("handled: " + col, row, layerIndex);
        console.log("selected: " + selectedCell?.x, selectedCell?.y, selectedCell?.z);
        if (selectedCell && selectedCell?.x === col && selectedCell?.y === row && selectedCell?.z === layerIndex) {
            setSelectedCell(null);
        } else {
            if (level && selectedCell && level.board[layerIndex][row][col]?.image === level.board[selectedCell.z][selectedCell.y][selectedCell.x]?.image) {

                level.board[layerIndex][row][col] = null;
                level.board[selectedCell.z][selectedCell.y][selectedCell.x] = null;
                console.log('removed');
                addPoint();
            }
            setSelectedCell({x: col, y: row, z: layerIndex});
        }
    };

    const isBlocked = (x: number, y: number, z: number) => {
        if (!level) return false;
        if (level.board[z][y][x] === null) return false;

        // Iterate through the neighboring cells
        for (let nz = z; nz < level.size.layers; nz++) {
            for (let dx = -1; dx <= 1; dx++) {
                for (let dy = -1; dy <= 1; dy++) {
                    if (dx === 0 && dy === 0) continue;
                    const nx = x + dx;
                    const ny = y + dy;
                    if (
                        nx >= 0 && ny >= 0 && nz >= 0 &&
                        nx < level.size.x && ny < level.size.y && // Check bounds
                        level.board[nz][ny][nx] !== null // Cell is occupied
                    ) {
                        return true; // If a neighboring cell is occupied, block the cell
                    }
                }
            }
        }
        return false; // No neighboring cell is occupied, cell is not blocked
    };

    const renderCells = useMemo(() => {
        return level?.board.map((layer, layerIndex) =>
            layer.map((mahjongsRow, row) =>
                mahjongsRow.map((mahjong, col) => (
                    mahjong !== null ? (
                        <Cell
                            key={`${layerIndex}-${row}-${col}`}
                            top={row * (heightCell + gap) + topOffset }
                            left={col * (widthCell + gap) + leftOffset }
                            zIndex={layerIndex + 10}
                            height={heightCell}
                            width={widthCell}
                            image={mahjong?.image || ''}
                            isBlocked={isBlocked(col, row, layerIndex)}
                            isSelected={selectedCell?.x === col && selectedCell?.y === row && selectedCell?.z === layerIndex}
                            onClick={() => handleCellClick(col, row, layerIndex)}
                            initial={{ opacity: 0 }}  // Initial animation state (fade in)
                            animate={{ opacity: 1 }}  // Final state (fully visible)
                            exit={{ opacity: 0, scale: 0.5 }} // Exit animation (fade out and shrink)
                        />
                    ) : null
                ))
            )
        );
    }, [level, heightCell, widthCell, selectedCell]);

    if (!level) {
        return null;
    }

    return (
        <LayerContainer width={width} height={height}>
            <AnimatePresence>
                {renderCells}
            </AnimatePresence>
        </LayerContainer>
    );
};

export default MultiLayerGrid;
