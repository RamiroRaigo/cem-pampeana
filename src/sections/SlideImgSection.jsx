'use client';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';


function SlideImgSection() {
  const images = [
    //{ src: "/img/ingenieria-civil.jpg", title: "Ingeniería Civil", alt: "Ingeniería Civil", route: "/ingenieria-civil"},
    { src: "/img/ingenieria-civil.jpg", title: "Ingeniería Civil", alt: "Ingeniería Civil", route: "/ingenieria-civil"},
    { src: "/img/ingenieria-electromecanica.jpeg", title: "Ingeniería Electromecánica", alt: "Ingeniería Electromecánica", route: "/ingenieria-electromecanica"},
    //{ src: "/img/ingenieria-industrial.jpg", title: "Ingeniería Industrial", alt: "Ingeniería Industrial", route: "/ingenieria-industrial"},
    { src: "/img/ingenieria-industrial.jpg", title: "Ingeniería Industrial", alt: "Ingeniería Industrial", route: "/ingenieria-industrial"},
    { src: "/img/mantenimiento.jpg", title: "Mantenimiento Industrial", alt: "Mantenimiento", route: "/mantenimiento-industrial"}
  ];

  const [queryButtom, setQueryButtom] = useState(() => {
    if (window.innerWidth < 550) {
      return false;
    } else {
      return true;
    }
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const timerRef = useRef(null);
  const boxImgRef = useRef(null);
  const boxDataHomeRef = useRef(null);
  const cemTitleRef = useRef(null);
  const blackBoxRef = useRef(null);

  // Función para calcular y establecer altura dinámica
  const updateHeight = () => {
    if (cemTitleRef.current && blackBoxRef.current && boxImgRef.current) {
      const sumHeight = cemTitleRef.current.offsetHeight + blackBoxRef.current.offsetHeight + 40 + 48 + 200;
      boxImgRef.current.style.height = `${sumHeight}px`;
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

  // useEffect adicional para recalcular cuando cambie el índice de imagen
  useEffect(() => {
    setTimeout(updateHeight, 100);
  }, [currentImageIndex]);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  // Debug effect para ver cambio vr xs de estado

  const previousImage = () => {
    console.log('Previous button clicked! Current index:', currentImageIndex);
    setCurrentImageIndex(prev => {
      const newIndex = prev === 0 ? images.length - 1 : prev - 1;
      console.log('Setting new index to:', newIndex);
      return newIndex;
    });
    restartTimer();
  };

  const nextImage = () => {
    console.log('Next button clicked! Current index:', currentImageIndex);
    setCurrentImageIndex(prev => {
      const newIndex = prev === images.length - 1 ? 0 : prev + 1;
      console.log('Setting new index to:', newIndex);
      return newIndex;
    });
    restartTimer();
  };

  // Avanza la slide (usada por el timer)
  const nextSlide = () => {
    setCurrentImageIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Función para iniciar el timer
  const startTimer = () => {
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };

  // Función para reiniciar el timer
  const restartTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    startTimer();
  };

  // Función para cambiar a una imagen específica
  const goToImage = (index) => {
    setCurrentImageIndex(index);
    restartTimer();
  };



  return (  
    
    <div className='w-full'>              {/* Ajustar */}
      <section className="relative w-full ">        
        <div 
          ref={boxImgRef}
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
        
              {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover shrink-0"
              />
            ))}
          
        </div>
        
        <div 
          ref={boxDataHomeRef}
          className="absolute inset-0 bg-opacity-40 flex flex-col items-start justify-start px-1 xs:px-4 md:px-16 z-30 "> 
            <div className='my-12 uppercase tracking-wide px-4 md:px-12 font-extrabold py-10  bg-white rounded-3xl flex items-start flex-col msm:flex-row gap-x-6 gap-y-4 msm:gap-y-0' >
              <div>
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
              </div> 
              <div className='flex flex-col gap-y-4 msm:gap-y-0' ref={cemTitleRef}>
                <h1 className='text-myDark text-4xl xs:text-5xl mlx:text-6xl'>CEM PAMPEANA</h1> 
                <span className="text-lg mlx:text-xl mt-2 px-1 normal-case tracking-normal text-myMedium">
                  Soluciones integrales en ingeniería y mantenimiento
                </span>   
              </div> 
            </div>
          <div className="relative text-left text-white px-4 md:px-12 py-12 bg-black/70 rounded-3xl backdrop-blur-sm border-4 border-myLight-lighter "
            ref={blackBoxRef}
          >
            <div className={`absolute top-8 ${queryButtom ? 'right-8' : 'left-8'} flex gap-4 z-40 flex-col justify-center items-center`}>
              <div className='flex gap-4'>
                  <button 
                    onClick={previousImage} 
                    className="w-16 h-16 bg-myMedium-lighter backdrop-blur-sm border-2 border-myCyan rounded-lg flex items-center justify-center text-white hover:bg-myMedium-darker transition-all duration-300 shadow-lg hover:cursor-pointer"
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button 
                onClick={nextImage} 
                className="w-16 h-16 bg-myMedium-lighter backdrop-blur-sm  border-2 border-myCyan rounded-lg flex items-center justify-center text-white hover:bg-myMedium-darker transition-all duration-300 shadow-lg  hover:cursor-pointer"
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
              </div>

              {/* Indicadores de slide */}
                <div className="flex gap-2 z-40">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-white scale-125' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                    />
                  ))}
                </div>
            </div>


            {/* <div className="uppercase tracking-wide text-2xl font-semibold mb-1 text-blue-300">
              CEM PAMPEANA
            </div> */} 
            <h2 className="font-bold mb-8 leading-tight mt-[100px] msm:mt-0">
              <span className="text-4xl mlx:text-5xl">{images[currentImageIndex].title}</span>
            </h2>
              <Link to={images[currentImageIndex].route}>
                <button className="rounded-lg border border-transparent px-5 py-3 text-base font-medium font-inherit bg-gray-800 cursor-pointer transition-colors duration-200 ease-in-out hover:border-indigo-400 focus:outline-none focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:-webkit-focus-ring-color inline-flex items-center text-white uppercase tracking-wide shadow-xl hover:shadow-blue-500/25 ">
                  <span className="mr-3 text-lg mlx:text-xl">Conozca Más</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </Link>
             <main className=" text-white leading-[1.65] tracking-[0.15px] text-2xl mlx:text-3xl max-w-full mb-6 font-sans [word-spacing:1.6px] [hyphens:none] grid gap-x-8 mt-8  lxg:grid-cols-2 gap-y-8 lxg:gap-y-0" >
                <p className='block '> 
                  Somos  un equipo  de ingenieros con <span className=' shadow-lg shadow-blue-500/25'> amplia experiencia en consultoría técnica </span>para empresas.
                </p>

                <p className='block '>
                  Brindamos soporte al desarrollo industrial de nuestros clientes a través de un <span className='shadow-lg shadow-blue-500/25'>servicio personalizado, flexible y orientado</span> a resultados.
                </p>
              </main>
          </div>
        </div>
      </section>

          {/* Sectores que atendemos - Solo en SlideImgSection */}
    <section className="bg-gray-200 py-12">
      <div className="max-w-7xl mx-auto">
        <div className=" bg-white rounded-lg shadow-lg p-8 hover:border-blue-900 transition-all duration-300 hover:shadow-blue-500/25">
          <h2 className="text-3xl msm:text-4xl mlx:text-[35px] font-bold text-myDark mb-4">SECTORES QUE ATENDEMOS</h2>
          <ul className="text-lg mlx:text-[20px] grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 font-bold tracking-[3.2px]">
            {sectors.map((sector, index) => (
              <li key={index} className="py-2 transition-all duration-300 hover:translate-x-2 bg-myMedium text-white rounded-3xl pl-4">● {sector}</li>
            ))}
          </ul>
        </div>
      </div>
      
    </section>
  </div>
  );
}

export default SlideImgSection;

const sectors =[
  'Oil & Gas',
  'Minería',
  'Automotrices',
  'Farma',
  'Salud',
  'Industrias',
  'Shoppings',
  'Retail'
]