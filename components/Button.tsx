import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
  onClick?: ()=>void;
  // variant: "btn_dark_green" | "btn_green";
};
const Button = ({ type, title, icon, variant,full, onClick }: ButtonProps) => {
  return (
    <button type={type} className={`flexCenter gap-3 rounded-full border ${variant}`}  onClick={onClick}>
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
        <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  );
};
export default Button;
