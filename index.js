const shuffle = require("shuffle-array")

const prisoners = 100 // Recommended = Powers Of 10
const turns = Math.round(prisoners/2)
const simulation_count = 15000 // Higher = More Accuracy

let chance = 0

for (let i = 0; i < simulation_count; i++) {
    let simulationChance = 0

    let boxes = []
    for (let i = 0; i < prisoners; i++) {
        boxes[i] = i
    }

    boxes = shuffle(boxes, { copy: true })

    for (let j = 0; j < prisoners; j++) {
        lastval = j
        for (let k = 0; k < turns; k++) {
            lastval = boxes[lastval]

            if(lastval == j){
                simulationChance++
                chance++
                break
            }
        }

        if(lastval != j){
            break
        }
    }

    console.log(`SIMULATION ${i} SURVIVAL: ${simulationChance}`)
}

console.log(chance/simulation_count/prisoners)