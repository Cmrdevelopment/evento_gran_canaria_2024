const ConoceCmrbolsa = () => {
    return (
        <>
            <div className="flex justify-center items-center">
                <div className="text-black flex flex-col md:flex-row justify-center items-center w-full p-5"> 
                    {/* Columna de la izquierda */}
                    <div className="flex-1 md:p-28 p-7">
                        <p className="text-xl md:text-4xl font-bold mb-5">Conoce a Carlos Martín (cmrbolsa)</p>
                        <p className="text-lg md:text-xl max-w-2xl mb-5">
                            Soy Canario, más concretamente, de Gran Canaria y llevo más de 18 años en los mercados financieros. Me dedico a tradear cada día en el SP 500 y otros activos y acciones en diferentes plazos y alguna vez opero divisas.
                        </p>
                        <p className="text-lg md:text-xl max-w-2xl">
                            He enseñado a más de 200 alumnos a entender y comprender el mercado usando lo que yo utilizo a diario. Si quieres aprender cómo funcionan los mercados y llevar tu conocimiento a la práctica al siguiente nivel, entonces no lo dudes, estas charlas-taller son para ti.
                        </p>
                    </div> 
                      
                    {/* Columna de la derecha */}
                    <div className="flex-1 flex flex-col justify-center items-center text-center p-5">
                        {/* Imagen del gráfico debajo del texto */}
                        <img 
                            src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1707864716/cmrbolsa/Presentacion-de-formaciones-de-cmrbolsa-high-1_tawnht.gif" 
                            alt="Gráfico de cmrbolsa" 
                            className="w-full max-w-xs md:max-w-xl mt-3 rounded-xl" 
                        />
                    </div>
                </div>            
            </div>
        </>
    );
}

export default ConoceCmrbolsa;
