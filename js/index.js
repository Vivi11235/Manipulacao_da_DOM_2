const cards = document.querySelectorAll('.card');
const tituloCard = document.querySelectorAll('.titulo-card');
const descriptionCard = document.querySelectorAll('.descricao-card');
const editButton = document.querySelectorAll('.botao-editar')
const botaoApagar = document.querySelectorAll('.botao-apagar')

cards.forEach(card => {
    card.style.backgroundColor = '#e16e0e'
  })

tituloCard.forEach(item => {
    item.style.color = '#403d52'
    item.innerText = 'Meu card'
  })

descriptionCard.forEach((item) => {
    item.style.color = 'white'
    item.style.padding = '40px 0'
    item.innerText = 'Descrição Modificada pelo Javascript'
  })
  
editButton.forEach((item) => {
    item.classList.add('button', 'green')
    item.onclick = editarCard
  })

function editarCard() {
    alert(`Clicou em editar`)
}

botaoApagar.forEach(item => {
    item.classList.add('button', 'red')
    item.onclick = apagarCard
  })
  
  function apagarCard() {
    const butao = confirm(`Você tem certeza que deseja excluir o card?`)
  
    if (butao) {
      alert('Confirmado!')
    } else {
      alert('Cancelou!')
    }
  }

  const botaoDelete = document.querySelectorAll('.red');

  botaoDelete.forEach(item => {
    item.style.backgroundColor = 'red'
    item.style.color = 'white'
    item.style.padding = '7px 6px'
    item.style.borderRadius = '6px'
    item.style.border = 'none'
  })

  const botaoEditar = document.querySelectorAll('.green');

  botaoEditar.forEach(item => {
    item.style.backgroundColor = 'green'
    item.style.color = 'white'
    item.style.padding = '7px 6px'
    item.style.borderRadius = '6px'
    item.style.border = 'none'
  })