from flask import Flask, jsonify
from flask_cors import CORS  # Importa CORS

app = Flask(__name__)
CORS(app)  # Habilita CORS para todas las rutas

@app.route("/api/projects", methods=["GET"])
def get_projects():
    projects = [
        {"id": 1, "name": "Proyecto 1", "tech": "Flask"},
        {"id": 2, "name": "Proyecto 2", "tech": "React"},
        {"id": 3, "name": "Proyecto 3", "tech": "Django"},
        {"id": 4, "name": "Proyecto 4", "tech": "Node.js"},
        {"id": 5, "name": "Proyecto 5", "tech": "Angular"},
        {"id": 6, "name": "Proyecto 6", "tech": "Vue.js"},
        {"id": 7, "name": "Proyecto 7", "tech": "Spring Boot"},
        {"id": 8, "name": "Proyecto 8", "tech": "Ruby on Rails"},
        {"id": 9, "name": "Proyecto 9", "tech": "ASP.NET"},
        {"id": 10, "name": "Proyecto 10", "tech": ".NET Core"}
        
    ]
    return jsonify(projects)  # Retorna datos en formato JSON

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)