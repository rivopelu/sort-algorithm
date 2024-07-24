import { useState } from "react";

export function useInsertionSort() {
  const length = 20;

  const [data, setData] = useState<number[]>(() => {
    const initData = Array.from({ length: length }).map((_, i) => i + 1);
    return initData;
  });
  const [isSorting, setIsSorting] = useState(false);

  function randomize() {
    const shuffledData = [...data]; // Create a copy of the data array
    for (let i = shuffledData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
    }
    setData(shuffledData);
  }
  function insertionSort() {
    setIsSorting(true);
    const array = [...data];

    const delay = 500;
    let currentStep = 1;
    let intervalId = 0;

    const sortStep = () => {
      if (currentStep >= array.length) {
        clearInterval(intervalId);
        setIsSorting(false);
        return;
      }

      const key = array[currentStep];
      let j = currentStep - 1;

      while (j >= 0 && array[j] > key) {
        array[j + 1] = array[j];
        j--;
      }

      array[j + 1] = key;
      setData([...array]);

      currentStep++;
    };

    intervalId = setInterval(sortStep, delay);
  }

  return { data, setData, randomize, insertionSort, isSorting };
}
