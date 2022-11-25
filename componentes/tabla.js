import data from '../database/data.json'


export default function Table() {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope='col'> Nombre </th>
                    <th scope='col'> Apellido </th>
                    <th scope='col'> Edad </th>
                    <th scope='col'> Telefono </th>
                </tr>
            </thead>
            <tbody>
                {
                   data.map((obj,i)=><Tr{...obj}key={i}/>) 
                }

            </tbody>

        </table>
    )
}

function Tr({nombre,apellido,edad,telefono}) {

    return (
        <tr>
            <td> {nombre || "Unknown"} </td>
            <td> {apellido || "Unknown"} </td>
            <td> {edad || "Unknown"} </td>
            <td> {telefono || "Unknown"} </td>
        </tr>

    )
}