import { ReactNode } from "react";

export default function MainContainer(props: IProps) {
  return <div className="container mx-auto h-full ">{props.children}</div>;
}

interface IProps {
  children: ReactNode;
}
