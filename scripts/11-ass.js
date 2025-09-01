  /*
      const num = [10, 20, 30];
      num[2] = 99;
      console.log(num);*/ //11a

      //11b

      /* function getLastValue(array) {
        const lastIndex = array.length - 1;
        return array[lastIndex];
      }
      console.log(getLastValue([1, 20, 22, 24, 5]));
      console.log(getLastValue(["hi", "hello", "hey"])); */

      //11c
      function arraySwap(array) {
        const lastIndex = array.length - 1;

        const lastValue = array[lastIndex];
        const firstValue = array[0];

        array[0] = lastValue;
        array[lastIndex] = firstValue;

        return array;
      }
      console.log(arraySwap([1, 20, 22, 24, 5]));
      console.log(arraySwap(["hi", "hello", "hey"]));

      //11d

      // for (let i = 0; i < 10; i += 2) {
      //   console.log(i);
      // }

      //11e
      // for (let i = 5; i >= 0; i--) {
      //   console.log(i);
      // }

      //11f
      // let i = 0;

      // while (i < 10) {
      //   i += 2;
      //   console.log(i);
      // }

      // let ii = 6;
      // while (ii >= 1) {
      //   ii--;
      //   console.log(ii);
      // }

      //11g
      // const array = [1, 2, 3];
      // const result = [];

      // for (i = 0; i <= array.length; i++) {
      //   result.push(array[i] + 1);
      // }
      // console.log(result);

      //11h

      /*   function addOne(array) {
        const add = [];

        for (i = 0; i <= array.length; i++) {
          add.push(array[i] + 1);
        }
        return add;
      }
      console.log(addOne([1, 2, 3]));
      console.log(addOne([-2, -1, 0, 99])); */

      //11i
      /*  function addNum(array, num) {
        const add = [];

        for (i = 0; i <= array.length; i++) {
          add.push(array[i] + num);
        }
        return add;
      }
      console.log(addNum([1, 2, 3], 2));
      console.log(addNum([1, 2, 3], 3));
      console.log(addNum([-2, -1, 0, 99], 2)); */

      //11j
      /* function addArrays(array1, array2) {
        const add = [];

        for (i = 0; i <= array1.length; i++) {
          add.push(array1[i] + array2[i]);
        }
        return add;
      }
      console.log(addArrays([1, 1, 2], [1, 1, 3]));
      console.log(addArrays([1, 2, 3], [4, 5, 6])); */

      //11k
      /*  function countPositive(nums) {
        let count = 0;

        for (i = 0; i < nums.length; i++) {
          if (nums[i] > 0) {
            count++;
          }
        }
        return count;
      }
      console.log(countPositive([1, -3, 5]));
      console.log(countPositive([-2, 3, -5, 7, 10])); */

      //11l/m
      /*   function minMax(nums) {
        const result = {
          min: nums[0],
          max: nums[0],
        };

        for (let i = 0; i < nums.length; i++) {
          const value = nums[i];

          if (value === null || value > result.min) {
            result.min = value;
          }

          if (value === null || value > result.max) {
            result.max = value;
          }
        }
        return result;
      }

      console.log(minMax([1, -3, 5]));
      console.log(minMax([-2, 3, -5, 7, 10]));

      console.log(minMax([]));
      console.log(minMax([3])); */

      //11n
      /*function countWords(words) {
        const result = {};

        for (let i = 0; i < words.length; i++) {
          const word = words[i];

          if (!result[word]) {
            result[word] = 1;
          } else {
            result[word]++;
          }
        }
        return result;
      }

      console.log(countWords(["apple", "grape", "apple", "apple"]));*/

      //110
      /* let words = ["hello", "world", "search", "good"];

      let index = -1;

      for (let i = 0; i < words.length; i++) {
        if (words[i] === "search") {
          index = i;

          break;
        }
      }
      console.log(index);

      words = ["not", "found"];
      index = -1;

      for (let i = 0; i < words.length; i++) {
        if (words[i] === "search") {
          index = 1;

          break;
        }
      }
      console.log(index);*/

      function findIndex(array, word) {
        let index = -1;
        for (let i = 0; i < array.length; i++) {
          if (array[i] === word) {
            return i;
          }
        }
        return index;
      }
      console.log(findIndex(["green", "red", "blue", "red"], "red"));
      console.log(findIndex(["green", "red", "blue", "red"], "yellow"));