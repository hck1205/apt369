import { notification } from "antd";

type NotificationType = "success" | "info" | "warning" | "error";

type NotificationProps = {
  type: NotificationType;
  message: string;
  description: string;
};

export default ({ type, message, description }: NotificationProps) => {
  notification[type]({
    message,
    description,
  });
};
