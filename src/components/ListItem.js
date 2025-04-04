import { Component } from '../core/Component'

export class ListItem extends Component {
  setup(props) {
    this.state = {
      id: Date.now(),
      date: new Date(),
      amount: props.amount,
    }

    const { date, amount } = this.state
    const pad = (n) => n.toString().padStart(2, '0')
    const formattedDate = `${pad(date.getDate())}/${pad(
      date.getMonth() + 1
    )}/${date.getFullYear()}, ${pad(date.getHours())}:${pad(
      date.getMinutes()
    )}:${pad(date.getSeconds())}`

    this.$rootElement = document.createElement('div')
    this.$rootElement.className = 'donate-item'

    const textNode = document.createTextNode(`${formattedDate} - `)

    const bold = document.createElement('b')
    bold.textContent = `$${amount}`

    this.$rootElement.appendChild(textNode)
    this.$rootElement.appendChild(bold)
  }
}
