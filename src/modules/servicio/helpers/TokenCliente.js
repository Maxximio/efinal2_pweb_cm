import axios from "axios";

export const generarTokenFachada=(body)=>{
    GenerarToken(body);
}

////el resto

const GenerarToken=(body)=>{

    return axios
      .get(`http://localhost:8081/API/v1.0/Autorizacion/tokens/obtener2`,body).then(r=>r.data);
}
