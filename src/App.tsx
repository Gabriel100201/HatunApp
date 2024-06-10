import { Header } from "./components/layout/Header"
import { Input } from "@nextui-org/input";
import searchIcon from './assets/search-icon.png'
import HatunLogo from "./assets/HatunLogo.svg";
import { Banner } from "./components/home/Banner";

function App() {

  return (
    <>
      <section className="flex flex-col justify-center px-2 py-3 gap-7">
        <Header name="Emprendedor" urlImage="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" logoApp={HatunLogo} />
        <Input type="text" label="Buscar" placeholder="Ej: Ruta de la Cerveza..." endContent={<img className="w-9" src={searchIcon} />} />
        <Banner />
      </section>
    </>
  )
}

export default App
