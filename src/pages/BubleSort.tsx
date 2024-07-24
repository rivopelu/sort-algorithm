import { Button } from "@nextui-org/react";
import MainContainer from "../components/MainContainer";
import { useBubleSort } from "./useBubleSort";

export default function BubleSort() {
  const page = useBubleSort();
  return (
    <div className=" h-full">
      <MainContainer>
        <div className=" grid gap-6 h-full">
          <div className="grid lg:grid-cols-2 gap-6 h-full  ">
            <div className="flex flex-col gap-5">
              <article className="bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-bold mb-4">Bubble Sort</h1>
                <p className="mb-4">
                  Bubble sort adalah salah satu algoritma pengurutan yang paling
                  sederhana. Algoritma ini bekerja dengan cara berulang kali
                  membandingkan dan menukar elemen yang berdekatan jika berada
                  dalam urutan yang salah.
                </p>

                <h2 className="text-xl font-semibold mb-2">
                  Cara Kerja Bubble Sort
                </h2>
                <ol className="list-decimal list-inside mb-4">
                  <li>
                    <strong>Bandingkan Elemen Berdekatan:</strong> Mulai dari
                    elemen pertama, bandingkan elemen ini dengan elemen
                    berikutnya.
                  </li>
                  <li>
                    <strong>Tukar Jika Diperlukan:</strong> Jika elemen pertama
                    lebih besar dari elemen berikutnya, tukar posisi mereka.
                  </li>
                  <li>
                    <strong>Lanjutkan Ke Pasangan Berikutnya:</strong> Pindah ke
                    pasangan elemen berikutnya dan ulangi langkah 1 dan 2.
                  </li>
                  <li>
                    <strong>Ulangi Proses:</strong> Ulangi langkah-langkah di
                    atas untuk seluruh daftar. Setiap kali satu elemen terbesar
                    "mengapung" ke posisi akhir yang benar.
                  </li>
                  <li>
                    <strong>Pengulangan:</strong> Lanjutkan proses ini sampai
                    tidak ada lagi elemen yang perlu ditukar.
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
                    Bandingkan elemen pertama (5) dengan elemen kedua (2)
                    <ul className="list-disc list-inside ml-4">
                      <li>Karena 5 lebih besar dari 2, tukar posisi mereka.</li>
                      <li>
                        Daftar sekarang menjadi:{" "}
                        <code className="bg-gray-200 p-1 rounded">
                          [2, 5, 4, 6, 1, 3]
                        </code>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Bandingkan elemen kedua (5) dengan elemen ketiga (4)
                    <ul className="list-disc list-inside ml-4">
                      <li>Karena 5 lebih besar dari 4, tukar posisi mereka.</li>
                      <li>
                        Daftar sekarang menjadi:{" "}
                        <code className="bg-gray-200 p-1 rounded">
                          [2, 4, 5, 6, 1, 3]
                        </code>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Lanjutkan membandingkan dan menukar elemen berdekatan:
                    <ul className="list-disc list-inside ml-4">
                      <li>Bandingkan 5 dengan 6, tidak ada perubahan.</li>
                      <li>Bandingkan 6 dengan 1, tukar posisi mereka.</li>
                      <li>
                        Daftar sekarang menjadi:{" "}
                        <code className="bg-gray-200 p-1 rounded">
                          [2, 4, 5, 1, 6, 3]
                        </code>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Bandingkan elemen terakhir (6) dengan elemen sebelumnya (3)
                    <ul className="list-disc list-inside ml-4">
                      <li>Karena 6 lebih besar dari 3, tukar posisi mereka.</li>
                      <li>
                        Daftar sekarang menjadi:{" "}
                        <code className="bg-gray-200 p-1 rounded">
                          [2, 4, 5, 1, 3, 6]
                        </code>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Ulangi proses di atas untuk seluruh daftar hingga terurut
                    sepenuhnya:
                    <ul className="list-disc list-inside ml-4">
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
                <Button fullWidth onClick={page.bubbleSort}>
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
