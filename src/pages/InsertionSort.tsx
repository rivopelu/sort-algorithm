import { Button } from "@nextui-org/react";
import MainContainer from "../components/MainContainer";
import { useInsertionSort } from "./useInsertionSort";

export default function InsertionSort() {
  const page = useInsertionSort();
  return (
    <div className=" h-full">
      <MainContainer>
        <div className=" grid gap-6 h-full">
          <div className="grid lg:grid-cols-2 gap-6 h-full  ">
            <div className="flex flex-col gap-5">
              <h1 className="text-5xl tracking-widest uppercase font-semibold">
                Insertion Sort
              </h1>
              <article>
                <h1 className="text-3xl font-bold mb-4">
                  Algoritma Bubble Sort
                </h1>

                <p className="text-lg mb-8">
                  Bubble sort adalah algoritma pengurutan sederhana yang bekerja
                  dengan membandingkan dua elemen berdekatan dalam sebuah
                  daftar. Jika elemen pertama lebih besar dari elemen kedua
                  (untuk pengurutan ascending), maka keduanya ditukar. Proses
                  ini diulang terus menerus hingga seluruh daftar terurut.
                </p>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">
                    Contoh Kode (Python)
                  </h2>
                  <pre className="bg-gray-200 p-4 rounded-lg">
                    {`
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1] :
                arr[j], arr[j+1] = arr[j+1], arr[j]
`}
                  </pre>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">
                    Penjelasan Lebih Lanjut
                  </h2>
                  <ul>
                    <li>
                      <b>Sederhana:**</b> Mudah dipahami dan diimplementasikan.
                    </li>
                    <li>
                      <b>Tidak efisien:**</b> Lambat untuk data yang besar.
                    </li>
                    <li>
                      <b>Stabil:**</b> Tidak mengubah urutan elemen yang sama.
                    </li>
                  </ul>
                </div>
              </article>
            </div>
            <div className="h-full    flex flex-col gap-3 ">
              <div className="flex  h-full border bg-slate-100 p-3 rounded-md items-end gap-1">
                {page.data.map((item, i) => (
                  <div
                    style={{ height: item * 5 + "%" }}
                    key={i}
                    className={`w-full flex-1 rounded-t-full duration-200 flex items-end justify-center text-white font-semibold ${
                      item % 2 == 0 ? "bg-red-600" : "bg-blue-600"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <Button fullWidth onClick={page.randomize}>
                  RANDOMIZE
                </Button>
                <Button fullWidth onClick={page.insertionSort}>
                  SORT
                </Button>
              </div>
            </div>
          </div>
        </div>
      </MainContainer>
    </div>
  );
}
