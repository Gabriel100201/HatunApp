import { Button } from "../global/Button"
import { GiMountainRoad } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdLocalHotel } from "react-icons/md";
import { LuPartyPopper } from "react-icons/lu";

export const FastAccess = () => {
  return (
    <section className="flex-col flex gap-5">
      <div>
        <span className="text-gray-600 text-lg font-semibold">Categorias</span>
      </div>
      <div className="w-full grid grid-cols-2 gap-3">
        <Button url="rutas" icon={<GiMountainRoad />}>
          Rutas Del Día
        </Button>
        <Button url="rutas" icon={<MdLocalHotel />}>
          Hoteles
        </Button>
        <Button url="rutas" icon={<IoFastFoodOutline />}>
          Comida
        </Button>
        <Button url="rutas" icon={<LuPartyPopper />}>
          Eventos
        </Button>
      </div>
    </section>
  );
}