const average = array => array.reduce((a, b) => a + b) / array.length

const prisoners = 100 // Recommended = Powers Of 10
const turns = Math.round(prisoners/2)
const simulation_count = 15000 // Higher = More Accuracy

let chance = []

for (let i = 0; i < simulation_count; i++) {
    let boxes = []
    for (let i = 0; i < prisoners; i++) {
        boxes[i] = i
    }

    boxes = require("lodash").shuffle(boxes)
    chance[i] = 0

    for (let j = 0; j < prisoners; j++) {
        lastval = j
        for (let k = 0; k < turns; k++) {
            lastval = boxes[lastval]

            if(lastval == j){
                chance[i] += 1
                break
            }
        }

        if(lastval != j){
            break
        }
    }

    console.log(`SIMULATION ${i} SURVIVAL: ${chance[i]}`)
}

console.log(average(chance)/prisoners)