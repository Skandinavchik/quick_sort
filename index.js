const quickSort = (arr) => {
    switch (true) {
        case arr.length <= 1:
            return arr;
        case arr.length === 2:
            if (arr[0] < arr[1]) {
                return arr;
            } else {
                const i = arr[0];
                arr[0] = arr[1];
                arr[1] = i;
                return arr;
            }
        default:
    };

    const pivot = arr[Math.floor(arr.length / 2)];
    const leftArr = [];
    const rightArr = [];

    for (let i = 0; i < arr.length; i++) {
        switch (true) {
            case arr[i] < pivot:
                leftArr.push(arr[i]);
                break;
            case arr[i] > pivot:
                rightArr.push(arr[i]);
                break;
            default:
        };
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};