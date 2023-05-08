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

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        switch (true) {
            case arr[i] < pivot:
                left.push(arr[i]);
                break;
            case arr[i] > pivot:
                right.push(arr[i]);
                break;
            default:
        };
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
};