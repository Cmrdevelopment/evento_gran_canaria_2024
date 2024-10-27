import { FaCheck } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa";


const handleCharlaClick = () => {
  window.location.href = 'https://mentoriapev.com/finalizar-compra/?add-to-cart=5911';
};

const handleTallerClick = () => {
  window.location.href = 'https://mentoriapev.com/finalizar-compra/?add-to-cart=5910';
};

const PreciosTalleres = () => {
  return (
    <>
      <div className="md:mt-7 ">
        <div id="opcionesMembresia" className="pl-3 pr-3 font-bold text-center mt-5">
          <h1 className="xl:text-6xl text-3xl font-bold">¿Te vienes a la charla o a los dos eventos?</h1>
          <div className="m-5">
            <p>Apuntate a <span className="text-cmrbolsa">la charla GRATUITA y/o al TALLER de 3 días donde estaremos aprendiendo a analizar el mercado a través del PEV</span></p>
          </div>
        </div>
      </div>

      <div className="md:flex md:flex-row md:justify-center md:gap-5 flex flex-col gap-5 md:ml-16 md:mr-16 ml-5 mr-5 ite">
        {/* Primera tabla */}
        <div className="border-2 border-black ">
          <div className="text-center">
            <h1 className="md:text-3xl text-2xl font-bold m-5 text-center">CHARLA GRATUITA 29 NOVIEMBRE</h1>
            <h1 className="flex justify-center items-center font-semibold text-white bg-cmrbolsa md:text-2xl text-md">Charla GRATUITA</h1>
            <h5 className="text-lg bg-cmrbolsa text-white md:h-9 h-20 p-2 md:pb-9 text-center">Se abona <span className="text-black font-bold">5 Euros</span> que se devolveran el día del evento al presentarte en la charla</h5>
            <h2 className="md:text-7xl text-5xl font-bold text-cmrbolsa m-5">
            <h2 className="text-xl font-bold text-cmrbolsa">Reserva tú plaza</h2>
              <span className="text-black text-lg vertical-align-top ml-5 "></span>
              5,00
              <span className="text-2xl text-cmrbolsa font-bold"> €</span>
            </h2>
            <h5 className="mt-2 font-semibold md:mb-28 w-full max-w-xl mx-auto text-center">
            Este importe <span className="text-cmrbolsa text-2xl font-bold">se devolverá</span> el día del evento al presentarte en la charla
            </h5>
          </div>
          <div className="flex flex-col items-center gap-5">
            <h5 className="text-2xl text-white font-semibold bg-cmrbolsa w-full p-2 text-center">¿Qué incluye?</h5>
            <h3 className="flex items-center md:gap-2 gap-1"><FaCheck />Aprende a leer los gráficos</h3>
            <h3 className="flex items-center md:gap-2 gap-1"><FaCheck />Curso básico de bolsa</h3>
            <h3 className="flex items-center md:gap-2 gap-1"><FaCheck />3 Sorteo de un mes de sala gratis</h3>


            <button onClick={handleCharlaClick} className="boton_reserva boton_animation bg-cmrbolsa uppercase pt-2">
              Me apunto
            </button>
          </div>
        </div>

        {/* Segunda tabla */}
        <div className="border-2 border-black ">
          {/* <div className="">
            <h1 className="md:text-3xl text-2xl font-bold m-5 text-center">TALLER 3 días, 11, 12 y 13 de DICIEMBRE</h1>
            <h1 className="flex justify-center items-center font-semibold text-white bg-cmrbolsa md:text-2xl text-md">3 días de taller más charla gratuita</h1>
            <h5 className="text-lg bg-cmrbolsa text-white h-9 p-2 md:pb-9 text-center">Si te apuntas <span className="text-black font-bold">el taller de 3 días</span> no hace falta que te apuntes a la charla gratuita</h5>
            <h2 className="md:text-7xl text-5xl font-bold text-cmrbolsa m-5 text-center">
              <span className="text-black text-lg vertical-align-top"></span>
              495,00
              <span className="text-2xl text-cmrbolsa font-bold"> €</span>
            </h2>
            <h2 className="md:text-xl text-md font-bold text-cmrbolsa text-center ml-5 mr-5">
              <span className="text-black text-lg vertical-align-top"></span>
              Ahora
            </h2>
            <h2 className="md:text-xl text-md font-bold text-cmrbolsa text-center ml-5 mr-5 ">
              <span className="text-black text-lg vertical-align-top "></span>
              195,00
              <span className="text-2xl text-cmrbolsa font-bold"> €</span>
              
              <span className="ml-3 text-gray-300 text-lg vertical-align-top ">
              225,00 </span>
              <span className="text-2xl text-gray-300 font-bold"> €</span>
              <span className=" ml-3 text-gray-300 text-lg vertical-align-top">
              260,00 </span>
              <span className="text-2xl text-gray-300 font-bold"> €</span>
              <span className=" ml-3 text-gray-300 text-lg vertical-align-top">
              295,00 </span>
              <span className="text-2xl text-gray-300 font-bold"> €</span>
              <span className=" ml-3 text-gray-300 text-lg vertical-align-top">
              325,00 </span>
              <span className="text-2xl text-gray-300 font-bold"> €</span>
              <span className=" ml-3 text-gray-300 text-lg vertical-align-top">
              380,00 </span>
              <span className="text-2xl text-gray-300 font-bold"> €</span>
              <span className=" ml-3 text-gray-300 text-lg vertical-align-top">
              435,00 </span>
              <span className="text-2xl text-gray-300 font-bold"> €</span>
            </h2>
            <h5 className="mt-2 font-semibold mb-5 w-full text-center">
            <h5 className="mt-2 font-semibold mb-5 w-full max-w-xl mx-auto text-center">
            Si te apuntas antes del 27 OCTUBRE pagas <span className="text-cmrbolsa text-2xl font-bold">SOLO 195 €</span> 
            <h5 className="mt-2 font-semibold mb-5 w-full max-w-xl mx-auto text-center">
            Cada semana aumentará el precio así que cuanto antes te apuntes menos pagarás
            
            </h5>
            </h5>
            </h5>
          </div> */}
          <div className="border-2 border-black">
  <div className="">
    <h1 className="md:text-3xl text-2xl font-bold m-5 text-center">TALLER 3 días, 11, 12 y 13 de DICIEMBRE</h1>
    <h1 className="flex justify-center items-center font-semibold text-white bg-cmrbolsa md:text-2xl text-md">
      3 días de taller más charla gratuita
    </h1>
    <h5 className="text-lg bg-cmrbolsa text-white md:h-9 h-20 p-2 md:pb-9 text-center">
      Si te apuntas <span className="text-black font-bold">el taller de 3 días</span> no hace falta que te apuntes a la charla gratuita
    </h5>
    {/* <h2 className="md:text-7xl text-5xl font-bold text-cmrbolsa m-5 text-center">
      <span className="text-black text-lg vertical-align-top"></span>
      495,00
      <span className="text-2xl text-cmrbolsa font-bold"> €</span>
    </h2> */}
    
    {/* Contenedor flexible para "Ahora" y el precio 195,00 */}
    <div className="flex flex-col text-center">
      <h2 className="text-xl font-bold text-cmrbolsa mt-5">Ahora</h2>
      <h2 className="md:text-7xl text-5xl font-bold text-cmrbolsa text-center">
        195,00
        <span className="text-2xl text-cmrbolsa font-bold"> €</span>
      </h2>
    </div>

    {/* Precios tachados */}
    <h2 className="md:text-xl text-md font-bold text-cmrbolsa text-center ml-5 mr-5 mt-1">
      <span className="line-through text-gray-300">225,00 €</span>
      <span className="ml-3 line-through text-gray-300">260,00 €</span>
      <span className="ml-3 line-through text-gray-300">295,00 €</span>
      <span className="ml-3 line-through text-gray-300">325,00 €</span>
      <span className="ml-3 line-through text-gray-300">380,00 €</span>
      <span className="ml-3 line-through text-gray-300">435,00 €</span>
    </h2>

    <h5 className="mt-2 font-semibold mb-5 w-full text-center">
      <h5 className="mt-2 font-semibold mb-5 w-full max-w-xl mx-auto text-center">
        Si te apuntas antes del 27 OCTUBRE pagas <span className="text-cmrbolsa text-2xl font-bold">SOLO 195 €</span>
      </h5>
      <h5 className="mt-2 font-semibold mb-5 w-full max-w-xl mx-auto text-center">
        Cada semana aumentará el precio así que cuanto antes te apuntes menos pagarás
      </h5>
    </h5>
  </div>
</div>

          <div className="flex flex-col items-center gap-5">
            <h5 className="text-2xl text-white font-semibold bg-cmrbolsa w-full p-2 text-center">¿Qué incluye?</h5>
            <h3 className="flex items-center md:gap-2 gap-1"><FaCheck />Incluye la charla del día 29 Noviembre</h3>
            <h3 className="flex items-center md:gap-2 gap-1"><FaCheck />Incluye 2 meses de sala gratuita</h3>
            <h3 className="flex items-center md:gap-2 gap-1"><FaCheck />Sesión 1:1 conmigo vía zoom</h3>
            <h3 className="flex items-center md:gap-2 gap-1"><FaCheck />Curso básico de bolsa</h3>
            <h3 className="flex items-center md:gap-2 gap-1"><FaCheck />3 días de taller los días 11, 12 y 13</h3>
            <h3 className="flex items-center md:gap-2 gap-1"><FaCheck />De 16:30 a 21:00 horas</h3>
            <h3 className="flex items-center md:gap-2 gap-1"><FaCheck />Mercado en vivo y operativa</h3>
            <h3 className="flex items-center md:gap-2 gap-1"><FaCheck />Incluye ASADERO el viernes 13</h3>

            <button onClick={handleTallerClick} className="boton_reserva bg-cmrbolsa uppercase pt-2">
              Me apunto
            </button>

          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-10">
        <p className="text-xl font-semibold mb-3 text-center">
          ¿Tienes dudas o preguntas? ¡Envíanos un mensaje por WhatsApp!
        </p>
        <a 
          href="https://wa.me/34626787673" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-600 transition-colors"
        >
          <FaWhatsapp className="text-2xl" />
          Enviar mensaje
        </a>
      </div>
    </>
  );
};

export default PreciosTalleres;
