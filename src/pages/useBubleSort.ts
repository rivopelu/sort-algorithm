import { useEffect, useRef, useState } from "react";

export function useBubleSort() {
  const length = 20;

  const [data, setData] = useState<number[]>(() => {
    const initData = Array.from({ length: length }).map((_, i) => i + 1);
    return initData;
  });
  const [isSorting, setIsSorting] = useState(false);
  const sortIntervalRef = useRef<any>(null);

  function randomize() {
    const shuffledData = [...data]; // Create a copy of the data array
    for (let i = shuffledData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
    }
    setData(shuffledData);
  }

  function bubbleSort() {
    setIsSorting(true);
    const array = [...data]; // Create a copy of the data array

    let swapped;
    let currentStep = 0;

    const sortStep = () => {
      swapped = false;
      for (let i = 0; i < array.length - 1 - currentStep; i++) {
        if (array[i] > array[i + 1]) {
          [array[i], array[i + 1]] = [array[i + 1], array[i]];
          swapped = true;

          setData((prevData) => {
            const newData = [...prevData];
            newData[i] = array[i];
            newData[i + 1] = array[i + 1];
            return newData;
          });
        }
      }

      currentStep++;

      if (swapped) {
        sortIntervalRef.current = setTimeout(sortStep, 500); // Adjust delay for desired visualization speed
      } else {
        setIsSorting(false);
        clearTimeout(sortIntervalRef.current);
      }
    };

    sortStep();
  }

  useEffect(() => {
    return () => clearTimeout(sortIntervalRef.current);
  }, []);
  return { data, setData, randomize, bubbleSort, isSorting };
}
