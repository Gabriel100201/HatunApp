import { FaLocationPin } from "react-icons/fa6";

export const Place = () => {
  const elements = document.querySelectorAll("[data-menu]");
  for (let i = 0; i < elements.length; i++) {
    const main = elements[i];
    main.addEventListener("click", function () {
      const element = main.parentElement?.parentElement;
      const andicators = main.querySelectorAll("svg");
      const child = element?.querySelector("#sect");
      child?.classList.toggle("hidden");
      andicators[0].classList.toggle("rotate-180");
    });
  }
  return (
    <div className="md:flex items-start justify-center pt-7 pb-16 2xl:px-20 md:px-6 px-4 text-black">
      <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
        <img
          className="w-full"
          alt="image of a girl posing"
          src="https://vulcanopro.s3.amazonaws.com/images/lar_hW8Uowvg9Gfuuzt8ystihktCsFqBA7KSd4jHhgCP.jpeg"
        />
        <img
          className="mt-6 w-full"
          alt="image of a girl posing"
          src="https://topbeer.mx/wp-content/uploads/2022/08/tipos-de-cerveza-en-beer-flight-1024x683.jpg"
        />
      </div>
      <div className="md:hidden">
        <img
          className="w-full"
          alt="image of a girl posing"
          src="https://vulcanopro.s3.amazonaws.com/images/lar_hW8Uowvg9Gfuuzt8ystihktCsFqBA7KSd4jHhgCP.jpeg"
        />
        <div className="flex items-center justify-between mt-3">
          <img
            alt="image-tag-one"
            className="md:w-48 md:h-48 w-1/4"
            src="https://topbeer.mx/wp-content/uploads/2022/08/tipos-de-cerveza-en-beer-flight-1024x683.jpg"
          />
          <img
            alt="image-tag-one"
            className="md:w-48 md:h-48 w-1/4"
            src="https://topbeer.mx/wp-content/uploads/2022/08/tipos-de-cerveza-en-beer-flight-1024x683.jpg"
          />
          <img
            alt="image-tag-one"
            className="md:w-48 md:h-48 w-1/4"
            src="https://topbeer.mx/wp-content/uploads/2022/08/tipos-de-cerveza-en-beer-flight-1024x683.jpg"
          />
          <img
            alt="image-tag-one"
            className="md:w-48 md:h-48 w-1/4"
            src="https://topbeer.mx/wp-content/uploads/2022/08/tipos-de-cerveza-en-beer-flight-1024x683.jpg"
          />
        </div>
      </div>
      <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
        <div className="border-b border-gray-200 pb-6">
          <p className="text-sm leading-none text-green-700">
            Abierto hoy desde las 19hs!
          </p>
          <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-black mt-2">
            Ancestral Cervecería
          </h1>
        </div>
        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
          <p className="text-base leading-4 text-gray-900">Ubicación</p>
          <div className="flex items-center justify-center">
            <FaLocationPin />
            <svg
              className="cursor-pointer text-gray-300 dark:text-white"
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L5 5L1 9"
                stroke="currentColor"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
          <p className="text-base leading-4 text-gray-900">Horario</p>
          <div className="flex items-center justify-center">
            <p className="text-sm leading-none text-gray-900 mr-3">
              19hs - 02hs
            </p>
            <svg
              className="text-gray-300 dark:text-white cursor-pointer"
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L5 5L1 9"
                stroke="currentColor"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div>
          <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-900 mt-7">
            Descubre la magia de lo artesanal en nuestra cervecería, donde cada
            sorbo cuenta una historia. Elaboramos nuestras cervezas con
            ingredientes selectos y pasión por la calidad, brindándote sabores
            únicos que despertarán tus sentidos. Ven y disfruta de una
            experiencia cervecera inolvidable en un ambiente acogedor y lleno de
            buena vibra. ¡Te esperamos!
          </p>
        </div>
      </div>
    </div>
  );
};
