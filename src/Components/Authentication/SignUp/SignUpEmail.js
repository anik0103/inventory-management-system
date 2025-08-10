import emailjs from '@emailjs/browser';

const serviceID = "service_82wrsyb";
const userWelcomeTemplateID = "template_jfv9p59";
const adminNotificationTemplateID = "template_jt1yhjh";
const publicKey = "xizkS9vd6Ho_aF0ZF";

export const sendWelcomeEmail = (templateParams) => {
  return emailjs.send(serviceID, userWelcomeTemplateID, templateParams, publicKey);
};

export const notifyAdmin = (templateParams) => {
  return emailjs.send(serviceID, adminNotificationTemplateID, templateParams, publicKey);
};
