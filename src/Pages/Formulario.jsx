import React, { useState } from 'react'
import { NavBar } from '../components/NavBar'
import { apiFormulario } from '../api/apiFormulario';

export const Formulario = () => {
    const [formData, setFormData] = useState({
        carnet: 'A',
        nombre: '',
        direccion: '',
        genero: '',
        telefono: '',
        fechaNacimiento: '',
        carrera: '',
        generoPoesia: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await apiFormulario(formData);

        if(!result){
            
        }

        console.log(formData);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'carnet') {
            // Verificar si el valor ingresado comienza con "ValorInicial"
            if (value.startsWith('A')) {
                // Actualizar solo el texto después de "ValorInicial"
                const newValue = `A${value.substring('A'.length)}`;
                setFormData((prevData) => ({
                    ...prevData,
                    [name]: newValue
                }));
            }
        } else {
            // Actualizar otros campos
            setFormData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        }
    };

    return (
        <>
            <NavBar />
            <div className="container pb-5 pt-5">
                <div className="row">
                    <div className="col-12">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="carnet" className="form-label">Carnet</label>
                                <input type="text" className="form-control" id="carnet" name="carnet" value={formData.carnet} onChange={handleInputChange} maxLength={6} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label">Nombre completo</label>
                                <input type="text" className="form-control" id="nombre" name="nombre" value={formData.nombre} onChange={handleInputChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="direccion" className="form-label">Dirección</label>
                                <input type="text" className="form-control" id="direccion" name="direccion" value={formData.direccion} onChange={handleInputChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="genero" className="form-label">Género</label>
                                <select className="form-select" id="genero" name="genero" value={formData.genero} onChange={handleInputChange}>
                                    <option value="">Seleccionar</option>
                                    <option value="masculino">Masculino</option>
                                    <option value="femenino">Femenino</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="generoPoesia" className="form-label">Género de poesía</label>
                                <select className="form-select" id="generoPoesia" name="generoPoesia" value={formData.generoPoesia} onChange={handleInputChange}>
                                    <option value="">Seleccionar</option>
                                    <option value="lirica">Lírica</option>
                                    <option value="epica">Épica</option>
                                    <option value="dramatica">Dramática</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="fechaNacimiento" className="form-label">Fecha de nacimiento</label>
                                <input type="date" className="form-control" id="fechaNacimiento" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleInputChange} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="carrera" className="form-label">Carrera del estudiante</label>
                                <input type="text" className="form-control" id="carrera" name="carrera" value={formData.carrera} onChange={handleInputChange} />
                            </div>
                            <button type="submit" className="btn btn-primary">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
