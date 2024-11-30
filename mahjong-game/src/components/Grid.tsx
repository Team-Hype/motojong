export default class Grid {}
// import React, {useEffect, useState} from 'react';
// import styled from 'styled-components';
// import {motion} from 'framer-motion';
// import GridCell from './GridCell'; // Import the encapsulated GridCell component
// import {Mahjong} from './game/mahjongs/Mahjong';
//
// type GridProps = {
//
//     columns: number;
//     rows: number;
//     gap: number;
//     height: number;
//     width: number;
//     style?: React.CSSProperties;
//     mahjongs: (Mahjong | null)[][];
// };
//
// const StyledGrid = styled(motion.div)<GridProps>`
//     position: relative;
//     bottom: ${({height, gap, rows}) => (rows * (height + gap))}px;
//     right: ${({width, gap, columns}) => columns * (width + gap)}px;
// `;
//
//
//
// const Grid: React.FC<GridProps> = ({top, columns, rows, gap, height, width, style, mahjongs}) => {
//
//     const [isBlocked, setIsBlocked] = useState<boolean>(false);
//     const [selectedCells, setSelectedCells] = useState<{ [key: number]: boolean }>({});
//
//
//     useEffect(() => {
//
//     }, []);
//
//     const onCellClick = (index: number) => {
//         const currentlySelectedCells = Object.keys(selectedCells).filter((key) => selectedCells[+key]);
//         if (currentlySelectedCells.length === 1) {
//             const cell1Index = +currentlySelectedCells[0];
//             const cell2Index = +index;
//             if (cell1Index === cell2Index) {
//                 setSelectedCells({});
//                 return;
//             }
//             const cell1 = mahjongs[Math.floor(cell1Index / columns)][cell1Index % columns];
//             const cell2 = mahjongs[Math.floor(cell2Index / columns)][cell2Index % columns];
//             if (cell1?.image === cell2?.image) {
//                 console.log('Match found:', cell1, cell2);
//                 mahjongs[Math.floor(cell1Index / columns)][cell1Index % columns] = null;
//                 mahjongs[Math.floor(cell2Index / columns)][cell2Index % columns] = null;
//
//             }
//             setSelectedCells({});
//
//         } else {
//             setSelectedCells((prevSelectedCells) => ({
//                 ...prevSelectedCells,
//                 [index]: !prevSelectedCells[index],
//             }));
//         }
//     };
//
//     return (
//         <StyledGrid columns={columns} rows={rows} gap={gap}
//                     height={height / 2} width={width / 2}
//                     style={style} mahjongs={mahjongs}>
//             {mahjongs.map((mahjongs_row, row) => (
//                 mahjongs_row.map((mahjong, col) => (
//
//                 ))
//             ))
//             }
//         </StyledGrid>
//     )
//         ;
// };
//
// export default Grid;
//
