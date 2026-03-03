import { BrickWall, Brush, ChartBar, CirclePile, Coins, FolderDot, LayoutTemplate, Notebook ,NotepadText,SearchAlert, ShieldAlert   } from "lucide-react";
import { useEffect, useRef } from 'react';

const dataProyect = [
  {
    title: 'Diseño Integral',
    icons: Brush
  },
  {
    title: 'Estudios de Factibilidad Técnico-Económico',
    icons: NotepadText 
  },
  {
    title: 'Ingeniería Básica e Ingeniería de Detalle',
    icons: CirclePile
  },
  {
    title: 'Optimización de Proyectos',
    icons: LayoutTemplate 
  },
  {
    title: 'Elaboración de Documentación para Licitación, pliegos de Contratación y de Especificaciones',
    icons: Notebook 
  },
  {
    title: 'Análisis de Alternativas',
    icons: SearchAlert 
  }
]
const dataObras = [
  {
    icon: ShieldAlert,
    title: "Direccion ejecutiva, supervisión y control de obras, instalaciones y montajes"
  },
  {
    icon: ChartBar,
    title: "Análisis técnico económico de las ofertas y asesoramiento para adjudicaciones"
  },
  {
    icon: FolderDot,
    title: "Coordinación de Subcontratos"
  },
  {
    icon: Coins,
    title: "Control de Costos y Certificaciones"
  },
  {
    icon: BrickWall,
    title: "Control de Calidad de Materiales"
  },
]

const ContentCivil = () => {

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
    
    <div className="font-sans leading-relaxed  bg-blue-50 relative">
      
      <div ref={boxImgRef} className="h-[45vh] xsm:h-[42vh] msm:h-[35vh] overflow-hidden">
        < img src="/img/ingenieria-civil.jpg"  alt="Ingeniería Civil" className="w-full h-full object-cover" />
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
          <h2 className=" text-3xl msm:text-4xl mlx:text-5xl text-center mb-15 text-blue-800 font-extrabold relative">
            CONSULTORÍA DE INGENIERÍA CIVIL
            <div className="block w-25 h-1 bg-gradient-to-r from-myCyan to-blue-600 mx-auto mt-5 rounded-sm"></div>
          </h2>
          
          {/* Proyectos Civiles */}
          <div className="mb-20">
            <h3 className="text-xl msm:text-2xl mlx:text-3xl text-my mb-10 pb-4 border-gray-200 text-blue-800 font-bold relative">
              <span className="text-black text-xl msm:text-2xl mr-4">◈</span>PROYECTOS CIVILES
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">
              {dataProyect.map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 border border-gray-200 relative overflow-hidden hover:-translate-y-2 hover:shadow-xl before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-myCyan before:to-blue-600 flex flex-col items-center text-center">
                  <div className="mb-5 text-center"><item.icons className="text-myDark w-10 h-10 msm:w-13 msm:h-13" /></div>
                  <h4 className="text-blue-800 text-lg msm:text-xl font-bold mb-4 leading-snug">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>

          

          {/* GERENCIAMIENTO DE OBRAS */}
          <div className="mb-20">
            <h3 className="text-xl msm:text-2xl mlx:text-3xl text-my mb-10 pb-4 border-gray-200 text-blue-800 font-bold relative">
              <span className="text-black text-xl msm:text-2xl mr-4">◈</span>GERENCIAMIENTO DE OBRAS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">
              {dataObras.map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 border border-gray-200 relative overflow-hidden hover:-translate-y-2 hover:shadow-xl before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-myCyan before:to-blue-600 flex flex-col items-center text-center">
                  <div className="mb-5 text-center"><item.icon className="text-myDark w-10 h-10 msm:w-13 msm:h-13" /></div>
                  <h4 className="text-blue-800 text-lg msm:text-xl font-bold mb-4 leading-snug">{item.title}</h4>
                </div>
              ))}
             

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentCivil;
