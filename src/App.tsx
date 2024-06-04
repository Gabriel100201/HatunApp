import { Header } from "./components/layout/Header"
import {Input} from "@nextui-org/input";
import searchIcon from './assets/search-icon.png'

function App() {

  return (
    <>
      <section className="flex flex-col justify-center">
        <Header name="Gabriel" urlImage="https://pc.net/img/terms/avatar.svg" logoApp="https://"/>
        <section className="">
          <Input type="text" label="Buscar" placeholder="Ej: Ruta de la Cerveza..."
            endContent={
              <img className="w-9" src={searchIcon}/>
          }/>
        </section>
        <span className="text-white text-center">
        SECTION
        </span>
      </section>      
    </>
  )
}

export default App
