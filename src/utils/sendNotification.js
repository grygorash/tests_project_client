import { notification } from 'antd';

const sendNotification = (type, message) => {
  notification[type]({
    className: type,
    message: message,
    duration: 10,
    placement: 'bottomRight',
  });
};

export default sendNotification;
