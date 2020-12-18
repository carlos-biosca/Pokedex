const labels = [
  ['id', 'power', 'pp'],
  ['target', 'type', 'accuracy']
]
const list = ['effect', 'flavor']

const loadMoves = (data) => {
  const list = document.getElementById('moves-list')
  if (data.length == 0) {
    list.innerHTML = 'NO-DATA'
  } else {
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
}

const createCard = (card, data) => {
  const values = [
    [data.id, data.power, data.pp],
    [data.target.name, data.type.name, data.accuracy]
  ]
  const text = [data.effect_entries[0].effect, data.flavor_text_entries[0].flavor_text]

  const info = document.createElement('div')
  info.classList.add('moves-list__info')

  labels.forEach((label, index) => {
    let block = document.createElement('ul')
    block.classList.add('moves-list__block')
    info.appendChild(block)

    label.forEach((item, index2) => {
      const li = document.createElement('li')
      li.classList.add(`moves-list__${item}`)
      li.innerHTML = `${item}: `
      const span = document.createElement('span')
      values[index][index2] === null ? span.innerHTML = '-' : span.innerHTML = values[index][index2]
      li.appendChild(span)
      block.appendChild(li)
    })
  })

  card.appendChild(info)

  const listText = document.createElement('ul')
  listText.classList.add('moves-list__text')

  list.forEach((item, index) => {
    const li = document.createElement('li')
    li.classList.add(`moves-list__${item}`)
    li.innerHTML = `${item}:`
    const p = document.createElement('p')
    p.innerHTML = text[index]
    li.appendChild(p)
    listText.appendChild(li)
  })
  card.appendChild(listText)
}

const moves = document.getElementById('moves-list')

moves.addEventListener('click', (e) => {
  if (e.target.classList.contains('moves-list__item')) {
    if (e.target.classList.contains('created')) {
      e.target.classList.toggle('isActive')
      e.target.nextElementSibling.classList.toggle('isActive')
    } else {
      fetch(`${e.target.dataset.url}`)
        .then(response => response.json())
        .then(data => {
          createCard(e.target.nextElementSibling, data)
          e.target.classList.add('created')
          e.target.classList.add('isActive')
          e.target.nextElementSibling.classList.add('isActive')
        })
        .catch((err) => console.log(err));
    }
  } else {
    return
  }
})

moves.addEventListener('keypress', (e) => {
  if (e.key == 'Enter') {
    if (e.target.classList.contains('moves-list__item')) {
      if (e.target.classList.contains('created')) {
        e.target.nextElementSibling.classList.toggle('isActive')
      } else {
        fetch(`${e.target.dataset.url}`)
          .then(response => response.json())
          .then(data => {
            createCard(e.target.nextElementSibling, data)
            e.target.classList.add('created')
            e.target.nextElementSibling.classList.add('isActive')
          })
          .catch((err) => console.log(err));
      }
    } else {
      return
    }
  }
})

