/*
* Array Methods
* 似乎都不改变原数组
* 默认不改变原数组，若改变会指出
* */

/*
* _.chunk(array, [size=1])
* Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
* 创建一个新数组，该数组的元素为 将array均匀分割成以size为长度的子数组。如果array不能均匀分割，最后的子数组是剩余的元素。
* array:必填，元素组
* size: 选填，默认为1
*
* 返回（Array）：返回新的数组块。
* */
((isLog) => {
    const log = myConsole(isLog);
    log(_.chunk([1, 2, 3, 4], 2)); // => [ [1,2],[3,4] ]
    var arr = [2, 3, 4, 5, 6];
    var arr1 = _.chunk(arr, 3);
    log(arr); // 不变
    log(arr1); // [ [2,3,4],[5,6] ]
    log(_.chunk([[1, 2], [1, 2], [1, 2], [1, 2]], 2)); // => [ [[1,2],[1,2]] , [[1,2],[1,2]] ]
})(false);


/*
* _.compact(array)
* Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
* 创建一个删除了所有falsey值的数组。值false，null， 0，""，undefined，和NaN是falsey。
*
* 返回（Array）：返回新的过滤值数组。
* */
((isLog) => {
    const log = myConsole(isLog);
    log(_.compact([0, 1, false, 2, '', 3])); // => [1,2,3]
})(false);


/*
* _.concat(array, [values])
* Creates a new array concatenating array with any additional arrays and/or values.
* 创建一个由原数组与任何其他 数组 或 值 连接的新数组。
* [values]:值 或 数组，可多个
*
* 返回（Array）：返回新的连续数组。
* */
((isLog) => {
    const log = myConsole(isLog);
    var array = [1];
    var other = _.concat(array, 2, [3], [[4]]);
    log(other);// => [1, 2, 3, [4]]
    log(array);// => [1]
})(false);


/*
* _.difference(array, [values])
* Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.
* 创建一个新数组，其元素为原数组在其他给定数组中不存在的元素。结果值的顺序和引用由第一个数组确定。使用SameValueZero 相等比较。
* 注意：与_.pullAll此方法不同，此方法返回一个新数组。
* [values] （...数组）：要排除的值,必须是数组。
*
* 返回（Array）：返回新的过滤值数组。
* */
((isLog) => {
    const log = myConsole(isLog);
    log(_.difference([1, 2], [2, 3])); // => [1]
    log(_.difference([1, 2, 3], 3)); // => [1,2,3] ×
    log(_.difference([1, 2, 3, 4, 5], [1, 2], [4, 3])); // => [5]
})(false);


/*
* _.differenceBy(array, [values], [iteratee=_.identity])
* This method is like _.difference except that it accepts iteratee which is invoked for each element of array and values to generate the criterion by which they're compared. The order and references of result values are determined by the first array. The iteratee is invoked with one argument:
* 与_.difference类似，只是它接受_.identity做为每个元素调用的内容。结果值的顺序和引用由第一个数组确定。
* 注意：与_.pullAllBy此方法不同，此方法返回一个新数组。
* [iteratee=_.identity] （函数）：每个元素调用的iteratee。
*
* 返回（Array）：返回新的过滤值数组。
* */
((isLog) => {
    const log = myConsole(isLog);
    log(_.differenceBy([1.2, 2.2, 4.1], [2.1, 3.6], [4.2], Math.floor)); // => [1.2]
    log(_.differenceBy([{x: 1}, {x: 2}], [{x: 2}], 'x')); // => [{x:1}]
    log(_.differenceBy([1, 2], [2, 3], x => x + 1)); // => [1]
})(false);


