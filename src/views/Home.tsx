import searchIcon from "../assets/search-icon.png";
import { Input } from "@nextui-org/react";
import { Banner } from "../components/home/Banner";
import { FastAccess } from "../components/home/FastAccess";
import { Promos } from "../components/home/Promos";

export const Home = () => {
  return (
    <body className="flex flex-col py-5 gap-5 p-7 pb-20">
      <Input
        type="text"
        label="Buscar"
        placeholder="Ej: Ruta de la Cerveza..."
        endContent={<img className="w-9" src={searchIcon} />}
      />
      <Banner />
      <FastAccess />
      <Promos />
    </body>
  );
};
