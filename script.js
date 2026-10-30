
// Thekua Darbar WhatsApp Ordering

// Apna WhatsApp number yahan add karna.
// India country code 91 ke saath, bina + ya spaces.
const WHATSAPP_NUMBER = "918269110086";

function sendWhatsApp(message) {
  if (WHATSAPP_NUMBER === "918269110086") {
    alert("Please add your WhatsApp number in script.js first.");
    return;
  }

  const url =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent(message);

  window.open(url, "_blank");
}

// Product order
function order(productName, price) {
  const message =
    "Namaste Thekua Darbar! Mujhe order karna hai:\n\n" +
    "Product: " + productName + "\n" +
    "Price: Rs. " + price + "\n\n" +
    "Please confirm availability, delivery charges and payment details.";

  sendWhatsApp(message);
}

// General contact
function contactUs() {
  const message =
    "Namaste Thekua Darbar! Mujhe aapke products ke baare mein jaankari chahiye.";

  sendWhatsApp(message);
}
