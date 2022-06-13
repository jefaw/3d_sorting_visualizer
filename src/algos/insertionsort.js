const insertionSort = (array, pos, arraySteps, colorSteps) => {
    let colorKey = colorSteps[colorSteps.length-1].slice(); 

    let i, j, key;
    for (i=1; i<array.length;i++){
        key = array[i];
        j = i - 1;

        while (j >= 0 && array[j] > key){ 
            array[j+1] = array[j]; //shift sorted values right to find where to insert
            //update 
            arraySteps.push(array.slice());
            
            //color change conditions
            if (i === j+1){ //if on the first while iteration, make the bar at index i orange
                colorKey[j+1] = 3;
            }
            else{ //else make red to visually show comparison
                colorKey[j+1] = 1;
            }
            colorKey[j] = 1; //make j red as well
            colorSteps.push(colorKey.slice());

            //reset all colours to blue
            colorKey[j+1] = 0;
            colorKey[i] = 0;
            colorKey[j] = 0;

            j--;
        }
        array[j+1] = key;
        arraySteps.push(array.slice());
        colorSteps.push(colorKey.slice());
    }
    //all set as green = last step
    colorSteps[colorSteps.length-1] = new Array(array.length).fill(2);

}

export default insertionSort;