
const Alerta = ( {alerta} ) => {

    return (
        <div className={`${alerta.error ? 'bg-red-700' : 'bg-color4'} text-center p-3 rounded-lg text-white font-bold text-sm -mt-11`}>
            { alerta.msg }
        </div>
    )
}

export default Alerta;