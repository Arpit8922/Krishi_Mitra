$(document).ready(function() {
    $(".hamburger").click(function() {
        $(".wrapper").toggleClass("collapse");
    });
});

function toggleChatbot() {
    const chatbotContainer = document.querySelector('.chatbot-container');
    chatbotContainer.style.display = chatbotContainer.style.display === 'flex' ? 'none' : 'flex';
}

function sendMessage(event) {
    if (event.key === 'Enter') {
        const input = document.getElementById('chatbotInput');
        const message = input.value.trim();

        if (message) {
            addMessage(message, 'user');
            input.value = '';

            // Handle predefined responses
            handleBotResponse(message);
        }
    }
}

function addMessage(message, sender) {
    const messagesContainer = document.getElementById('chatbotMessages');
    const messageElement = document.createElement('div');
    messageElement.classList.add('chatbot-message', sender);
    messageElement.textContent = message;
    messagesContainer.appendChild(messageElement);

    // Scroll to the bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function handleBotResponse(message) {
    let response = "I'm sorry, I didn't understand that. Can you please rephrase?";

    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
        response = "Hello! How can I assist you today?";
    } else if (lowerCaseMessage.includes('about')) {
        response = "We are dedicated to helping Indian farmers improve their crop yields and detect diseases early.";
    } else if (lowerCaseMessage.includes('services')) {
        response = "Our services include crop yield prediction and disease detection using advanced technology.";
    } else if (lowerCaseMessage.includes('contact')) {
        response = "You can contact us at support@cropmanagement.com or call us at +91-1234567890.";
    } else if (lowerCaseMessage.includes('help')) {
        response = "I'm here to help! You can ask me about our services, contact information, or anything related to crop management.";
    }

    setTimeout(() => {
        addMessage(response, 'bot');
    }, 1000);
}

