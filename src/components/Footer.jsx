import {PhoneCall, Mails, Copyright} from 'lucide-react';

export default function Footer(){

    return(
        <footer className="bg-myDark text-white  pt-12 px-4  lg:px-16">
          <hr className="mb-5"></hr>
            <div className="grid grid-cols-1 md:grid-cols-2 lx:grid-cols-3">
              <div className="mb-10">
                <h3 className="text-xl sm:text-2xl lg:text-3xl mb-4 font-bold uppercase">Soluciones integrales en ingenieria y mantenimiento</h3>
                <p className="text-xl sm:mb-1">Para agendar nuestra visita por favor comuníquese a través de nuestros canales de contacto.</p>
              </div>  
              <div className='lx:justify-self-center mb-10'>
                <h4 className="mb-6 text-xl sm:text-2xl lg:text-3xl font-bold ">CONTACTO</h4>
                 <nav>
                 <ul>
                    <li className="text-xl mb-5 flex"><PhoneCall className='mr-2'/>
                        <a href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_WEB}`} className='hover:underline hover:text-myLight-darker'>54 9 11 3620 7465</a>
                    </li>
                    <li className="text-xl mb-5 flex"><Mails className='mr-2'/>
                        <a
                        className='hover:underline hover:text-myLight-darker sm:mb-1'
                        href="https://mail.google.com/mail/?view=cm&to=ventas@cempampeana.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        ventas@cempampeana.com
                        </a>
                    </li>
                </ul>
                </nav>
              </div> 

             <div className='lx:justify-self-center'>
                <p className="mb-6 text-xl sm:text-2xl lg:text-3xl font-bold">LINKS</p>
                 <ul>
                    <li className="text-xl mb-5">
                        <a href="/" className="block w-full hover:underline hover:text-myLight-darker">Inicio</a>
                    </li>
                    <li className="text-xl mb-5">
                        <a href="/ingenieria-civil" className="block w-full hover:underline hover:text-myLight-darker">Ingenieria Civil</a>
                    </li>  
                    <li className="text-xl mb-5">
                        <a href="/ingenieria-electromecanica" className="block w-full hover:underline hover:text-myLight-darker">Ingenieria Electromecánica</a>
                    </li>
                    
                    <li className="text-xl mb-5">
                        <a href="/ingenieria-industrial" className="block w-full hover:underline hover:text-myLight-darker">Ingenieria Industrial</a>
                    </li>
                    <li className="text-xl mb-5">
                        <a href="/mantenimiento-industrial" className="block w-full hover:underline hover:text-myLight-darker">Mantenimiento Industrial</a>
                    </li> 
                </ul>
              </div>
            </div>
            <hr className="mt-2"></hr>

            <div className=' py-8 w-full'>
                <div className='flex justify-center items-start sm:items-center text-sm msm:text-lg lx:text-2xl'>
                    <Copyright size={20} className='mr-2 mt-0.5'/>
                    <p>COPYRIGHT {new Date().getFullYear()} CEM PAMPEANA SA. ALL RIGHTS RESERVED</p>
                </div>
            </div>

            {/* <div className="max-w-6xl mx-auto px-5">
                <h2 className="text-5xl mb-5 font-bold">SOLUCIONES INTEGRALES EN INGENIERIA Y MANTENIMIENTO</h2>
                <p className="text-2xl mb-10 opacity-90 max-w-2xl mx-auto">Contáctanos para discutir su proyecto y descubrir cómo podemos ayudarle a alcanzar sus objetivos.</p>
                <spa className="mr-5 bg-white text-black py-4 px-10 border-none rounded-full text-3xl font-bold transition-all duration-300 tracking-wide hover:border-white hover:-translate-y-1 hover:shadow-lg">
                    TELEFONO: 11 3620 7465
                </spa>
                <button className="ml-5 bg-white text-black py-4 px-10 border-none rounded-full text-3xl font-bold transition-all duration-300 tracking-wide hover:bg-gray-50 hover:-translate-y-1 hover:shadow-lg">
                    MAIL: ventas@cempampeana.com
                </button>
            </div>
             <div className="flex items-center justify-center h-12 text-2xl mx-auto text-center text-white bg-gray-500/80">COPYRIGHT 2025 CEM PAMPEANA S.A. - TODOS LOS DERECHOS RESERVADOS</div> */}
        </footer>
    );
}