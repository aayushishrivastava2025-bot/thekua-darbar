
const WHATSAPP_NUMBER = "8269110086";

function sendWhatsApp(message) {
  const url =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent(message);

  window.open(url, "_blank");
}

function order(productName, price) {
  const message =
    "Namaste Thekua Darbar!\n\n" +
    "Mujhe ye product order karna hai:\n" +
    "Product: " + productName + "\n" +
    "Price: Rs. " + price + "\n\n" +
    "Please confirm availability and delivery charges.";

  sendWhatsApp(message);
}

function contactUs() {
  const message =
    "Namaste Thekua Darbar! Mujhe products ki jaankari chahiye.";

  sendWhatsApp(message);
}
