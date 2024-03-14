import { EditOutlined } from "@ant-design/icons";

type EditPencilIcon = {
  className: string;
  onclick?: () => void;
};

export const EditPencilComponent = ({ className, onclick }: EditPencilIcon) => {
  return <EditOutlined className={className} onClick={onclick} />;
};
