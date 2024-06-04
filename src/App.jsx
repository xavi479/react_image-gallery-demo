import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css";
function App() {

const images = [
  {
    original: "src/assets/campo.jpg",
    thumbnail:"src/assets/campo.jpg",
    description:"Correr en el campo ofrece una experiencia revitalizante, rodeado de la belleza natural y el aire fresco. Los senderos irregulares y el terreno variado desafían al corredor, mejorando su resistencia y fortaleciendo sus músculos."
    
  },
  {
    original: "src/assets/carrera.png",
    thumbnail:"src/assets/carrera.png",
    description:"Una carrera es una competencia de velocidad donde los participantes intentan cubrir una distancia definida en el menor tiempo posible. Puede realizarse a pie, en bicicleta, automóviles, u otros medios de transporte."
  },
  {
    original: "src/assets/runner.jpg",
    thumbnail:"src/assets/runner.jpg",
    description:"Un runner es una persona apasionada por correr, que se dedica a mejorar su rendimiento físico a través del entrenamiento constante y la disciplina. Participa en competencias de diferentes distancias, desde carreras de 5K hasta maratones, buscando superar sus propios límites y alcanzar nuevas metas."
  },
  {
    original: "src/assets/marathon.jpg",
    thumbnail:"src/assets/marathon.jpg",
    description:"Una maratón es una carrera de larga distancia de 42.195 kilómetros, que pone a prueba la resistencia física y mental de los corredores. Participar en una maratón requiere un entrenamiento riguroso y una estrategia bien planificada para completar la distancia con éxito."
  },
  {
    original: "src/assets/run.jpg",
    thumbnail:"src/assets/run.jpg", 
    description:"Correr es una actividad física que consiste en desplazarse a pie, más rápido que caminando. Es un ejercicio cardiovascular que mejora la salud del corazón y la resistencia física."
  },
  {
    original: "src/assets/running trail.jpg",
    thumbnail:"src/assets/running trail.jpg",
    description:"Running trail es una modalidad de carrera que se realiza en senderos naturales, atravesando terrenos irregulares como montañas, bosques y colinas. Requiere resistencia, técnica y un buen equipamiento para enfrentar los desafíos del entorno."
  },
  {
    original: "src/assets/ultra-runner.jpg",
    thumbnail:"src/assets/ultra-runner.jpg",
    description:"Un ultra-runner es un atleta que participa en carreras de larga distancia, generalmente superiores a los 42 kilómetros de un maratón tradicional. Estos corredores requieren una resistencia física y mental excepcionales, además de una rigurosa preparación y disciplina."
  }
]

  return (
    <div className='container'>
          <div style={{while:"70vw", margin: "auto"}}>
      <ImageGallery items={images} 
      showPlayButton={false}
      showBullets={true}
      autoPlay={true}
      slideInterval={1000}
      slideDuration={2000}
      thumbnailPosition='bottom'
      showThumbnails={true}
      />
    </div>
    </div>
  )
}

export default App
