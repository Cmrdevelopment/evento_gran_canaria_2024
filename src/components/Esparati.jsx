const Esparati = () => {

    return (
        <>
        <div className="flex justify-center items-center mb-10">
            <div className="bg-gris text-black flex flex-col md:flex-row justify-center items-center w-full p-5"> 
                {/* Columna de la izquierda */}
                <div className="flex-1 flex flex-col justify-center items-center text-center p-3">
                <p className="text-xl md:text-4xl font-bold mb-4">Este curso-taller es para tí si...</p>
                <p className="text-lg md:text-2xl mb-1">Te identificas con uno de los siguientes grupos:</p>
            </div>

            {/* Columna de la derecha */}
            <div className="flex-1 md:p-28 p-7">
                <p className="text-lg md:text-xl max-w-2xl mb-5">
                <span className="font-bold">Trader o Inversor</span> {'>'} Este taller es ideal para inversores que buscan gestionar de manera eficiente sus propias inversiones. Aprenderás un enfoque práctico y estratégico del trading, adquiriendo las herramientas necesarias para operar en los mercados sin depender de terceros. Domina las claves del análisis técnico y de la gestión de riesgos para tomar decisiones adecudas y mejorar el rendimiento de tu capital.
                </p>
                <p className="text-lg md:text-xl max-w-2xl mb-5">
                <span className="font-bold">Personas con Interés en los Mercados Financieros</span> {'>'} Seas de un sector u otro si te interesan los mercados financieros y te interesa conocer como es el trading, este taller es perfecto para ti. Te enseñaremos de forma clara y práctica cómo analizar los mercados, directo al grano.
                </p>
                <p className="text-lg md:text-xl max-w-2xl mb-5">
                <span className="font-bold">Apasionado del Trading que Busca Mejorar su Nivel</span> {'>'} Si llevas un tiempo operando pero sientes que puedes mejorar, este taller te ofrece las herramientas necesarias para ajustar tu estrategia y obtener resultados más consistentes. Descubre cómo dominar los mercados con un enfoque basado en el análisis real y la gestión emocional, clave para progresar como trader y evitar errores comunes.
                </p>
            </div>            
        </div>            
        </div>
        </>
    )
}

export default Esparati;