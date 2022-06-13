import { swap } from "./helpers";

const bs = (array, pos, arraySteps, colorSteps) => {
    let colorKey = colorSteps[colorSteps.length-1].slice(); //get current colourkey array

    for (let i = 0; i<array.length -1; i++){
        for (let j = 0; j<array.length -i -1; j++){
            if (array[j] > array[j+1]){
                array = swap(array, j, j+1);
            }
            arraySteps.push(array.slice());

            //change colours of the bars being compared to red then reset them back to blue
            colorKey[j] = 1;
            colorKey[j+1] = 1;
            colorSteps.push(colorKey.slice());
            colorKey[j] = 0;
            colorKey[j+1] = 0;
        }
        // at each iteration of bs, the lasrgest value is moved to the end and in the correct position (2 = sorted)
        colorKey[arraySteps.length - 1 - i] = 2;
        arraySteps.push(array.slice());
        colorSteps.push(colorKey.slice());
    }
    //all set as green = last step
    colorSteps[colorSteps.length-1] = new Array(array.length).fill(2);
    return;
}

export default bs