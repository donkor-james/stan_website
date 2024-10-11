from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow CORS for all routes

@app.route('/api/subscribe', methods=['POST'])
def subscribe():
   data = request.get_json()
   email = data.get('email')
   # Here, add logic to handle subscription (e.g., save to database)
   return jsonify({"message": "Subscription successful!"}), 200

if __name__ == '__main__':
    app.run(debug=True)
   
