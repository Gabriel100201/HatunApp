type url = `https://${string}`

interface props {
  name: string;
  urlImage: url;
  logoApp: string;
}

export const Header = ({ name, urlImage, logoApp }: props) => {
  return (
    <header className="w-full flex flex-col gap-3 px-7 pt-3">
      <div className="w-full flex justify-between items-center">
      <div className="flex items-center gap-3">
          <img src={urlImage} alt="Avatar" className="w-9 filter rounded-full" />
          <span className="font-semibold text-primary">Bienvenido {name}!</span>
      </div>
      <div>
          <img src={logoApp} alt="logo App" className="w-16" />
        </div>
      </div>
      <div className="h-[1px] rounded-full w-full bg-black/10" />
    </header>
  );
};