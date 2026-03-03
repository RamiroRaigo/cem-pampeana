import { ChartNoAxesCombined, ChartSpline, ChevronsUp, ClipboardList, Globe, Loader, PersonStanding, TimerReset, Wrench } from "lucide-react"
import { useEffect, useRef } from 'react';

export default function ContentIngIndustrial() {

const proyectos = [
  {
    icon: ChartSpline,
    title: "Análisis de mejora de procesos productivos"    
  },
  {
    icon: Loader,
    title: "Rediseño de layout industrial y flujo de materiales"
  },
  {
    icon: Wrench,
    title: "Revamping de máquinas - herramientas y automatización"
  },
  {
    icon: TimerReset,
    title: "Eliminación de tiempos improductivos y cuellos de botella"
  },
  {
    icon: PersonStanding,
    title: "Mejora de disponibilidad de equipos"
  },
]

const calidad = [
  {
    icon: Globe,
    title: "Implementación de sistema de gestión de calidad ISO 9001"  
  },
  {
    icon: ClipboardList,
    title: "Análisis de defectos y mejora continua"
  },
  {
    icon: ChartNoAxesCombined,
    title: "Control estadístico de procesos"
  },
  {
    icon: ChevronsUp,
    title: "Auditorías internas y capacitación en calidad"
  },
]

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

    return(
        <div className="font-sans leading-relaxed text-gray-800 bg-gray-50 relative">
        
        <div ref={boxImgRef} className="h-[45vh] xsm:h-[42vh] msm:h-[35vh] overflow-hidden">
          <img src="/img/ingenieria-industrial.jpg"  alt="Electromecánica" className="w-full h-full object-cover" />
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
            CONSULTORÍA DE INGENIERÍA INDUSTRIAL
            <div className="block w-25 h-1 bg-gradient-to-r from-myCyan to-blue-600 mx-auto mt-5 rounded-sm"></div>
          </h2>

          {/* PRODUCTIVIDAD Y EFICIENCIA OPERATIVA */}
          <div className="mb-20">

            <h3 className="text-xl msm:text-2xl mlx:text-3xl text-my mb-10 pb-4 border-gray-200 text-blue-800 font-bold relative">
              <span className="text-black text-xl msm:text-2xl mr-4">◈</span>PRODUCTIVIDAD Y EFICIENCIA OPERATIVA
            </h3>

            <div className="grid grid-cols-1 msm:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">
              {proyectos.map((proyecto, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 border border-gray-200 relative overflow-hidden hover:-translate-y-2 hover:shadow-xl before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-myCyan before:to-blue-600 flex flex-col items-center text-center">
                  <div className="mb-5 text-center"><proyecto.icon className="text-myDark w-10 h-10 msm:w-13 msm:h-13" /></div>
                  <h4 className="text-blue-800 text-lg msm:text-xl font-bold mb-4 leading-snug">{proyecto.title}</h4>
                </div>
              ))}
            </div>
            

            {/* <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">
             
              <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 border border-gray-200 relative overflow-hidden hover:-translate-y-2 hover:shadow-xl before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-blue-800 before:to-blue-600">
                <div className="text-4xl mb-5 text-center">📊</div>
                <h4 className="text-blue-800 text-xl font-bold mb-4 leading-snug">ANÁLISIS DE MEJORA DE PROCESOS PRODUCTIVOS</h4>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 border border-gray-200 relative overflow-hidden hover:-translate-y-2 hover:shadow-xl before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-blue-800 before:to-blue-600">
                <div className="text-4xl mb-5 text-center">📊</div>
                <h4 className="text-blue-800 text-xl font-bold mb-4 leading-snug">REDISEÑO DE LAYOUT INDUSTRIAL Y FLUJO DE MATERIALES</h4>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 border border-gray-200 relative overflow-hidden hover:-translate-y-2 hover:shadow-xl before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-blue-800 before:to-blue-600">
                <div className="text-4xl mb-5 text-center">🔧</div>
                <h4 className="text-blue-800 text-xl font-bold mb-4 leading-snug">REVAMPING DE MÁQUINAS - HERRAMIENTAS Y AUTOMATIZACIÓN</h4>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 border border-gray-200 relative overflow-hidden hover:-translate-y-2 hover:shadow-xl before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-blue-800 before:to-blue-600">
                <div className="text-4xl mb-5 text-center">⚡</div>
                <h4 className="text-blue-800 text-xl font-bold mb-4 leading-snug">ELIMINACIÓN DE TIEMPOS IMPRODUCTIVOS Y CUELLOS DE BOTELLA</h4>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 border border-gray-200 relative overflow-hidden hover:-translate-y-2 hover:shadow-xl before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-blue-800 before:to-blue-600">
                <div className="text-4xl mb-5 text-center">📋</div>
                <h4 className="text-blue-800 text-xl font-bold mb-4 leading-snug">MEJORA DE DISPONIBILIDAD DE EQUIPOS</h4>
              </div>
            </div> */}
          </div>

          {/* CALIDAD */}
          <div className="max-w-6xl mx-auto px-5">
            <h3 className="text-xl msm:text-2xl mlx:text-3xl text-my mb-10 pb-4 border-gray-200 text-blue-800 font-bold relative">
             <span className="text-black text-xl msm:text-2xl mr-4">◈</span>CALIDAD
            </h3>

            <div className="grid grid-cols-1 msm:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">
              {calidad.map((calidad, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 border border-gray-200 relative overflow-hidden hover:-translate-y-2 hover:shadow-xl before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-myCyan before:to-blue-600 flex flex-col items-center text-center">
                  <div className="mb-5 text-center"><calidad.icon className="text-myDark w-10 h-10 msm:w-13 msm:h-13" /></div>
                  <h4 className="text-blue-800 text-lg msm:text-xl font-bold mb-4 leading-snug">{calidad.title}</h4>
                </div>
              ))}
            </div>

            {/* <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">
              
              <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 border border-gray-200 relative overflow-hidden hover:-translate-y-2 hover:shadow-xl before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-blue-800 before:to-blue-600">
                <div className="text-4xl mb-5 text-center">💼</div>
                <h4 className="text-blue-800 text-xl font-bold mb-4 leading-snug">IMPLEMENTACIÓN DE SISTEMA DE GESTIÓN DE CALIDAD ISO 9001</h4>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 border border-gray-200 relative overflow-hidden hover:-translate-y-2 hover:shadow-xl before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-blue-800 before:to-blue-600">
                <div className="text-4xl mb-5 text-center">🤝</div>
                <h4 className="text-blue-800 text-xl font-bold mb-4 leading-snug">ANÁLISIS DE DEFECTOS Y MEJORA CONTINUA</h4>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 border border-gray-200 relative overflow-hidden hover:-translate-y-2 hover:shadow-xl before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-blue-800 before:to-blue-600">
                <div className="text-4xl mb-5 text-center">💰</div>
                <h4 className="text-blue-800 text-xl font-bold mb-4 leading-snug">CONTROL ESTADISTICO DE PROCESOS</h4>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 border border-gray-200 relative overflow-hidden hover:-translate-y-2 hover:shadow-xl before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-blue-800 before:to-blue-600">
                <div className="text-4xl mb-5 text-center">🔬</div>
                <h4 className="text-blue-800 text-xl font-bold mb-4 leading-snug">AUDITORÍAS INTERNAS Y CAPACITACIÓN EN CALIDAD</h4>
              </div>
            </div> */}
          </div>
        </div>
      </section>
        </div>

    )
}