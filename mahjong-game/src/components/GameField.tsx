import React, { useState } from "react";
import styled from "styled-components";
import MultiLayerGrid from "./MultiLayeredGrid";
import { BMWLevel } from "./game/levels/BmwLevel";
import {Level} from "./game/Level";
import Header from "./Header";

const GameStyled = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;  /* Center horizontally */
    align-items: center;      /* Center vertically */
    gap: 10px;
    height: 100vh;            /* Full screen height */
    width: 100vw;             /* Full screen width */
    background-color: #41454C;
`;


const GameField = () => {
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;
    const [level, setLevel] = useState<Level>(new BMWLevel());
    const [points, setPoints] = useState(0);

    return (
        <GameStyled>
            <Header points={points} picture={level.} text={"asdasd"} maxCells={level.cells} width={screenWidth * 3/4} />
            <MultiLayerGrid given_level={level} width={screenWidth * 3/4} height={screenHeight * 3/4} addPoint={() => setPoints(points + 1)} />
        </GameStyled>
    );
};

export default GameField;
