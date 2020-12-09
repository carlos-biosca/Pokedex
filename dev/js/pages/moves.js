const labels = ['id', 'power', 'pp']
const labels2 = ['target', 'type', 'accuracy']
const list = ['effect', 'flavor']

const loadMoves = (data) => {
  const list = document.getElementById('moves-list')
  data.forEach(move => {

    const li = document.createElement('li')
    li.innerHTML = move.move.name
    li.classList.add('moves-list__item')
    li.setAttribute('tabIndex', 0)
    li.dataset.url = move.move.url
    list.appendChild(li)

    const div = document.createElement('div')
    div.classList.add('moves-list__card')
    list.appendChild(div)
  })
}

const createCard = (card, name) => {
  //info
  const info = document.createElement('div')
  info.classList.add('moves-list__info')
  //block-1
  let block = document.createElement('ul')
  block.classList.add('moves-list__block')
  info.appendChild(block)
  labels.forEach(item => {
    const li = document.createElement('li')
    li.classList.add(`moves-list__${item}`)
    li.innerHTML = `${item}: `
    const span = document.createElement('span')
    span.id = `move-${item}-${name}`
    li.appendChild(span)
    block.appendChild(li)
  })
  //block-2
  block = document.createElement('ul')
  block.classList.add('moves-list__block')
  info.appendChild(block)
  labels2.forEach(item => {
    const li = document.createElement('li')
    li.classList.add(`moves-list__${item}`)
    li.innerHTML = `${item}: `
    const span = document.createElement('span')
    span.id = `move-${item}-${name}`
    li.appendChild(span)
    block.appendChild(li)
  })
  card.appendChild(info)

  //list-text
  const listText = document.createElement('ul')
  listText.classList.add('moves-list__text')
  //list-li
  list.forEach(item => {
    const li = document.createElement('li')
    li.classList.add(`moves-list__${item}`)
    li.innerHTML = `${item}:`
    const p = document.createElement('p')
    p.id = `move-${item}-${name}`
    li.appendChild(p)
    listText.appendChild(li)
  })
  card.appendChild(listText)
}

const paintData = (data) => {
  const { name, id, power, pp, target, type, accuracy, effect_entries, flavor_text_entries } = data
  document.getElementById(`move-id-${name}`).innerHTML = id
  document.getElementById(`move-power-${name}`).innerHTML = power
  document.getElementById(`move-pp-${name}`).innerHTML = pp
  document.getElementById(`move-target-${name}`).innerHTML = target.name
  document.getElementById(`move-type-${name}`).innerHTML = type.name
  document.getElementById(`move-accuracy-${name}`).innerHTML = accuracy
  document.getElementById(`move-effect-${name}`).innerHTML = effect_entries[0].effect
  document.getElementById(`move-flavor-${name}`).innerHTML = flavor_text_entries[0].flavor_text;

  if (document.getElementById(`move-accuracy-${name}`).innerHTML == '') {
    document.getElementById(`move-accuracy-${name}`).innerHTML = 'no-data'
  }
  if (document.getElementById(`move-power-${name}`).innerHTML == '') {
    document.getElementById(`move-power-${name}`).innerHTML = 'no-data'
  }
}


const moves = document.getElementById('moves-list')

moves.addEventListener('click', (e) => {
  if (e.target.classList.contains('created')) {
    e.target.nextElementSibling.classList.toggle('isActive')
  } else {
    fetch(`${e.target.dataset.url}`)
      .then(response => response.json())
      .then(data => {
        createCard(e.target.nextElementSibling, data.name)
        paintData(data)
        e.target.classList.add('created')
        e.target.nextElementSibling.classList.add('isActive')
      })
      .catch((err) => console.log(err));
  }

})

