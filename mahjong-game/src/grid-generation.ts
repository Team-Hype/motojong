function generate(
  rows: number, cols: number,
  layersCount: number,
  pairsCount: number
): number[][][] {
  const pairsPerLayer = Math.floor(pairsCount / layersCount)
  const pairsOnGroundLayer = pairsCount - layersCount * pairsPerLayer

  let grid: number[][][] = Array(layersCount).map(() => Array(rows).map(() => Array(cols).fill(0)))

  grid[0] = generateLayer(null, rows, cols, pairsOnGroundLayer)
  for (let i = 1; i < layersCount; i++) {
    grid[i] = generateLayer(grid[i - 1], rows, cols, pairsPerLayer)
  }

  return grid
}

function generateLayer(
  previousLayer: number[][] | null,
  rows: number, cols: number,
  pairsCount: number
): number[][] {
  let layer: number[][] = Array(rows).map(() => Array(cols).fill(0))

  let availablePlaces: [number, number][] = Array.from(new Set<[number, number]>(
    previousLayer?.flatMap((row, j) =>
      row.flatMap((mahjong, i) =>
        mahjong > 0 ? neighourhoodOf(i, j, rows, cols) : []
      )
    ) ?? fullLayer()
  ))

  for (let count = 0; count < pairsCount; count++) {
    if (availablePlaces.length === 0) break

    const randomIndex = Math.floor(Math.random() * availablePlaces.length)
    const [x, y] = availablePlaces[randomIndex]

    layer[x][y] = 1

    availablePlaces = availablePlaces.filter((place) =>
      !neighourhoodOf(x, y, rows, cols).includes(place)
    )
  }

  return layer

  function fullLayer() {
    const fullLayer: [number, number][] = Array(rows * cols)
    for (let i = 0; i < rows; i++)
    for (let j = 0; j < cols; j++) {
      fullLayer[i * cols + j] = [i, j]
    }
    return fullLayer
  }
}

function neighourhoodOf(i: number, j: number, rows: number, cols: number): [number, number][] {
  const neighbors: [number, number][] = [];

  for (let di = -1; di <= 1; di++)
  for (let dj = -1; dj <= 1; dj++) {
    const ni = i + di;
    const nj = j + dj;

    if (0 <= ni && ni < rows && 0 <= nj && nj < cols) {
      neighbors.push([ni, nj]);
    }
  }

  return neighbors;
}

export { generate }
