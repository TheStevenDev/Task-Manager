// Recupera i riferimenti agli elementi del DOM
const taskForm = document.getElementById('taskForm');
const descriptionInput = document.getElementById('descriptionInput');
const deadlineInput = document.getElementById('deadlineInput');
const statusSelect = document.getElementById('statusSelect');
const taskList = document.getElementById('taskList');

// Array per memorizzare i compiti
let tasks = [];

// Funzione per aggiungere un nuovo compito
function addTask(event) {
  event.preventDefault();

  // Recupera i valori dai campi di input
  const description = descriptionInput.value;
  const deadline = deadlineInput.value;
  const status = statusSelect.value;

  // Crea un nuovo oggetto compito
  const newTask = {
    id: Date.now(),
    description,
    deadline,
    status
  };

  // Aggiungi il nuovo compito all'array
  tasks.push(newTask);

  // Aggiorna l'interfaccia utente
  renderTasks();

  // Resetta i campi di input
  descriptionInput.value = '';
  deadlineInput.value = '';
  statusSelect.value = 'inCorso';
}

// Funzione per renderizzare i compiti nell'interfaccia utente
function renderTasks() {
  // Svuota la lista dei compiti
  taskList.innerHTML = '';

  // Itera attraverso l'array dei compiti e crea gli elementi della lista
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${task.description}</span>
      <span>${task.deadline}</span>
      <span>${task.status}</span>
      <button onclick="deleteTask(${task.id})">Elimina</button>
    `;
    taskList.appendChild(li);
  });
}

// Funzione per eliminare un compito
function deleteTask(id) {
  // Filtra l'array dei compiti per escludere quello con l'id specificato
  tasks = tasks.filter(task => task.id !== id);

  // Aggiorna l'interfaccia utente
  renderTasks();
}

// Aggiungi un listener per la sottomissione del modulo
taskForm.addEventListener('submit', addTask);

// Inizializza l'interfaccia utente dei compiti
renderTasks();
