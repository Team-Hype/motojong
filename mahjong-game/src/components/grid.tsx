import React from 'react'
import styled, { css } from 'styled-components'

type GridProps = {
  columns: number
  rows: number
  gap: number
  height: number
  width: number
}

const StyledGrid = styled.div<GridProps>`
  display: grid;
  ${({ columns, rows, gap, height, width }) => css`
    grid-template-columns: repeat(${columns}, ${width}px);
    grid-template-rows: repeat(${rows}, ${height}px);
    grid-gap: ${gap}px;
    justify-content: center;
    align-content: center;
    background-color: #282c34;
    height: 100vh;
  `}
`

const Grid = ({ columns, rows, gap}: GridProps) => {
  return (
    <StyledGrid columns={columns} rows={rows} gap={gap} height={150} width={100}>
      {[...Array(columns * rows)].map((_, index) => (
        <div key={index} className="grid-cell" style={{ backgroundColor: 'white' }}></div>
      ))}
    </StyledGrid>
  )
}

export default Grid

