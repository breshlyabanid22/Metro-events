class NotificationManager {
  constructor() {
    this.notifications = [];
  }

  addNotification(type, message) {
    const newNotification = {
      type,
      message,
      timestamp: new Date().toLocaleString(),
    };

    this.notifications.push(newNotification);
    this.displayNotification(newNotification);

    return newNotification;
  }

  displayNotification(notification) {
    console.log(`[${notification.type}] ${notification.message} - ${notification.timestamp}`);
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = NotificationManager;
}
