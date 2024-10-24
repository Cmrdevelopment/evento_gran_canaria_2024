const QueEncontraras = () => {

    return (
        <>
        <div className="flex justify-center items-center">
            <div className=" bg-gris text-black flex flex-col md:flex-row justify-center items-center w-full p-5"> 
                {/* Columna de la izquierda */}
                <div className="flex-1 flex flex-col justify-center items-center text-center p-5">
                <p className="text-xl md:text-3xl font-bold mb-4">¿Que encontrarás en estas CHARLAS-TALLERES?</p>
                <p className="text-xl md:text-2xl mb-4">Serán 2 eventos:</p>
             {/* Imagen del gráfico debajo del texto */}
             <img src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1707864418/cmrbolsa/smartmockups_kxxv44a5-bis-a-bis_reduced_rpkost.jpg" alt="Gráfico de cmrbolsa" className="w-full max-w-xs md:max-w-xs mt-3 rounded-xl" />
            </div>

            {/* Columna de la derecha */}
            <div className="flex-1 ">
                <p className="text-lg md:text-xl max-w-2xl mb-5">
                <span className="font-bold">Evento GRATUITO</span> {'>'} Una charla de 2 horas de duración, gratuita, donde veremos todos los entresijos de los mercados, la situación actual de los graficos, como analizar acciones y tener una buena gestión emocional y de capital.
                </p>
                
                <p className="text-lg md:text-xl max-w-2xl mb-5">
                <span className="font-bold">Taller 3 días</span> {'>'} En estos talleres, de 4-5 horas cada día, trataremos todo lo necesario para entender cómo y porque se mueven los mercados, la acción de los profesionales o manos fuertes que manejan el cotarro, cómo conocer donde están y que debemos esperar para acompañarlos en sus movimientos.
                </p>
            </div>            
        </div>            
        </div>
        </>
    )
}

export default QueEncontraras;