let contatti = [
    { 'nome': 'Nicola', 'numero': 3331111111 },
    { 'nome': 'Matteo', 'numero': 3332222222 },
    { 'nome': 'Luca', 'numero': 3333333333 },
    { 'nome': 'Davide', 'numero': 3334444444 }
];

function populateTable() {
    const tableBody = document.getElementById('contactsTableBody');
    tableBody.innerHTML = '';
    contatti.forEach((contatto, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="py-2 px-4 border-b">${contatto.nome}</td>
            <td class="py-2 px-4 border-b">${contatto.numero}</td>
            <td class="py-2 px-4 border-b">
                <button onclick="deleteContact(${index})" class="bg-red-500 text-white px-2 py-1 rounded">Elimina</button>
                <button onclick="editContact(${index})" class="bg-yellow-500 text-white px-2 py-1 rounded">Modifica</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

document.getElementById('toggleListBtn').addEventListener('click', () => {
    const contactList = document.getElementById('contactList');
    const toggleButton = document.getElementById('toggleListBtn'); 
    
    contactList.classList.toggle('hidden');

    if (contactList.classList.contains('hidden')) {
        toggleButton.innerHTML = 'Mostra Contatti';
    } else {
        toggleButton.innerHTML = 'Nascondi Contatti';
    }
});


document.getElementById('addContactBtn').addEventListener('click', () => {
    const newName = document.getElementById('newName').value;
    const newNumber = document.getElementById('newNumber').value;
    
    if (newName === '' || newNumber === '') {
        showMessage('Nome e numero non possono essere vuoti');
        return;
    }

    contatti.push({ 'nome': newName, 'numero': newNumber });
    populateTable();
    showMessage('Contatto aggiunto con successo');

    document.getElementById('newName').value = '';
    document.getElementById('newNumber').value = '';
});

function deleteContact(index) {
    contatti.splice(index, 1);
    populateTable();
    showMessage('Contatto eliminato con successo');
}

function editContact(index) {
    const newName = prompt('Inserisci nuovo nome', contatti[index].nome);
    const newNumber = prompt('Inserisci nuovo numero', contatti[index].numero);
    
    if (newName === '' || newNumber === '') {
        showMessage('Nome e numero non possono essere vuoti');
        return;
    }

    contatti[index] = { 'nome': newName, 'numero': newNumber };
    populateTable();
    showMessage('Contatto modificato con successo');
}

function showMessage(message) {
    const messageToast = document.getElementById('messageToast');
    messageToast.textContent = message;
    messageToast.classList.remove('hidden');
    setTimeout(() => {
        messageToast.classList.add('hidden');
    }, 3000);
}

populateTable();
