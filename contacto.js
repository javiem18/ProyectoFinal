document.getElementById('Formulario').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;
  
  const resultDiv = document.getElementById('result');
  
  resultDiv.innerHTML = `
    <h2>Solicitud de Información Enviada</h2>
    <p><strong>Nombre:</strong> ${name}</p>
    <p><strong>Correo electrónico:</strong> ${email}</p>
    <p><strong>Teléfono:</strong> ${phone}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${message}</p>
    <p>En breve recibirá un correo con más información</p>
  `;
});

  