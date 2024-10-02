from flask import Flask, render_template, request
import google.generativeai as genai

app = Flask(__name__)

# Configure the API key
api_key = "AIzaSyCKorGXJfjbQpNew2nRKVblKeO4-wxC5do"
genai.configure(api_key=api_key)

# Set up generation configuration
generation_config = {
    "temperature": 1,
    "top_p": 0.95,
    "top_k": 64,
    "max_output_tokens": 8192,
    "response_mime_type": "text/plain",
}

# Initialize the generative model
model = genai.GenerativeModel(
    model_name="tunedModels/dataset-nwq8s8qok260",
    generation_config=generation_config,
)

# Initialize conversation history
conversation_history = []

@app.route("/", methods=["GET", "POST"])
def chatbot():
    global conversation_history  # Access the global conversation history
    if request.method == "POST":
        try:
            # Capture the user's input
            user_input = request.form["user_input"]

            # Store user input in conversation history
            conversation_history.append({"role": "user", "content": user_input})

            # Start the chat session and send the user message to the model
            chat_session = model.start_chat(history=[])
            response = chat_session.send_message(user_input)

            # Print the user input and AI response for debugging
            print("Sending message:", user_input)
            print("API response:", response.text)

            # Store the AI response in conversation history
            conversation_history.append({"role": "model", "content": response.text})

            # Render the updated conversation back to the user
            return render_template("index.html", conversation=conversation_history)
        except Exception as e:
            print(f"Error: {e}")
            return render_template("index.html", response="Sorry, the AI is currently not responding.")
    return render_template("index.html", conversation=conversation_history)

if __name__ == "__main__":
    app.run(debug=True)  # This starts the Flask web server
