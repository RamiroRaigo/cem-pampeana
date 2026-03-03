import { Droplet, RefreshCcwDot, AirVent, ThermometerSnowflake, Handshake, Package, ToolCase, Siren, Microscope, Construction, ThermometerSun} from "lucide-react";
import { useEffect, useRef } from 'react';

export default function ContentMantInd() {

const services = [
  {
    icon: Droplet,
    title: "Sistemas de agua enfriada, chillers"  
  },
  {
    icon: ThermometerSnowflake,
    title: "Sistemas de aire acondicionado central"
  },
  {
    icon: RefreshCcwDot,
    title: "Sistemas VRV"
  },
  {
    icon: AirVent,
    title: "Equipos piso-techo, cassette, bajo silueta"
  },
  {
    icon: Construction,
    title: "Motores, compresores y bombas"
  },
  {
    icon: ThermometerSun,
    title: "Calderas y sistemas de calefacción"
  },
]

/* const value = [
  {
    icon: Siren,
    title: "Atención a urgencias"  
  },
  {
    icon: Handshake,
    title: "Servicio personalizado"
  },
  {
    icon: ToolCase,
    title: "Garantía de reparaciones"
  },
  {
    icon: Package,
    title: "Suministro de repuestos"
  },
  {
    icon: Microscope,
    title: "Asesoramiento técnico"
  },
] */

  const boxImgRef = useRef(null);
  const cemTitleRef = useRef(null);

const updateHeight = () => {
  if (cemTitleRef.current && boxImgRef.current) {

    const whiteBoxHeight = cemTitleRef.current.offsetHeight;

    const extraSpace = 120; // espacio arriba y abajo (ajustable)

    const finalHeight = whiteBoxHeight + extraSpace;

    boxImgRef.current.style.height = `${finalHeight}px`;
  }
};

  // useEffect para establecer altura inicial después del renderizado completo
  useEffect(() => {
    // Usar setTimeout para asegurar que todos los elementos estén renderizados
    const timer = setTimeout(() => {
      updateHeight();
    }, 100);

    // Agregar listener para redimensionar ventana
    const handleResize = () => {
      setTimeout(updateHeight, 100);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

return (
    <div className="font-sans leading-relaxed text-gray-800 bg-gray-50 relative">
      
      <div ref={boxImgRef} className="h-[45vh] xsm:h-[42vh] msm:h-[35vh] overflow-hidden">
          <img src="/img/mantenimiento.jpg"  alt="Mantenimiento Industrial" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-opacity-40 flex flex-col items-start justify-start px-1 xs:px-4 md:px-16 z-30">
            <div ref={cemTitleRef} className='my-12 uppercase tracking-wide px-4 md:px-12 font-extrabold py-10  bg-white rounded-3xl flex items-start flex-col msm:flex-row gap-x-6 gap-y-4 msm:gap-y-0' >
                <svg 
                  id="Layer_1" 
                  data-name="Layer 1" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 25.51 23.9"
                  className="w-16 h-16 mt-[10px]"
                >
                  <defs>
                    <style>
                      {`
                        .cls-1 {
                          fill: #091846;
                        }

                        .cls-2 {
                          fill: #58abd3;
                        }

                        .cls-3 {
                          fill: #376d98;
                        }
                      `}
                    </style>
                  </defs>
                  <path 
                    className="cls-2" 
                    d="M1.53,8.39l-1.53.48L3.75,3.66c1-1.39,2.61-2.22,4.33-2.22h10.55c1.51,0,3-.23,4.44-.68l2.44-.76-3.74,5.21c-1,1.4-2.62,2.23-4.34,2.23H7.83c-2.14,0-4.26.32-6.3.96Z"
                  />
                  <path 
                    className="cls-3" 
                    d="M1.53,15.91l-1.53.48,3.75-5.21c1-1.39,2.61-2.22,4.33-2.22h10.55c1.51,0,3-.23,4.44-.68l2.44-.76-3.74,5.21c-1,1.4-2.62,2.23-4.34,2.23H7.83c-2.14,0-4.26.32-6.3.96Z"
                  />
                  <path 
                    className="cls-1" 
                    d="M1.53,23.43l-1.53.48,3.75-5.21c1-1.39,2.61-2.22,4.33-2.22h10.55c1.51,0,3-.23,4.44-.68l2.44-.76-3.74,5.21c-1,1.4-2.62,2.23-4.34,2.23H7.83c-2.14,0-4.26.32-6.3.96Z"
                  />
                </svg>
                <div className='flex flex-col gap-y-4 msm:gap-y-0'>
                  <h1 className='text-myDark text-4xl xs:text-5xl mlx:text-6xl'>CEM PAMPEANA</h1> 
                  <span className="text-lg mlx:text-xl mt-2 px-1 normal-case tracking-normal text-myMedium">
                    Soluciones integrales en ingeniería y mantenimiento
                  </span>   
                </div>  
            </div>
          </div>
      </div>

      {/* Sección Servicios */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <h3 className="text-center text-myDark text-md msm:text-lg mlx:text-xl mb-2 font-bold">NUESTROS SERVICIOS</h3>
          <h2 className="text-3xl msm:text-4xl mlx:text-5xl text-center mb-15 text-blue-800 font-extrabold relative">
            MANTENIMIENTO INDUSTRIAL
            <div className="block w-25 h-1 bg-gradient-to-r from-myCyan to-blue-600 mx-auto mt-5 rounded-sm"></div>
          </h2>
          
          <h3 className="text-xl msm:text-2xl mlx:text-3xl text-my mb-10 pb-4 border-gray-200 text-blue-800 font-bold relative text-center">
            Brindamos el servicio de mantenimiento predictivo, preventivo y 
            correctivo con rapidez en el diagnóstico y en la resolución de fallas. 
          </h3>
                          
          <div className="grid grid-cols-1 msm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
              {services.map((services, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 border border-gray-200 relative overflow-hidden hover:-translate-y-2 hover:shadow-xl before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-myCyan before:to-blue-600 flex flex-col items-center text-center">
                  <div className="mb-5 text-center"><services.icon className="text-myDark w-10 h-10 msm:w-13 msm:h-13" /></div>
                  <h4 className="text-blue-800 text-lg msm:text-xl font-bold mb-4 leading-snug">{services.title}</h4>
                </div>
              ))}
            </div>

          
          {/* Servicios de aire (diseño en tarjetas) */}
          {/* <div className="">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mt-10">

              <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 border border-gray-200 relative overflow-hidden hover:-translate-y-2 hover:shadow-xl before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-blue-800 before:to-blue-600">
                <div className="text-5xl mb-4 text-blue-800 text-center">💧</div>
                <h4 className="text-blue-800 text-xl font-bold mb-4 leading-snug uppercase">Sistemas de agua enfriada</h4>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 border border-gray-200 relative overflow-hidden hover:-translate-y-2 hover:shadow-xl before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-blue-800 before:to-blue-600">
                <div className="text-5xl mb-4 text-blue-800 text-center">❄️</div>
                <h4 className="text-blue-800 text-xl font-bold mb-4 leading-snug uppercase">Aire acondicionado central</h4>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 border border-gray-200 relative overflow-hidden hover:-translate-y-2 hover:shadow-xl before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-blue-800 before:to-blue-600">
                <div className="text-5xl mb-4 text-blue-800 text-center">🔁</div>
                <h4 className="text-blue-800 text-xl font-bold mb-4 leading-snug uppercase">Sistemas VRV</h4>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 border border-gray-200 relative overflow-hidden hover:-translate-y-2 hover:shadow-xl before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-blue-800 before:to-blue-600">
                <div className="text-5xl mb-4 text-blue-800 text-center">🧰</div>
                <h4 className="text-blue-800 text-xl font-bold mb-4 leading-snug uppercase">Equipos piso-techo y cassette</h4>
              </div>
            </div>
          </div>          */}
        </div>
      </section>

      <section className="w-full bg-white py-6 mb-10 mlx:mb-2 mlx:py-16">
        <div className="max-w-[1400px] mx-auto px-5"> 

          {/* Título */}
          <h2 className="text-2xl msm:text-3xl mlx:text-4xl text-my mb-2 pb-4 border-gray-200 text-blue-800 font-bold relative text-center">
            AGREGAMOS VALOR
          </h2>
            <div className="block w-25 h-1 bg-gradient-to-r from-myCyan to-blue-600 mx-auto mt-5 rounded-sm"></div>

          {/* Lista */}
       
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">

            <li className="flex items-start gap-4 ">
              <div className="w-1 h-7 msm:w-1 msm:h-8 mlx:w-1 mlx:h-9 bg-gradient-to-b from-myCyan to-blue-600 rounded-sm"></div>
              <span className="text-3xl"><Siren className="h-7 w-5 msm:h-8 msm:w-6 mlx:h-8 mlx:w-8 text-myDark"></Siren></span>
              <p className="text-xl msm:text-2xl lx:text-3xl font-medium ">
                <span className="text-blue-800 font-bold ">
                  Atención a urgencias
                </span>
              </p>
            </li>

            <li className="flex items-start gap-4">
              <div className="w-1 h-7 msm:w-1 msm:h-8 mlx:w-1 mlx:h-9 bg-gradient-to-b from-myCyan to-blue-600 rounded-sm"></div>
              <span className="text-3xl"><Handshake className="h-7 w-5 msm:h-8 msm:w-6 mlx:h-8 mlx:w-8 text-myDark"></Handshake></span>
              <p className="text-xl msm:text-2xl lx:text-3xl font-medium">
                <span className="text-blue-800 font-bold">
                  Servicio personalizado
                </span>
              </p>
            </li>

            <li className="flex items-start gap-4">              
              <div className="w-1 h-7 msm:w-1 msm:h-8 mlx:w-1 mlx:h-9 bg-gradient-to-b from-myCyan to-blue-600 rounded-sm"></div>
              <span className="text-3xl"><ToolCase className="h-7 w-5 msm:h-8 msm:w-6 mlx:h-8 mlx:w-8 text-myDark"></ToolCase></span>
              <p className="text-xl msm:text-2xl lx:text-3xl font-medium">
                <span className="text-blue-800 font-bold">
                  Garantía de reparaciones
                </span>
              </p>
            </li>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 md:mt-15">
              <li className="flex items-start gap-4 md:justify-self-center">
                <div className="w-1 h-7 msm:w-1 msm:h-8 mlx:w-1 mlx:h-9 bg-gradient-to-b from-myCyan to-blue-600 rounded-sm"></div>
                <span className="text-3xl"><Package className="h-7 w-5 msm:h-8 msm:w-6 mlx:h-8 mlx:w-8 text-myDark"></Package></span>
                <p className="text-xl msm:text-2xl lx:text-3xl font-medium">
                  <span className="text-blue-800 font-bold">
                    Suministro de repuestos
                  </span>
                </p>
              </li>

              <li className="flex items-start gap-4 md:justify-self-center">
                <div className="w-1 h-7 msm:w-1 msm:h-8 mlx:w-1 mlx:h-9 bg-gradient-to-b from-myCyan to-blue-600 rounded-sm"></div> 
                <span className="text-3xl"><Microscope className="h-7 w-5 msm:h-8 msm:w-6 mlx:h-8 mlx:w-8 text-myDark"></Microscope></span>
                <p className="text-xl msm:text-2xl lx:text-3xl font-medium">
                  <span className="text-blue-800 font-bold">
                    Asesoramiento técnico
                  </span>
                </p>
              </li> 
          </div>
        </div>
      </section>

    </div>
);
}