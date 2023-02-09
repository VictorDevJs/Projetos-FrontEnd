import CampoTexto from '../CampoTexto';
import './Formulario.css';

const Formulario = () => {
  return (
    <section className='formulario'>
      <form>
        <h2>Experiências</h2>
        <h3>Keeggo Technology (2022)</h3>
        <h4>Desenvolvimento Java</h4>
        <CampoTexto label="Nome" />
      </form>

    </section>
  )

}

export default Formulario;