import React from "react";
import styled from "styled-components";
const HeaderStyled = styled.div<{ width: number }>`
    position: relative;
    height: 18%;
    background: aliceblue;
    width: ${({ width }) => width}px;
    border-radius: 20px;
    border: 3px black dashed;
    display: flex;
    flex-direction: column; /* Размещаем элементы по колонке */
    align-items: center;
    padding: 10px;
    color: black;
    font-size: 30px;
    gap: 10px; /* Отступы между элементами */
`;

const HeaderTopRow = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between; /* Разделяем элементы */
    align-items: center;
`;

const HeaderBottomRow = styled.div`
    display: flex;
    flex-direction: row; /* Элементы остаются в одной строке */
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const ProgressBar = styled.div`
    position: relative;
    width: 30%;
    height: 70px;
    border: 5px solid black;
    background-color: #eee;
    border-radius: 10px;
    overflow: hidden;
`;

const Progress = styled.div<{ width: number }>`
    height: 100%;
    background-color: #4caf50;
    width: ${({ width }) => Math.max(width, 1)}%;
    border-radius: 0px 10px 10px 0px;
    color: black;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
`;

const Picture = styled.img`
    height: 100%;
    max-height: 80px;
    object-fit: contain;
`;

const ReshuffleButton = styled.button`
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        background-color: #45a049;
    }
`;

type HeaderProps = {
    points: number;
    maxCells: number;
    picture: string;
    width: number;
    text: string;
    onReshuffle: () => void; // Callback function to reshuffle
};

const Header: React.FC<HeaderProps> = ({ points, maxCells, picture, width, text, onReshuffle }) => {
    const progressWidth = (points * 2 / maxCells) * 100;

    return (
        <HeaderStyled width={width}>
            <HeaderTopRow>
                <Picture src={picture} alt="Level Image" />
                <ReshuffleButton onClick={onReshuffle}>Перемешать</ReshuffleButton>
            </HeaderTopRow>
            <HeaderBottomRow>
                <span>{text}</span> {/* Перенос текста на новую строку */}
                <ProgressBar>
                    <Progress width={progressWidth}>
                        {points}
                    </Progress>
                </ProgressBar>
            </HeaderBottomRow>
        </HeaderStyled>
    );
};

export default Header;
