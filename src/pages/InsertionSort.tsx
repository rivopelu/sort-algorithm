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
              <article className="bg-white border shadow-md rounded-lg p-6">
                <h1 className="text-5xl mb-6 tracking-widest uppercase font-semibold">
                  Insertion Sort
                </h1>
                <p className="mb-4">
                  Insertion sort adalah salah satu algoritma pengurutan yang
                  sederhana dan mudah dipahami. Algoritma ini bekerja dengan
                  cara "menyisipkan" setiap elemen pada posisi yang tepat dalam
                  daftar yang sudah terurut sebagian.
                </p>

                <h2 className="text-xl font-semibold mb-2">
                  Cara Kerja Insertion Sort
                </h2>
                <ol className="list-decimal list-inside mb-4">
                  <li>
                    <strong>Mulai dari Elemen Kedua:</strong> Anggap elemen
                    pertama di dalam daftar sudah terurut. Mulai dengan elemen
                    kedua, karena elemen pertama sudah dianggap terurut.
                  </li>
                  <li>
                    <strong>Bandingkan dan Sisipkan:</strong> Ambil elemen kedua
                    (disebut "kunci"). Bandingkan "kunci" dengan elemen
                    sebelumnya. Jika "kunci" lebih kecil dari elemen sebelumnya,
                    geser elemen sebelumnya ke kanan. Ulangi proses ini sampai
                    menemukan posisi yang tepat untuk "kunci".
                  </li>
                  <li>
                    <strong>Lanjutkan ke Elemen Berikutnya:</strong> Pindah ke
                    elemen berikutnya di daftar dan ulangi langkah kedua. Terus
                    lakukan ini sampai semua elemen dalam daftar sudah terurut.
                  </li>
                </ol>

                <h2 className="text-xl font-semibold mb-2">Contoh Sederhana</h2>
                <p className="mb-4">
                  Misalkan kita punya daftar angka:{" "}
                  <code className="bg-gray-200 p-1 rounded">
                    [5, 2, 4, 6, 1, 3]
                  </code>
                </p>
                <ol className="list-decimal list-inside mb-4">
                  <li>
                    Mulai dari elemen kedua: 2
                    <ul className="list-disc list-inside ml-4">
                      <li>
                        2 lebih kecil dari 5, jadi geser 5 ke kanan dan sisipkan
                        2 di depannya.
                      </li>
                      <li>
                        Daftar sekarang menjadi:{" "}
                        <code className="bg-gray-200 p-1 rounded">
                          [2, 5, 4, 6, 1, 3]
                        </code>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Ambil elemen berikutnya: 4
                    <ul className="list-disc list-inside ml-4">
                      <li>
                        4 lebih kecil dari 5, geser 5 ke kanan dan sisipkan 4 di
                        depannya.
                      </li>
                      <li>
                        Daftar sekarang menjadi:{" "}
                        <code className="bg-gray-200 p-1 rounded">
                          [2, 4, 5, 6, 1, 3]
                        </code>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Lanjutkan ke elemen berikutnya: 6
                    <ul className="list-disc list-inside ml-4">
                      <li>
                        6 sudah di tempat yang benar, tidak ada perubahan.
                      </li>
                      <li>
                        Daftar sekarang menjadi:{" "}
                        <code className="bg-gray-200 p-1 rounded">
                          [2, 4, 5, 6, 1, 3]
                        </code>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Ambil elemen berikutnya: 1
                    <ul className="list-disc list-inside ml-4">
                      <li>
                        1 lebih kecil dari 6, 5, 4, dan 2, jadi geser semuanya
                        ke kanan dan sisipkan 1 di depan.
                      </li>
                      <li>
                        Daftar sekarang menjadi:{" "}
                        <code className="bg-gray-200 p-1 rounded">
                          [1, 2, 4, 5, 6, 3]
                        </code>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Ambil elemen terakhir: 3
                    <ul className="list-disc list-inside ml-4">
                      <li>
                        3 lebih kecil dari 6 dan 5, jadi geser mereka ke kanan
                        dan sisipkan 3 di tempat yang benar.
                      </li>
                      <li>
                        Daftar akhirnya menjadi:{" "}
                        <code className="bg-gray-200 p-1 rounded">
                          [1, 2, 3, 4, 5, 6]
                        </code>
                      </li>
                    </ul>
                  </li>
                </ol>
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
