import { FiTwitter } from 'react-icons/fi'


const Header = () => {
    
    const backgroundImageUrl = "https://res.cloudinary.com/dwbxywvdw/image/upload/v1729336985/cmrbolsa/Sala_trader_con_pantalla_verde_o8zlww.jpg";
  const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const twitterURL = 'https://twitter.com/bison_trade';

    return (
        <>
        <div className="mb-6 bg-cover bg-center bg-no-repeat">
          <h1 className="mt-8 text-5xl font-extrabold text-black text-center sm:text-5xl">
          <span className="inline-block animate-bounce-slow">GRAN CANARIA</span>
          <p className="text-xl font-extrabold text-center sm:text-3xl">
            <span className="text-xl text-gray-400">{"\"Evento presencial\""}</span>
          </p>
          </h1>
          <img className="mt-3 mb-4 mx-auto w-1/3 sm:w-1/12" src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1701727730/Boomers/Logo_a_modificar-removebg-preview_kjo5ld.png" alt="logo Cmrbolsa" />
        </div>
        <div className="bg-white shadow p-8 md:p-36" style={containerStyle}>
          <h1 className="text-indigo-50 text-3xl font-extrabold text-center sm:text-7xl">
            Potencia <span className="text-green-500">tú exito</span> en los mercados
          </h1>
          <p className="text-xl font-extrabold text-center mt-5 sm:text-3xl">
            <span className="text-indigo-50">{"\"Conviértete en un trader de éxito\""}</span>
          </p>
        </div>
        <div className="flex justify-around">
        <div className="flex flex-col items-center">          
          </div>
          <div className="flex flex-col items-center m-5">
          <img className="mb-3 sm:w-48 sm:h-48 w-32 h-32 object-cover rounded-full" src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1707692793/cmrbolsa/Foto_Carlos_fondo_verde_reduced_zwqbcf.png" alt="foto Cmrbolsa" />
          
          <a href="https://twitter.com/cmrbolsa" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-black hover:text-cmrbolsa text-2xl font-bold ">
          <FiTwitter className="w-6 h-6" />
          <span>@cmrbolsa</span>
          </a>
          </div>
          <div className="flex flex-col items-center m-5">
          <img className="mb-3 sm:w-48 sm:h-48 w-32 h-32 object-cover rounded-full" src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1707692427/cmrbolsa/Foto_Miguel_fondo_verde_reduced_qwju3j.png" alt="foto Miguel Angel Sosa"/>
          
          <a href="https://twitter.com/duricof" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-black hover:text-cmrbolsa text-2xl font-bold">
          <FiTwitter className="w-6 h-6" />
          <span>@duricof</span>
          </a>
          </div>
          <div className="flex flex-col items-center m-5">          
          
          </div>
        </div>
        
        <section className="mt-10 flex flex-col items-center sm:flex-row sm:justify-center">
          <h3 className="text-sm font-extrabold text-center mb-2 sm:mr-4 sm:mb-0 sm:text-lg">
            Patrocinado por:
          </h3>
          <a href={twitterURL} target="_blank" rel="noopener noreferrer">
            <img
              src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1694260187/BisonTrade_H_positivo_lineal_p1lu4k.png"
              alt="Logo Bison"
              className="w-48"
              style={{ cursor: 'pointer' }}
            />
          </a>            
        </section>
        <div className="flex justify-center">
        <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=VX7WDXDPMVYBE" target="_blank" rel="noopener noreferrer">
        <button className="mt-3 boton_reserva volvemos-animation">Reservar mi plaza</button>
        </a>
</div>
      </>
    )
}

export default Header;