/*
* _.differenceWith(array, [values], [comparator])
* This method is like _.difference except that it accepts comparator which is invoked to compare elements of array to values. The order and references of result values are determined by the first array. The comparator is invoked with two arguments: (arrVal, othVal).
* 与_.difference类似，只是它接受comparator做为每个元素的比较器。结果值的顺序和引用由第一个数组确定。使用两个参数调用比较器：（arrVal，othVal）。
* 注意：与_.pullAllWith此方法不同，此方法返回一个新数组。
* [comparator] （函数）：每个元素调用的比较器。
*
* 返回（Array）：返回新的过滤值数组
* */
((isLog) => {
    const log = myConsole(isLog);
    var objects = [{'x': 1, 'y': 2}, {'x': 2, 'y': 1}];
    log(_.differenceWith(objects, [{'x': 1, 'y': 2}], _.isEqual));// => [{ 'x': 2, 'y': 1 }]
    log(_.differenceWith(objects, [{'x': 1, 'y': 2}], (a, b) => a.x === b.x)); // [{ 'x': 2, 'y': 1 }]
})(false);


/*
* _.drop(array, [n=1])
* Creates a slice of array with n elements dropped from the beginning.
* 创建一个新的数组，删除从0开始长度为n的元素，剩余元素即为新数组的元素。
* n:可以看做长度，默认为1
*
* 返回（Array）：返回新的切割后的array。
* */
((isLog) => {
    const log = myConsole(isLog);
    log(_.drop([1, 2, 3]));// => [2,3]
    log(_.drop([1, 2, 3], 2));// => [3]
    var arr = [1, 2, 3, 4, 5, 6];
    log(_.drop(arr, 3));// => [4,5,6]
    log(_.drop(arr, 2));// => [3,4,5,6]
    log(_.drop(arr, 4));// => [5,6]
    log(_.drop(arr, 0));// => [1,2,3,4,5,6]
    log(arr);// => [1,2,3,4,5,6]
})(false);


/*
* _.dropRight(array, [n=1])
* Creates a slice of array with n elements dropped from the end.
* 与_.drop类似，只是从右边开始，删除长度为n的元素，新数组的元素即为剩余元素。即截取数组从0到 length-n-1 的处元素。
* n:可以看做长度，默认为1
*
* 返回（Array）：返回新的切割后的array。
* */
((isLog) => {
    const log = myConsole(isLog);
    log(_.dropRight([1, 2, 3]));// => [1,2]
    log(_.dropRight([1, 2, 3], 2));// => [1]
})(false);


/*
* _.dropRightWhile(array, [predicate=_.identity])
* Creates a slice of array excluding elements dropped from the end. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).
* 与_.dropRight类似。元素被删除直到predicate返回falsey，不包含该值（该值不被删除）。使用三个参数调用谓词：（value，index，array）。
* [predicate=_.identity] （函数）：每次迭代调用的函数。
*
* 返回（Array）：返回新的切割后的array。
* */
((isLog) => {
    const log = myConsole(isLog);
    var users = [
        {'user': 'barney', 'active': true},
        {'user': 'fred', 'active': false},
        {'user': 'pebbles', 'active': false}
    ];
    log(_.dropRightWhile(users, function (o) {
        return !o.active;
    }));// => objects for ['barney']

    // The `_.matches` iteratee shorthand.
    log(_.dropRightWhile(users, {'user': 'pebbles', 'active': false}));// => objects for ['barney', 'fred']

    // The `_.matchesProperty` iteratee shorthand.
    log(_.dropRightWhile(users, ['active', false]));// => objects for ['barney']

    // The `_.property` iteratee shorthand.
    log(_.dropRightWhile(users, 'active'));// => objects for ['barney', 'fred', 'pebbles']

    log(_.dropRightWhile([1, 3, 4, 5, 6, 7, 6, 7], (val, index, array) => {
        log(val);
        log(index);
        log(array);
        return val != 3;
    }))
})(false);


/*
* _.dropWhile(array, [predicate=_.identity])
* Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).
* 与_.dropRightWhile类似，只是从头（左侧）开始
*
* 返回（Array）：返回新的切割后的array。
* */
((isLog) => {
    const log = myConsole(isLog);
    var users = [
        {'user': 'barney', 'active': false},
        {'user': 'fred', 'active': false},
        {'user': 'pebbles', 'active': true}
    ];

    log( _.dropWhile(users, function (o) {
        return !o.active;
    }) );// => objects for ['pebbles']

    // The `_.matches` iteratee shorthand.
    log( _.dropWhile(users, {'user': 'barney', 'active': false}) );// => objects for ['fred', 'pebbles']

    // The `_.matchesProperty` iteratee shorthand.
    log( _.dropWhile(users, ['active', false]) );// => objects for ['pebbles']

    // The `_.property` iteratee shorthand.
    log( _.dropWhile(users, 'active') );// => objects for ['barney', 'fred', 'pebbles']
})(false);


