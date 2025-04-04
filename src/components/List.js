import { Component } from '../core/Component'

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement('div')
    this.$rootElement.className = 'donates-container'

    const $h2Title = document.createElement('h2')
    $h2Title.classList.add('donates-container__title')
    $h2Title.textContent = 'Список донатов'
    this.$rootElement.appendChild($h2Title)

    const $divDonates = document.createElement('div')
    $divDonates.classList.add('donates-container__donates')
    this.$rootElement.appendChild($divDonates)

    this.$listContainer = $divDonates
  }

  addItem(item) {
    this.$listContainer.appendChild(item.$rootElement)
  }
}
