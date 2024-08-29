import React from "react";

interface NotificationProps {
  message: string;
}

const Notification: React.FC<NotificationProps> = ({ message }) => {
  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
};

export default Notification;
