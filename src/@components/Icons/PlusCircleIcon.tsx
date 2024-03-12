import { PlusCircleOutlined } from "@ant-design/icons";

type PlusCircleIcon = {
  className: string;
};

export const PlusCircleIcon = ({ className }: PlusCircleIcon) => {
  return <PlusCircleOutlined className={className} />;
};
