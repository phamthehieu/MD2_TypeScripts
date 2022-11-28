// class BubbleSort {
//     static list: number[] = [2, 3, 2, 5, 6, 1, -2, 3, 14, 12]
//
//     public static bubbleSort(list: number[]): void {
//         let needNestPass: boolean = true;
//
//         for (let k = 1; k < list.length && needNestPass; k++) {
//             needNestPass = false;
//             for (let i = 0; i < list.length - k; i++) {
//                 if (list[i] > list[i + 1]) {
//                     let temp: number = list[i];
//                     list[i] = list[i + 1];
//                     list[i + 1] = temp;
//
//                     needNestPass = true;
//                 }
//             }
//         }
//     }
// }

// BubbleSort.bubbleSort(BubbleSort.list)
// for (let i = 0; i < BubbleSort.list.length; i++) {
//     console.table(BubbleSort.list[i] + '')
// }

class BubbleSortByStep {
    static numbers: number[] = [8, 3, 6, 1, 4, 10, 2, 50]

    public static bubbleSortByStep(list: number[]): void {
        let needNextPass: boolean = true;
        for (let k = 1; k < list.length && needNextPass; k++) {
            needNextPass = false;
            for (let i = 0; i < list.length - k; i++) {
                if (list[i] > list[i + 1]) {
                    console.log(' Swap ' + list[i] + ' with ' + list[i + 1])
                    let temp: number = list[i];
                    list[i] = list[i + 1]
                    list[i + 1] = temp

                    needNextPass = true;
                }
            }
            if (needNextPass === false) {
                console.log("Array may be sorted and next pass not needed");
                break
            }

            console.log(' List after the ' + k + ' sort: ');
            for (let i = 0; i < list.length; i++) {
                console.log(list[i] + '\t');
            }
            console.log();
        }
    }
}

console.log("\nBegin sort processing...");
BubbleSortByStep.bubbleSortByStep(BubbleSortByStep.numbers);