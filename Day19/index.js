
// function packBagpack(scores, weights, capacity) {
    
// let results = posibleCombination(weights);

// let temp = results.filter((element)=>{ let sum=0; let score=0;
//     for(let i=0;i<element.length;i++){
//         sum += element[i];
//         score += scores[findindex(weights,element[i])];
//     }
//     if(sum<=capacity) return element;
// })
// let temp_scores = [0];
//     for(let i=1;i<temp.length;i++){ let score=0;
//         for(let j=0;j<temp[i].length;j++){
//             let index = findindex(weights,temp[i][j]);
//             score += scores[index];
//         }
//         temp_scores.push(score);
//     }
//     let max = Math.max(...temp_scores);
//     let index=findindex(temp_scores,max);
//     console.log(max);
//     return temp[index];
// }

// function findindex(arr,element){ 
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==element) return i;
//     }
// }

// function posibleCombination(arr) { 
//     const result = [[]];
//     for (let num of arr) { 
//       const len = result.length;
//       for (let i = 0; i < len; i++) {
//         const temp = result[i].slice();
//         temp.push(num);
//         result.push(temp);
//       }
//     }
//     return result;
//   }

function packBagpack(scores, weights, capacity) {
    // Initialize variables to store the maximum score and corresponding combination
    let maxScore = 0;
    let maxCombination = [];

    // Recursive function to generate combinations and calculate scores
    function generateCombinations(index, currentScore, currentWeight, combination) {
        // Base case: if the current weight exceeds the capacity, return
        if (currentWeight > capacity) return;

        // Update maxScore and maxCombination if the current score is higher
        if (currentScore > maxScore) {
            maxScore = currentScore;
            maxCombination = [...combination];
        }

        // Recursive case: generate combinations with the next item
        for (let i = index; i < weights.length; i++) {
            generateCombinations(i + 1, currentScore + scores[i], currentWeight + weights[i], [...combination, i]);
        }
    }

    // Start generating combinations from index 0 with initial score and weight of 0
    generateCombinations(0, 0, 0, []);

    // Map indices in maxCombination to corresponding items and return the result
    return maxCombination.map(index => ({
        score: scores[index],
        weight: weights[index]
    }));
}

console.log(packBagpack([15, 8, 10, 9, 5], [1, 3, 5, 3, 4], 8));



