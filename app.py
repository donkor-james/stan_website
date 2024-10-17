import json
import smtplib
import requests
from flask import Flask, request, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

# # mailchimp credentials
# MAILCHIMP_API_KEY = '70821b3dcd38d4f191bade9950a0fec7-us14'
# MAILCHIMP_AUDIENCE_ID = '276ac44a47'
# MAILCHIMP_DATA_CENTER = 'us14'


# # Gmail smtp setup
# SMTP_SERVER = 'smtp.gmail'
# SMTP_PORT = 587
# TO_EMAIL = 'jamesdonkor987@gmail.com'
# APP_PASSSWORD = 'ffsszmgfaaehklkg'


@app.route('/api/subscribe', methods=['POST'])
def subscribe():
    email = request.json.get('email')

    if not email:
        return jsonify({'error': 'Email is required'}), 400
    url = f'https://{MAILCHIMP_DATA_CENTER}.api.mailchimp.com/3.0/lists/{MAILCHIMP_AUDIENCE_ID}/members'
    data = {
        'email_address': email,
        'status': 'subscribed'
    }

    response = requests.post(url, auth=(
        'anystring', MAILCHIMP_API_KEY), json=data)

    # print(response)
    if response.status_code == 200:
        return jsonify({'message': 'Successfully subscribed!'}), 200
    else:
        return jsonify({'error': response.json().get('detail', 'An error occurred')}), response.status_code


@app.route('/api/contact', methods=['POST'])
def send():
    name = request.json().get('name')
    email = request.json.get('email')
    message = request.json().get('message')
    subject = f'Message From STAN Website by {name}'

    text = f'Subject: {subject}\n\n{message}'

    server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
    server.starttls()

    server.login(email, APP_PASSSWORD)

    #  if not email:
    #      return jsonify({'error': 'Email is required'}), 400

    #  if response.status_code == 200:
    #    return jsonify({'message': 'Successfully subscribed!'}), 200
    #  else:
    #      return jsonify({'error': response.json().get('detail', 'An error occurred')}), response.status_code


if __name__ == 'main':
    app.run(debug=True)
