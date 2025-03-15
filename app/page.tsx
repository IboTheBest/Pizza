import CategoriesCos from "@/modules/CategoriesCos";
import Header from "@/modules/Header";
import Pizzas from "@/modules/Pizzas";

export default function Home() {

  return (
    <div className="bg-white rounded-[10px] overflow-hidden">
      <Header />
      <CategoriesCos/>
      <Pizzas/>
    </div>
  )
}

