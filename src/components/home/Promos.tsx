import { CardPromo } from "./Card"

export const Promos = () => {
  return (
    <section className="mt-5">
      <span className="text-gray-600 text-lg font-semibold">Promociones del día</span>
      <div className="grid grid-cols-2 gap-5 mt-5">
        <CardPromo name="Ancestral" timeTo="20 min" url="https://i.pinimg.com/736x/5e/7b/b3/5e7bb3187f4b3885a176a4e87044559f.jpg" localType="Cervecería" />
        <CardPromo name="Ancestral" timeTo="20 min" url="https://i.pinimg.com/736x/5e/7b/b3/5e7bb3187f4b3885a176a4e87044559f.jpg" localType="Cervecería" />
        <CardPromo name="Ancestral" timeTo="20 min" url="https://i.pinimg.com/736x/5e/7b/b3/5e7bb3187f4b3885a176a4e87044559f.jpg" localType="Cervecería" />
        <CardPromo name="Ancestral" timeTo="20 min" url="https://i.pinimg.com/736x/5e/7b/b3/5e7bb3187f4b3885a176a4e87044559f.jpg" localType="Cervecería" />
      </div>
    </section>
  )
}