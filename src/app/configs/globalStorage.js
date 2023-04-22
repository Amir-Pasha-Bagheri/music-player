function getItem(item) {
  const parsedValue = JSON.parse(window.localStorage.getItem(item))

  return parsedValue
}

function setItem(item, value) {
  const stringedValue = JSON.stringify(value)

  window.localStorage.setItem(item, stringedValue)
}

const globalStorage = {
  getItem,
  setItem,
}

export default globalStorage
