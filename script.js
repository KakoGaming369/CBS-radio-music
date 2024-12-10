document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("orderForm");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const idNumber = document.getElementById("idNumber").value;
    const purchaseDate = document.getElementById("purchaseDate").value;
    const houseNumber = document.getElementById("houseNumber").value;

    // Webhook URL
    const webhookURL = "https://discord.com/api/webhooks/1316082741464535070/WmDMI9oir28Vm7eRAlTF_X-APU1czkx8qEpVGXnsPngwpWvjxOCIeO7fKJORtKrcDJWL";

    // Priprav payload
    const payload = {
      embeds: [
        {
          title: "Nová žiadosť",
          color: 7506394, // Discord embed color
          fields: [
            { name: "Meno a priezvisko", value: fullName, inline: true },
            { name: "Názov", value: idNumber, inline: true },
            { name: "Interpret", value: purchaseDate, inline: true },
            { name: "Youtube link", value: houseNumber, inline: true },
          ],
          timestamp: new Date().toISOString(),
        },
      ],
    };

    try {
      const response = await fetch(webhookURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("Žiadosť úspešne odoslaná!");
      } else {
        alert("Žiadošt sa nepodarilo odoslať.");
      }
    } catch (error) {
      console.error("Chyba pri odosielaní:", error);
      alert("Nastala chyba pri odosielaní formulára.");
    }
  });
});
