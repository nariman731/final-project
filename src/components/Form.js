import { Component } from '../core/Component'

export class Form extends Component {
  setup(props) {
    this.state = {
      amount: '',
    }
    this.$rootElement = document.createElement('form')
    this.$rootElement.className = 'donate-form'

    const $label = document.createElement('label')
    $label.classList.add('donate-form__input-label')
    $label.textContent = 'Введите сумму в $'

    const $input = document.createElement('input')
    $input.classList.add('donate-form__donate-input')
    $input.name = 'amount'
    $input.type = 'number'
    $input.max = 100
    $input.min = 1
    $input.required = true
    $label.appendChild($input)
    this.$rootElement.appendChild($label)

    const $button = document.createElement('button')
    $button.classList.add('donate-form__submit-button')
    $button.textContent = 'Задонатить'
    $button.type = 'submit'
    $button.disabled = true
    this.$rootElement.appendChild($button)

    this.$input = $input
    this.$button = $button

    this.$input.addEventListener('input', this.handleInput.bind(this))
    this.$rootElement.addEventListener('submit', this.handleSubmit.bind(this))
  }

  get isValid() {
    return this.state.amount >= 1 && this.state.amount <= 100
  }

  handleInput(event) {
    this.state.amount = event.target.value
    console.log(this.isValid)
    this.isValid
      ? (this.$button.disabled = false)
      : (this.$button.disabled = true)
  }

  handleSubmit(event) {
    event.preventDefault()
    if (this.isValid) {
      this.props.onSubmit(parseInt(this.state.amount))
      this.state.amount = ''
      this.$input.value = ''
    }
  }
}
