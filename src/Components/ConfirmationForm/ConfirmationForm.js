import React from "react";
import { Form } from "../MainPage/styles";

const ConfirmationForm = ({ dataNascimento, telefone, cidade, sendForm, onChangeDataNascimento, onChangeTelefone, onChangeCidade }) => {
  return (
    <Form>
      <input placeholder="Data de nascimento" value={dataNascimento} onChange={onChangeDataNascimento} />
      <input placeholder="Telefone" value={telefone} onChange={onChangeTelefone} />
      <input placeholder="Cidade" value={cidade} onChange={onChangeCidade} />
      <button onClick={sendForm}>Enviar dados</button>
    </Form>
  );
};

export default ConfirmationForm;