type url = `https://${string}`

interface props {
  name: string
  urlImage: url
  logoApp: url
}

export const Header = ({name, urlImage, logoApp}: props) => {
  
  return(
    <header className="w-full flex justify-between items-center">
      <div className="flex items-center gap-3">
        <img src={urlImage} alt="Avatar" className="w-9 filter"/>
        <span className="font-semibold text-primary">Bienvenido {name}</span>
      </div>
      <div>
        <img src={logoApp} alt="logo App" />
      </div>
    </header>
  )
}