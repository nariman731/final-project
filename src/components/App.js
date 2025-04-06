import { Component } from '../core/Component'
import { Form } from './Form'
import { List } from './List'
import { ListItem } from './ListItem'

export class App extends Component {
  setup(props) {
    this.state = {
      total: 0,
      donates: [],
    }
    this.$rootElement = document.createElement('div')
    this.$rootElement.className = 'app'

    const $heading = document.createElement('h1')
    $heading.classList.add('total-amount')
    $heading.textContent = 'Итого: $'
    const $span = document.createElement('span')
    $span.textContent = this.state.total
    $heading.appendChild($span)
    this.$rootElement.appendChild($heading)
    this.$total = $span

    const donateForm = new Form({ onSubmit: this.onItemCreate.bind(this) })
    this.$rootElement.appendChild(donateForm.$rootElement)
    const donateList = new List()
    this.$rootElement.appendChild(donateList.$rootElement)
    this.donateList = donateList
  }

  onItemCreate(amount) {
    const item = new ListItem({
      amount,
      onRemove: () => this.onItemRemove(item),
    })
    this.state.donates.push(item)
    this.donateList.addItem(item)
    this.state.total += amount
    this.$total.textContent = this.state.total
  }

  onItemRemove(item) {
    item.$rootElement.remove()
    this.state.donates = this.state.donates.filter((i) => i !== item)
    this.state.total -= item.state.amount
    this.$total.textContent = this.state.total
  }
}
