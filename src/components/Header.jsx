import { useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';

return(

    // <header className=" flex items-start gap-6 mb-3 pt-16 pl-24 bg-gray-500/80 rounded-r-3xl backdrop-blur-sm py-12" aria-label="Encabezado">
    //     <div className="w-1 gap-16px h-[300px] rounded-md bg-gradient-to-b from-sky-400 to-transparent "  
    //       aria-hidden="true"/>
    //       <div className="space-y-4">
         
    //         <h1 className='text-white text-[50px] font-extrabold tracking-wide'>
    //            CEM <br /> PAMPEANA
    //         </h1>
    //       <div className="mt-6 max-w-xl">
    //           <p className="inline-block text-left text-[24px] font-bold tracking-[3.2px] text-sky-400">
    //             Soluciones integrales en <br/>ingeniería y mantenimiento
    //           </p>
    //       </div>
    //     </div>
    //   </header>
    <>
      <header>
        <h1 className='text-white text-5xl  tracking-wide'>
          {/* CEM PAMPEANA */}
        </h1>
      </header>
    </>
    );
}