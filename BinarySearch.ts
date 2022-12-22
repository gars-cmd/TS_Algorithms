

export default function binarySearch(stack:number[] , toFind: number) : boolean {
    let low = 0;
    let high = stack.length;

    do {
        const middle = Math.floor(low + (high - low) /2);
        const v = stack[middle];

        if (v === toFind) {
            return true;
        } else if (v > toFind){
            high = middle;
        } else {
            low = middle + 1;
        }
        
    } while (low < high);

    return false;
 
}


/* complexity : log_2(n) */
