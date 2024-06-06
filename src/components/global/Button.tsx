import { Button as ThemeButton } from "@nextui-org/react";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  icon: ReactNode;
  children: ReactNode;
  url: string
}

export const Button = ({ icon, url, children }: ButtonProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(url)
  }
  return (
    <ThemeButton className="bg-gradient-to-br flex flex-col h-24 gap-2 from-primary-600 to-primary-900 text-white shadow-lg" onClick={handleClick}>
      <span className="text-3xl">
        {icon}
      </span>
      <span>{children}</span>
    </ThemeButton>
  )
}