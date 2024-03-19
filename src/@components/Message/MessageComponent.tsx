import { notification } from "antd";

type typeMessage = {
  type: "success" | "info" | "warning" | "error";
  title: string;
  description: string;
};

const MessageComponent = ({ type, title, description }: typeMessage) => {
  notification[type]({
    message: title,
    description: description,
    duration: 0,
  });
};

export default MessageComponent;
