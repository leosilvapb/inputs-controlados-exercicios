import React, { useState } from 'react'
import { Form, Input } from '../MainPage/styles'
import MainPage from '../MainPage/MainPage'

const NameForm = ({ nome, idade, email, onChangeNome, onChangeIdade, onChangeEmail, sendData }) => {

  const [confirmacao, setConfirmacao] = useState("")

  const confirmEmail = () => {
    if (confirmacao === email) {
      sendData()
    } else {
      alert("Email diferente, verifique o email!")
    }
  }

  return (
    <Form>
      <label>
        Nome:
        <Input placeholder="Nome" value={nome} onChange={onChangeNome} />
      </label>
      <label>
        Idade:
        <Input placeholder="Idade" value={idade} onChange={onChangeIdade} />
      </label>
      <label>
        E-mail:
        <Input placeholder="usuario@usuario.com" value={email} onChange={onChangeEmail} />
      </label>
      <label>
        Confirmação de e-mail:
        <Input placeholder="usuario@usuario.com" value={confirmacao} onChange={(event) => { setConfirmacao(event.target.value) }} />
      </label>
      <button onClick={confirmEmail}>Enviar dados</button>
    </Form>
  )
}

export default NameForm