


const ms = (array, pos, arraySteps, colorSteps) =>{
    let colorKey = colorSteps[colorSteps.length-1].slice(); //get current colourkey arr
    let arr = array.slice();
    let dict = {};
    arr.forEach((numb, index) => dict[numb] = index);
    console.log(dict);

    const mergeSort = (arr) =>{
        if (arr.length === 1){
            colorKey[0] = 2;
            return arr;
        }
        let mid = Math.floor(arr.length/2);

        let leftHalf = arr.slice(0, mid);
        let rightHalf = arr.slice(mid);

        for (let i = 0; i < mid; i++){
            if (colorKey[i] === 0)colorKey[i] = 3;
            else colorKey[i] = 0;
        }
        colorSteps.push(colorKey.slice());
        arraySteps.push(leftHalf.concat(rightHalf));
        
        leftHalf = mergeSort(leftHalf);

        
        for (let i = mid; i < arr.length; i++){
            if (colorKey[i] === 0)colorKey[i] = 3;
            else colorKey[i] = 0;
        }
        colorSteps.push(colorKey.slice());
        arraySteps.push(leftHalf.concat(rightHalf));

        rightHalf = mergeSort(rightHalf);

        return merge(leftHalf, rightHalf);

    }

    const merge = (a, b) => {
        let mergedArray = [];
        let i = 0;
        let ai = 0;
        let bi = 0;
    
        while (ai < a.length && bi < b.length){
            if (a[ai] > b[bi]){
                mergedArray.push(b[bi]);
                bi ++;
            }
            else{
                mergedArray.push(a[ai]);
                ai ++;
            }
            i++;
        }
        // insert remaining elements of whichever arr that is not empty
        while (ai < a.length){
            mergedArray[i] = a[ai];
            ai ++;
            i++;
        }
    
        while (bi < b.length){
            mergedArray[i] = b[bi];
            bi ++;
            i++;
        }
        for (let i = 0; i< mergedArray.length; i ++){
            colorKey[i] = 1;
        }
        colorSteps.push(colorKey.slice());
        arraySteps.push(mergedArray.slice());
        
        return mergedArray;
    }
    //run merge sort
    let sorted = mergeSort(arr);

    //update after sorted
    arraySteps[colorSteps.length-1] = sorted;
    colorSteps[colorSteps.length-1] = new Array(array.length).fill(2);

}
export default ms;



//console.log(mergeSort([1,3,4,642,24]));