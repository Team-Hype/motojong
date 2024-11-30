    import { useState } from "react";
    import styled from "styled-components";
    import MultiLayerGrid from "./MultiLayeredGrid";
    import { Level } from "./game/Level";
    import Header from "./Header";
    import { GeneratedLevel } from "./game/levels/GeneratedLevel";
    import { BMWSample } from "./game/mahjongs/BMWSample";
    import { ToyotaSample } from "./game/mahjongs/ToyotaSample";
    import { AtomSample } from "./game/mahjongs/AtomSample";
    const GameStyled = styled.div`
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center; /* Center horizontally */
        align-items: center;     /* Center vertically */
        gap: 10px;
        height: 100vh;           /* Full screen height */
        width: 100vw;            /* Full screen width */
        background-color: #41454C;
    `;

    const GameField = () => {
        const screenHeight = window.innerHeight;
        const screenWidth = window.innerWidth;
        const [level, setLevel] = useState<Level>(new GeneratedLevel(
            BMWSample.concat(AtomSample).concat(ToyotaSample),
            18,8,16,3
        ));
        const [points, setPoints] = useState(0);

        const randomFact = level.facts?.length > 0
            ? level.facts[Math.floor(Math.random() * level.facts.length)]
            : "";


        return (
            <GameStyled>
                <Header
                    points={points}
                    picture={level.picture}
                    text={randomFact}
                    maxCells={level.cells}
                    width={(screenWidth * 3) / 4}
                    onReshuffle={() => {
                        const reshuffledLevel = new Level(
                            level.id,
                            level.difficulty,
                            level.board,
                            level.background,
                            level.picture,
                            level.facts,
                            level.cells
                        );
                        reshuffledLevel.reshuffle();
                        setLevel(reshuffledLevel);
                    }}
                />
                <MultiLayerGrid
                    given_level={level}
                    width={(screenWidth * 3) / 4}
                    height={(screenHeight * 3) / 4}
                    addPoint={() => setPoints(points + 1)}
                />
            </GameStyled>
        );
    };

    export default GameField;
