import { formatDate } from "./helpers/index.js"
const BASE_URL = 'https://courses-rest-api-hospital.vercel.app/'
const tbody = document.getElementById('tbody')
const getCourses = async()=>{
    try {
        const response = await fetch(BASE_URL + "api/courses/all-courses")
        const json = await response.json()
        json.map((course)=>(
            tbody.innerHTML+=`
                <td>${course.course_name}</td>
                <td>
                    ${formatDate(course.course_start_date)}
                </td>
                <td>
                    ${formatDate(course.course_finish_date)}
                </td>
                <td>
                    <button class="btn btn-success">
                        Actualizar
                    </button>
                </td>
                <td>
                    <button class="btn btn-danger">
                        Eliminar
                    </button>
                </td>
                <td>
                    <button class="btn btn-primary">
                        Adicionales
                    </button>
                </td>
            `
        ))
    } catch (error) {
        throw new Error(error)
    }
}
getCourses()