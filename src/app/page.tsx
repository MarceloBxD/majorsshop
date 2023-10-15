import { Header } from "@/components/Header";
import { homeFilterList } from "@/data/homeFilterList";
export default function Home() {
  return (
    <main className="flex gap-10 flex-col min-h-screen p-8">
      <Header />
      <h1 className="font-bold">Aventure-se em nossos produtos M4JORS</h1>
      <div className="flex gap-4">
        {homeFilterList.map((item) => (
          <div
            className="shadow-md cursor-pointer p-2 rounded-xl"
            key={item.id}
          >
            <p className="text-xs">{item.label}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
