import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

type time = `${string}hs` | `${string}min`
type urlImage = `https://${string}`

interface props {
  name: string
  timeTo: time
  url: urlImage
  localType: string
}

export const CardPromo = ({ name, timeTo, url, localType }: props) => {
  return (
    <Card className="py-4 cursor-pointer hover:bg-primary-950/10">
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={url}
          width={270}
        />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold text-primary-950">{localType}</p>
        <small className="text-default-500">{timeTo}</small>
        <h4 className="font-bold text-large text-primary-900">{name}</h4>
      </CardHeader>
    </Card>
  );
}
