import React from "react";
import styled from "styled-components";

const HeaderStyled = styled.div<{ width: number }>`
    position: relative;
    height: 20%;
    background: aliceblue;
    width: ${({ width }) => width}px;
    border-radius: 20px;
    border: 3px black dashed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    color: black;
    font-size: 30px;
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

type HeaderProps = {
    points: number;
    maxCells: number;
    picture: string;
    width: number;
    text: string;
};

const Header: React.FC<HeaderProps> = ({ points, maxCells, picture, width, text }) => {
    const progressWidth = (points * 2 / maxCells) * 100;

    return (
        <HeaderStyled width={width}>
            <Picture src={picture} alt="Level Image" />
            {text}
            <ProgressBar>
                <Progress width={progressWidth}>
                    {points}
                </Progress>
            </ProgressBar>
        </HeaderStyled>
    );
};

export default Header;
