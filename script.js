const API = `https://api-students-v11q.onrender.com/api.php`


async function loadStudents() {
    try {
        const res = await fetch(API);
        const data = await res.json();
        console.log(data)
        const tbody = document.getElementById("students");
        data.forEach((st) => {
            tbody.innerHTML += `
         <tr>
          <td class="p-2 text-center">1</td>
          <td class="p-2 text-center">John Doe1</td>
          <td class="p-2 text-center">johndoe1@gmail.com</td>
          <td class="p-2 text-center">Male</td>
          <td class="p-2 text-center">01-01-2001</td>
          <td class="p-2 text-center space-x-2">
            <button class="bg-yellow-400 px-2 py-1 rounded">Update</button>
            <button class="bg-red-500 text-white px-2 py-1 rounded">
              Delete
            </button>
          </td>
        </tr>
            `;
        })

    } catch {}
} 
loadStudents();

