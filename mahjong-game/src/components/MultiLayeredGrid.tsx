import React, {useEffect, useState, useMemo, useCallback} from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Level} from './game/Level';
import Cell from './Cell';

const LayerContainer = styled(motion.div)`
    position: absolute;
    height: 100vh;
    width: 100vw;

    background-color: #41454C;
`;

type MultiLayerGridProps = {
    given_level: Level;
};

const MultiLayerGrid: React.FC<MultiLayerGridProps> = ({given_level}) => {
    const [level, setLevel] = useState<Level | null>(null);
    const [selectedCell, setSelectedCell] = useState<{ x: number; y: number; z: number } | null>(null);
    const [heightCell, setHeightCell] = useState(0);
    const [widthCell, setWidthCell] = useState(0);

    useEffect(() => {
        setLevel(given_level);
    }, [given_level]);

    useEffect(() => {
        if (level !== null) {
            const screenHeight = window.innerHeight;
            const screenWidth = window.innerWidth;
            const ratio = 3 / 2;
            const computedHeightCell = Math.min(
                screenHeight / (level.size.y + 1),
                (screenWidth / (level.size.x + 1)) * ratio
            );
            const computedWidthCell = Math.min(
                screenWidth / (level.size.x + 1),
                (screenHeight / (level.size.y + 1)) * (1 / ratio)
            );
            setHeightCell(computedHeightCell);
            setWidthCell(computedWidthCell);
        }
    }, [level]);

    const handleCellClick = useCallback(
        (col: number, row: number, layerIndex: number) => {
            console.log("handled: " + col, row, layerIndex);
            console.log("selected: " + selectedCell?.x, selectedCell?.y, selectedCell?.z);
            if (selectedCell && selectedCell?.x === col && selectedCell?.y === row && selectedCell?.z === layerIndex) {
                setSelectedCell(null);
            } else {
                setSelectedCell({x: col, y: row, z: layerIndex});
            }
        }, []);

    const renderCells = useMemo(() => {
        return level?.board.map((layer, layerIndex) =>
            layer.map((mahjongsRow, row) =>
                mahjongsRow.map((mahjong, col) => (
                    mahjong !== null ?
                        <Cell
                            key={`${layerIndex}-${row}-${col}`}
                            top={row * (heightCell)}
                            left={col * (widthCell)}
                            zIndex={layerIndex + 10}
                            height={heightCell}
                            width={widthCell}
                            image={mahjong?.image || ''}
                            isBlocked={false}
                            isSelected={selectedCell?.x === col && selectedCell?.y === row && selectedCell?.z === layerIndex}
                            onClick={() => handleCellClick(col, row, layerIndex)}
                        />
                        :
                        null
                ))
            )
        );
    }, [level, heightCell, widthCell, selectedCell]);

    if (!level) {
        return null;
    }

    return <LayerContainer>{renderCells}</LayerContainer>;
};

export default MultiLayerGrid;
