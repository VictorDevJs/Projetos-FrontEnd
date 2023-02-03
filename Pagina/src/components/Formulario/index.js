import CampoTexto from '../CampoTexto';
import './Formulario.css';

const Formulario = () => {
  return (
    <section className='formulario'>
      <form>
        <h2>Escreva aqui suas credênciais</h2>
        <CampoTexto label="Nome" placeholder="Digite seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="E-mail" placeholder="Digite seu Email" />
        <CampoTexto label="Telefone" placeholder="Digite seu telefone" />
        <CampoTexto label="CPF" placeholder="Digite seu CPF" />
      </form>

    </section>
  )

}

export default Formulario;