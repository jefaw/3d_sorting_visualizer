import { colors } from "@material-ui/core";
import { swap } from "./helpers"
const selectionsort = (array, pos, arraySteps, colorSteps) => {
    let colorKey = colorSteps[colorSteps.length-1].slice(); //get current colourkey array
    
    let i, j, mindex;
    for (i=0;i<array.length;i++){
        mindex = i;
        for (j=i+1; j<array.length;j++){
            //look for minimum
            if (array[j] < array[mindex]){
                mindex = j;
            }

            //update colours then reset
            colorKey[mindex] = 3;
            colorKey[j] = 1;
            arraySteps.push(array.slice());
            colorSteps.push(colorKey.slice());

            colorKey[mindex] = 0;
            colorKey[j] = 0;

        }
        //swap the min with the current value
        if (mindex !== i) swap(array, mindex, i);
        colorKey[i] = 2; //sorted
        arraySteps.push(array.slice());
        colorSteps.push(colorKey.slice());

    }
    //all set as green = last step
    colorSteps[colorSteps.length-1] = new Array(array.length).fill(2);
}

export default selectionsort;