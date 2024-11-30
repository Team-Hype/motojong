export function generate(
  rows: number, cols: number,
  layersCount: number,
  pairsCount: number
): boolean[][][] {
  const mahjongCount = 2 * pairsCount
  if (layersCount == 1)
    return [generateLayer(null, rows, cols, mahjongCount)]

  const mahjongsPerLayer = Math.floor(mahjongCount / layersCount)
  const mahjongsOnGroundLayer = mahjongCount - (layersCount - 1) * mahjongsPerLayer

  let grid: boolean[][][] = Array(layersCount).map(() => Array(rows).map(() => Array(cols).fill(false)))

  grid[0] = generateLayer(null, rows, cols, mahjongsOnGroundLayer)
  for (let i = 1; i < layersCount; i++) {
    grid[i] = generateLayer(grid[i - 1], rows, cols, mahjongsPerLayer)
  }

  return grid
}

function generateLayer(
  previousLayer: boolean[][] | null,
  rows: number, cols: number,
  mahjongsCount: number
): boolean[][] {
  let layer: boolean[][] = Array(rows)
    .fill([])
    .map(() => Array(cols).fill(0))

  let availablePlaces: [number, number][] = Array.from(new Set<[number, number]>(
    previousLayer?.flatMap((row, j) =>
      row.flatMap((mahjong, i) =>
        mahjong ? neighourhoodOf(i, j) : []
      )
    ) ?? fullLayer()
  ))

  for (let count = 0; count < mahjongsCount; count++) {
    if (availablePlaces.length === 0) break

    const randomIndex = Math.floor(Math.random() * availablePlaces.length)
    const [x, y] = availablePlaces[randomIndex]

    layer[x][y] = true

    availablePlaces = availablePlaces.filter(([placeX, placeY]) => {
      for (let [nx, ny] of neighourhoodOf(x, y))
        if (nx == placeX && ny == placeY)
          return false

      return true
    })
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

  function neighourhoodOf(i: number, j: number): [number, number][] {
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
}

