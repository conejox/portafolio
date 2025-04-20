from flask import Flask, jsonify
from flask_cors import CORS  # Importa CORS

app = Flask(__name__)
CORS(app)  # Habilita CORS para todas las rutas

@app.route("/api/projects", methods=["GET"])
def get_projects():
    projects = [
        {"id": 1, "name": "Proyecto 1", "tech": "Flask"},
        {"id": 2, "name": "Proyecto 2", "tech": "React"},
        {"id": 3, "name": "Proyecto 3", "tech": "chatbot"},
        {"id": 2, "name": "Proyecto 2", "tech": "React"},
        {"id": 3, "name": "Proyecto 3", "tech": "chatbot"},
        {"id": 2, "name": "Proyecto 2", "tech": "React"},
        {"id": 3, "name": "Proyecto 3", "tech": "chatbot"},
        {"id": 2, "name": "Proyecto 2", "tech": "React"},
        {"id": 3, "name": "Proyecto 3", "tech": "chatbot"},
        {"id": 2, "name": "Proyecto 2", "tech": "React"},
        {"id": 3, "name": "Proyecto 3", "tech": "chatbot"},
        {"id": 2, "name": "Proyecto 2", "tech": "React"},
        {"id": 3, "name": "Proyecto 3", "tech": "chatbot"}
    ]
    return jsonify(projects)  # Retorna datos en formato JSON

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)