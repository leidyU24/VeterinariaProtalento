import { useEffect, useState } from "react";
import InsertAppointmente from "./InsertAppointmente";
import { EditAppointmente } from "../ViewAppointmente/ViewAppointmente";

export default function useForm(initial = {}) {

    const [inputs, setInputs] = useState(initial);

    function handleChange(e) {
        let { name, type, value, checked } = e.target;
        if (type === "checkbox") value = checked;
        if (type === "number") value = parseInt(value);
        setInputs(prev => ({
            ...prev,
            [name]: value
        }));
    }

    
    function clearForm() {
        const inputsArray = Object.entries(inputs);
        const clearInputsArray = inputsArray.map(([key]) => [key, '']);
        const inputsJson = Object.fromEntries(clearInputsArray);
        setInputs(inputsJson);
    }

    function resetForm() {
        setInputs(initial);
    }

    function verificarCampos(inputs) {
        for (let key in inputs) {
            if (!inputs.hasOwnProperty(key)) continue; // Ignorar propiedades heredadas
            if (typeof inputs[key] !== 'string' || inputs[key].trim() === '') {
                return false; // La clave está vacía o no es una cadena
            }
        }
        return true;
    }

    const insertForm = (setData) => {
        const result = verificarCampos(inputs);
        if (result) {
            inputs.status = "Abierta";
            InsertAppointmente(inputs)
                .then(data => {
                    setData(data),
                    console.log("mi insertForm", data)
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    }

    const editForm = (setData) => {
        console.log("los input", setData)
        const result = verificarCampos(setData);
        if (result) {
            useEffect(() => {
                EditAppointmente(setData)
                    .then(data => {
                        setData(data),
                        console.log("mi insertForm", data)
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
            }, [])

        }
    }

    return {
        inputs,
        handleChange,
        clearForm,
        insertForm,
        editForm,
    }
}