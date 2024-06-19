import "./SubTitle.scss";

interface SubTitleProps {
  children: string;
}

export default function SubTitle({ children }: SubTitleProps) {
  return <h2 className="subTitle">{children}</h2>;
}
