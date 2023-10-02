document.getElementById('formulario').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const URL = 'https://jsonplaceholder.typicode.com/users'

    const data = {
      nombre,
      apellido,
      fechaNacimiento
    };
  
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data); 
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
  