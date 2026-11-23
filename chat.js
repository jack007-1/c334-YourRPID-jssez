window.addEventListener("DOMContentLoaded", async () => {
  const openChat = document.querySelector("#open-chat");

  try {
    const { createChat } = await import(
      "https://cdn.jsdelivr.net/npm/@n8n/chat@1.46.5/dist/chat.bundle.es.js"
    );

    createChat({
      mode: "window",
      webhookUrl: "<PASTE YOUR CHAT URL HERE>",
      title: "JS-SEZ advisor",
      initialMessages: [
        "How can I start planning a JS-SEZ setup?",
        "Which details should I check for my industry?"
      ],
      loadPreviousSession: false
    });

    openChat?.addEventListener("click", () => {
      const button = document.querySelector(
        "[data-testid='chat-window-toggle'], " +
        ".n8n-chat .chat-window-toggle, " +
        ".n8n-chat button[aria-label]"
      );
      button?.click();
    });
  } catch (error) {
    console.error("Could not load the n8n chat widget.", error);
  }
});
