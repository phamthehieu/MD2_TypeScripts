class SelectionSort {
    static list: number[] = [1, 9, 4.5, 6.6, 5.7, -4.5]

    public static selectionSort(list: number[]): void {
        for (let i = 0; i < list.length - 1; i++) {
            let currenMin: number = list[i];
            let currenMinIndex: number = i;

            for (let j = i + 1; j < list.length; j++) {
                if (currenMin > list[j]) {
                    currenMin = list[j]
                    currenMinIndex = j
                }
            }

            if (currenMinIndex != i) {
                list[currenMinIndex] = list[i];
                list[i] = currenMin;
            }
        }
    }
}

SelectionSort.selectionSort(SelectionSort.list)
for (let i = 0; i < SelectionSort.list.length; i++) {
    console.log(SelectionSort.list[i] + '')
}
