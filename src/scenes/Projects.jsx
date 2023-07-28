import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import project1 from "../assets/project-1.png"
import project2 from "../assets/project-2.png"
import project3 from "../assets/project-3.png"
import project4 from "../assets/project-4.png"
import project5 from "../assets/project-5.png"
import project6 from "../assets/project-6.png"
import project7 from "../assets/project-7.png"


const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};


const Project = ({ src, description, title, link }) => {

  

  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

  return (
      <a href={link} className="cursor-pointer" target="_blank" rel="noreferrer">
        <motion.div variants={projectVariant} className="relative">
          <div className={overlayStyles}>
            <p className="text-2xl font-playfair">{title}</p>
            <p className="mt-7">
              {description}
            </p>
          </div>
            <img src={src} alt={`${src}`} />
        </motion.div>
      </a>
  );
};

const Projects = () => {
  return (
    <section id="projetos" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JETOS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Projetos construídos utilizando Javascript e React.js, com diversidade de abordagens tais como: uso de Typescript, Tailwind, StyledComponents, ContextApi e etc...
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
          </div>
          <Project 
            src={project4} 
            title={'Hoobank'} 
            description={'Landing Page voltada para apresentação de serviço financeiro.'} 
            link={'https://andykallian.github.io/modern-business-hoobank/'} 
          />
          <Project 
            src={project2} 
            title={'Evogym'} 
            description={'Landing Page de uma academia de ginastica. É utilizado Typescript'} 
            link={'https://gym-spa-typescript-bfgxvjzfq-andykallian.vercel.app/'} 
          />

          {/* ROW 2 */}
          <Project 
            src={project6} 
            title={'Doctor Care'} 
            description={'Landing Page para rede de consultório médico.'} 
            link={'https://andykallian.github.io/doctorcare/'} 
          />
          <Project 
            src={project1} 
            title={'Car Hub'} 
            description={'Landing Page para serviço de aluguél de carros. O projeto conta com consumo de 2 APIs, além do uso do Typescript'} 
            link={"https://car-showcase-nextjs-typescript-jbfbi7kpq-andykallian.vercel.app/"} 
          />
          <Project 
            src={project5} 
            title={'TRVL'} 
            description={'Landing Page fornecendo o serviço de viagem com destinos aventurescos.'} 
            link={'https://react-landing-c6z6643zc-andykallian.vercel.app/'} 
          />

          {/* ROW 3 */}
          <Project 
            src={project3} 
            title={'Galaxy Travel'} 
            description={'Landing Page voltada para viagem interplanetárias.'} 
            link={'https://andykallian.github.io/TravelReact/'} 
          />
          <Project 
            src={project7} 
            title={'IP Tracker'} 
            description={'Rastreador de IP, que consome uma API ao buscar um IP digitado pelo usuário.'} 
            link={'https://andykallian.github.io/ip-address-tracker/'}
          />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
