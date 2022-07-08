import Boundary from "../engine/Boundary"

const map = [
    ['1', '1', '1', '1', '1', '1'],
    ['1', '0', '0', '0', '0', '1'],
    ['1', '0', '0', '0', '0', '1'],
    ['1', '1', '1', '1', '1', '1'],
]
const boundaries: Boundary[] = []

export function initMap() {
    map.forEach((row, i) => {
        row.forEach((symbol, j) => {
            switch (symbol) {
                case '1':
                    boundaries.push(new Boundary({x: Boundary.width * j, y: Boundary.height * i}))
                    break
            }
        })
    })

    boundaries.forEach(item => {
        item.draw()
    })
}