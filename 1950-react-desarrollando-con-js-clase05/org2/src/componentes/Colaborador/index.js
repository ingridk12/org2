import "./Colaborador.css"

const Colaborador = (props) => {
    const { nombre, puesto, foto, equipo, id } = props.datos
    const { colorPrimario, eliminarColaborador } = props
    return <div className="colaborador">
        <span className="eliminar" onClick={() =>eliminarColaborador(id)}>x</span>
        <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
        </div>
    </div>
}

export default Colaborador