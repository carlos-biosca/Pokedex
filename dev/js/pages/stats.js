const loadStats = (data) => {
  const stats = ['HP', 'Attack', 'Defense', 'Sp-Atk', 'Sp-Def', 'Speed']
  let total = 0
  stats.forEach((stats, index) => {
    const span = document.createElement('span')
    span.innerHTML = data[index].base_stat

    const bar = document.createElement('progress')
    bar.id = `${stats}`
    bar.setAttribute("max", "100")
    bar.setAttribute("value", `${data[index].base_stat}`)
    data[index].base_stat >= 50 ? bar.style.setProperty("--color-bar", "#14a06f") : bar.style.setProperty("--color-bar", "#f42a28")

    document.getElementById(`${stats}`).appendChild(span)
    document.getElementById(`${stats}`).appendChild(bar)

    total += data[index].base_stat

  })

  const span = document.createElement('span')
  span.innerHTML = total

  const bar = document.createElement('progress')
  bar.id = "Total"
  bar.setAttribute("max", "600")
  bar.setAttribute("value", `${total}`)
  bar.style.setProperty("--color-bar", "#37a5c6")

  document.getElementById('Total').appendChild(span)
  document.getElementById('Total').appendChild(bar)
}