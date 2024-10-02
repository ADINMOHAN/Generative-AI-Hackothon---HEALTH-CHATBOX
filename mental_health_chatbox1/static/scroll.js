// Automatically scrolls the conversation box to the bottom when a new message is added
window.onload = function() {
    const conversationBox = document.querySelector('.conversation-box');
    const inputField = document.querySelector('input[type="text"]');
    
    if (conversationBox) {
        conversationBox.scrollTop = conversationBox.scrollHeight;
    }

    // Focus on the input field
    if (inputField) {
        inputField.focus();
    }
};

document.addEventListener("DOMContentLoaded", function() {
    const conversationBox = document.querySelector('.conversation-box');
    const inputField = document.querySelector('input[type="text"]');

    if (conversationBox) {
        // Scroll to the bottom when new content is added
        conversationBox.scrollTop = conversationBox.scrollHeight;
    }

    // Focus on the input field
    if (inputField) {
        inputField.focus();
    }
});

// Function to handle sending the message
function sendMessage() {
    const inputField = document.querySelector('input[type="text"]');
    const conversationBox = document.querySelector('.conversation-box');

    if (inputField.value.trim() !== "") {
        // Add user message to conversation
        const userMessageDiv = document.createElement('div');
        userMessageDiv.classList.add('user-message');
        userMessageDiv.textContent = inputField.value;
        conversationBox.appendChild(userMessageDiv);

        // Simulate AI response (for demonstration)
        const aiMessageDiv = document.createElement('div');
        aiMessageDiv.classList.add('ai-message');
        aiMessageDiv.textContent = "AI: " + inputField.value; // Replace with actual AI response logic
        conversationBox.appendChild(aiMessageDiv);

        // Clear the input field
        inputField.value = '';

        // Scroll to the bottom
        conversationBox.scrollTop = conversationBox.scrollHeight;

        // Focus back on the input field
        inputField.focus();
    }
}
