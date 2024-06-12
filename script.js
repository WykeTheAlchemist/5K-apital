const form = document.getElementById('poll-form');
const resultsDiv = document.getElementById('results');
const votes = {}; // Store votes in an object

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const person = document.getElementById('person').value;
  const code = document.getElementById('code').value;
  const fullname = document.getElementById('fullname').value;
  const address = document.getElementById('address').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const idpicture = document.getElementById('idpicture').files[0];

  // Check if the person has already voted
  if (votes[person]) {
    alert('You have already voted!');
    return;
  }

  // Verify the code
  if (code !== 'VERIFIABLE_CODE_FOR_' + person.toUpperCase()) {
    alert('Invalid code!');
    return;
  }

  // Store the vote
  votes[person] = true;

  // Store the results in a text file
  const results = `${person}:${code}:${fullname}:${address}:${phone}:${email}:${idpicture.name}\n`;
  fetch('results.txt', {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain',
    },
    body: results,
  })
    .then((response) => response.text())
    .then((data) => {
      resultsDiv.innerHTML = `Thank you for voting! Results: ${data}`;
    })
    .catch((error) => console.error('Error:', error));
});