/*
* _.fill(array, value, [start=0], [end=array.length])
* Fills elements of array with value from start up to, but not including, end.
* 为array填充value元素，从start开始，到end结束，不包括end
*
* 注意：此方法会改变原数组。
*
* start：开始下标，默认为0
* end：结束下标，默认为数组的长度
*
* 返回（Array）：返回数组。
* */
((isLog) => {
    const log = myConsole(isLog);
    var array = [1, 2, 3];
    log( _.fill(array,'a') ); // =>['a','a','a']
    log( array );// =>['a','a','a']
    log( _.fill(Array(3), 2) );// => [2, 2, 2]
    log( _.fill([4, 6, 8, 10], '*', 1, 3) );// => [4, '*', '*', 10]
})(false);


/*
* _.findIndex(array, [predicate=_.identity], [fromIndex=0])
* This method is like _.find except that it returns the index of the first element predicate returns truthy for instead of the element itself.
* 查找 数组中第一个回调（predicate）返回truthy的元素 下标。从fromIndex开始。找不到返回-1
* predicate：每次迭代调用的函数
* fromIndex：开始查找的下标，默认为0
*
* 返回（number）：返回找到的元素的索引，否则-1。
* */
((isLog) => {
    const log = myConsole(isLog);
    var users = [
        { 'user': 'barney',  'active': false },
        { 'user': 'fred',    'active': false },
        { 'user': 'pebbles', 'active': true }
    ];

    log( _.findIndex(users, function(o) { return o.user == 'barney'; }) );// => 0

    // The `_.matches` iteratee shorthand.
    log( _.findIndex(users, { 'user': 'fred', 'active': false }) );// => 1

    // The `_.matchesProperty` iteratee shorthand.
    log( _.findIndex(users, ['active', false]) );// => 0

    log( _.findIndex(users, ['active', false],1) );// => 1
    log( _.findIndex(users, ['active', false],2) );// => -1

    // The `_.property` iteratee shorthand.
    log( _.findIndex(users, 'active') );// => 2
})(false);


/*
* _.findLastIndex(array, [predicate=_.identity], [fromIndex=array.length-1])
* This method is like _.findIndex except that it iterates over elements of collection from right to left.
* 与_.findIndex类似，只是从数组末尾开始。
*
* fromIndex:即数组下标，0则是从数组第一个数开始，从右向左查找
*
* 返回（number）：返回找到的元素的索引，否则-1。
* */
((isLog) => {
    const log = myConsole(isLog);
    var users = [
        { 'user': 'barney',  'active': true },
        { 'user': 'fred',    'active': false },
        { 'user': 'pebbles', 'active': false }
    ];

    log( _.findLastIndex(users, function(o) { return o.user == 'pebbles'; }) );// => 0

    // The `_.matches` iteratee shorthand.
    log( _.findLastIndex(users, { 'user': 'barney', 'active': true }) );// => 1

    // The `_.matchesProperty` iteratee shorthand.
    log( _.findLastIndex(users, ['active', false]) );// => 0

    log( _.findLastIndex(users, ['active', false],0) );// => -1
    log( _.findLastIndex(users, ['active', false],2) );// => 2

    // The `_.property` iteratee shorthand.
    log( _.findLastIndex(users, 'active') );// => 2
})(false);


/*
* _.flatten(array)
* Flattens array a single level deep.
* 展平数组
*
* 返回（Array）：展平后的新数组
* */
((isRun)=>{
    if(!isRun){
        return false;
    }
    console.log( _.flatten([1, [2, [3, [4]], 5]]) ); // => [1, 2, [3, [4]], 5]
})(true);