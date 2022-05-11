
from flask import Flask
from flask import jsonify
from flask import request

app = Flask(__name__)

@app.route('/la-cachina-backend/Api/<id>')
def users_action(id):
    print(request.method)
    print("me solicitaron: " + id)
    return id


app.run(debug=True)