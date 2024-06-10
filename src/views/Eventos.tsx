import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";

export const Eventos = () => {
  return (
    <section className="w-full p-7">
      <h1 className="text-3xl text-primary-800 w-full text-center font-bold my-5">
        ¡Eventos Más Destacados!
      </h1>
      <div className="w-full grid grid-cols-2 gap-3">
        <Card className="py-4 cursor-pointer hover:bg-primary-950/10">
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-fill h-full rounded-xl"
              src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F778932559%2F310572723789%2F1%2Foriginal.20240529-195842?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=343%2C0%2C664%2C332&s=784b872c8c4a2f480561ef61a39131ab"
            />
          </CardBody>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold text-primary-950">
              Teatro
            </p>
            <small className="text-default-500">Sabado a las 20hs</small>
            <h4 className="font-bold text-large text-primary-900">
              Raices y Alas, Storytelling
            </h4>
          </CardHeader>
        </Card>
        <Card className="py-4 cursor-pointer hover:bg-primary-950/10">
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-fill h-full rounded-xl"
              src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F778588979%2F309056518127%2F1%2Foriginal.20240529-140359?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C1280%2C640&s=e368efcead90b40e41b7eca99084fa92"
            />
          </CardBody>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold text-primary-950">
              Teatro
            </p>
            <small className="text-default-500">Jueves a las 18hs</small>
            <h4 className="font-bold text-large text-primary-900">
              Viaje al Espacio - Titeres
            </h4>
          </CardHeader>
        </Card>
        <Card className="py-4 cursor-pointer hover:bg-primary-950/10">
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-fill h-full rounded-xl"
              src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F771876719%2F501602535075%2F1%2Foriginal.20240520-130606?w=322&auto=format%2Ccompress&q=75&sharp=10&s=037964ea0ffaa7dcc23284991379e93e"
            />
          </CardBody>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold text-primary-950">
              Cursos y Conferencias
            </p>
            <small className="text-default-500">Martes a las 9hs</small>
            <h4 className="font-bold text-large text-primary-900">
              Jornada de la Residencia de Medicina
            </h4>
          </CardHeader>
        </Card>
        <Card className="py-4 cursor-pointer hover:bg-primary-950/10">
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-fill h-full rounded-xl"
              src="https://buenosaires.gob.ar/sites/default/files/media/image/2014/10/08/8cf382552b377548a98dead1422ce42b2a0ba2f7.jpg"
            />
          </CardBody>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold text-primary-950">
              Ferias
            </p>
            <small className="text-default-500">Sábado a las 18hs</small>
            <h4 className="font-bold text-large text-primary-900">
              Feria Medieval IV: Castillos y espadas
            </h4>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
};
