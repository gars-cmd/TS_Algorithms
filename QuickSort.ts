/* runing time O(nlogn) */

function partition (arr: number[], lo:number, hi:number): number {
    const pivot = arr[hi];

    let index = lo -1 ;

    for (let i = lo; i < hi; ++i) {
        if (arr[i] <= pivot) {
             index++;
            const tmp = arr[i];
            arr[i] = arr[index];
            arr[index] = tmp;
        }
    }
    index++;
    arr[hi] = arr[index];
    arr[index] = pivot;

    return index;
}


function quick_sort_help(arr: number[], lo: number, hi: number): void {
    if (lo >= hi) {
        return ;
    }

    const pivotIndex = partition(arr, lo, hi);
    quick_sort_help(arr, lo, pivotIndex-1);
    quick_sort_help(arr, pivotIndex+1, hi);
}

export default function quick_sort(arr: number[]) : void {
    quick_sort_help(arr, 0, arr.length-1);
}
