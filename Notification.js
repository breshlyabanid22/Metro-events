class NotificationManager {
    constructor() {
      this.notifications = [];
    }

    addNotification(type, message) {
      const newNotification = {
        type,
        message,
      };
  
      this.notifications.push(newNotification);

      this.displayNotification(newNotification);
  
      return newNotification;
    }
  
    displayNotification(notification) {
      if (Notification.permission === "granted") {
        new Notification(notification.type, { body: notification.message });
      } else {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            new Notification(notification.type, { body: notification.message });
          }
        });
      }
    }
  }

  const notificationManager = new NotificationManager();

  notificationManager.addNotification('Event Acceptance', 'Your request for Event XYZ has been accepted.');
  notificationManager.addNotification('Event Reminder', 'Reminder: You have an upcoming event tomorrow.');
  notificationManager.addNotification('Event Cancellation', 'Event ABC has been canceled due to unforeseen circumstances.');
  

  export default NotificationManager;