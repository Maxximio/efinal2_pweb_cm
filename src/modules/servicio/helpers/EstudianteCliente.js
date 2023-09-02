import axios from "axios";

export const ingresarEstudianteFachada=(bodyEstudiante,token)=>{
    ingresarEstudianteAPI(bodyEstudiante,token);
}

export const buscarTodosFachada = (token) => {
    return buscarTodos(token);
  };

/////otra parte

const ingresarEstudianteAPI=(bodyEstudiante,token)=>{

    const headers= {
        "Authorization": "Bearer " +token,
        "Mensaje": "Valor1"
    }

    axios.post(`http://localhost:8080/API/v1.0/Inscripcion/estudiantes` , bodyEstudiante,{headers: headers}).then(r=>r.data);
}


const buscarTodos = (token) => {

    const headers= {
        "Authorization": "Bearer " +token,
        "Mensaje": "Valor1"
    }

    return axios
      .get(`http://localhost:8080/API/v1.0/Inscripcion/estudiantes`,{headers: headers})
  };

