function transformToObjects(numberArray) {
    // Todo: Add your logic
    // should return an array of objects
    const Objects = [];
    numberArray.map(
        item => {
            Objects.push({val: item});
        });
    console.log(Objects);
}

transformToObjects([1,2,3]);