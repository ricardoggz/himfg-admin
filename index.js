const BASE_URL = 'https://courses-rest-api-hospital.vercel.app/'
const tbody = document.getElementById('tbody')
const getCourses = async()=>{
    try {
        const response = await fetch(BASE_URL + "api/courses/all-courses")
        const json = await response.json()
        json.map((course)=>(
            tbody.innerHTML+=`
                <th scope="row">${course.course_id}</th>
                <td class="overflow-x-auto">${course.course_name}</td>
                <td class="overflow-x-auto">
                ${!course.course_price ? 'Precio no disponible' : course.course_price}
                </td>
                <td>
                    <a href=${course.course_image} target="blank" class="text-info">
                        ${!course.course_image ? '' : course.course_image}
                    </a>
                </td>
                <td>
                    <a href=${course.course_pdf} target="blank" class="text-info">
                        ${!course.course_pdf ? '' : course.course_pdf}
                    </a>
                </td>
                <td>
                    ${new Date(course.course_start_date)}
                </td>
                <td>
                    ${new Date(course.course_finish_date)}
                </td>
                <td>
                    ${!course.course_password ? 'Sin contraseña' : course.course_password}
                </td>
                <td>
                    ${!course.course_vimeo_folder ? 'Sin carpeta en vimeo' : course.course_vimeo_folder}
                </td>
            `
        ))
        return console.log(json)
    } catch (error) {
        console.log(error)
    }
}
getCourses()