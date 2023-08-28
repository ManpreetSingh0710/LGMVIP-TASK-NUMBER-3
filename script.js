// JavaScript code for handling form submission and data display

const registrationForm = document.getElementById('registrationForm');
const registrationData = document.getElementById('registrationData');

registrationForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const gender = document.getElementById('gender').value;
  const Website = document.getElementById('website').value;
  const photoInput = document.getElementById('photo');
  const photoFile = photoInput.files[0];
  const photoUrl = photoFile ? URL.createObjectURL(photoFile) : '';

  const newData = document.createElement('div');
  newData.innerHTML = `
    <h2>Registration Data</h2>
    <p><strong>Full Name:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Website:</strong> ${Website}</p>
    <p><strong>Gender:</strong> ${gender}</p>
    <p><strong>Photo:</strong></p>
    <img src="${photoUrl}" alt="User Photo" width="150">
  `;

  registrationData.innerHTML = '';
  registrationData.appendChild(newData);

  // Clear form fields
  registrationForm.reset();
}
