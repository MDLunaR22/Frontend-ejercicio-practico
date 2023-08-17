import axios from 'axios';

const URL = `http://localhost:8080/universidad/evento/`;

export const apiFormulario = async (carnet, nombres, direccion, genero, telefono, fecha_nacimiento, carrera_estudiante, genero_poesia) => {
    try {
        const response = await axios.post(`${URL}agregar/registro`, {
            carnet,
            nombres,
            direccion,
            genero,
            telefono,
            fecha_nacimiento,
            carrera_estudiante,
            genero_poesia
        });

        return response.data;
    } catch ({response: {data}}) {
        return data
    }
}


