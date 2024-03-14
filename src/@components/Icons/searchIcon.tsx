import { SearchOutlined } from "@ant-design/icons";

type SearchIconType = {
  className?: string;
};

export const SearchIcon = ({ className }: SearchIconType) => {
  return <SearchOutlined className={className} />;
};
