
const WHATSAPP_NUMBER = "918269110086";

// WhatsApp open karne ka function
function sendWhatsApp(message) {
  const url =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent(message);

  window.location.href = url;
}

// Product order
function order(productName, price) {
  const message =
    "Namaste Thekua Darbar! ❤️\n\n" +
    "Mujhe ye product order karna hai:\n\n" +
    "Product: " + productName + "\n" +
    "Price: Rs. " + price + "\n" +
    "Quantity: 1 Pack\n\n" +
    "Payment: UPI QR / Cash on Delivery\n\n" +
    "Please confirm availability and delivery charges.";

  sendWhatsApp(message);
}

// General enquiry
function contactUs() {
  const message =
    "Namaste Thekua Darbar! Mujhe aapke products ke baare mein jaankari chahiye.";

  sendWhatsApp(message);
}
