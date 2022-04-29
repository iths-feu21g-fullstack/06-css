import fish1 from './fish1.jpg'
import fish2 from './fish2.jpg'
import fish3 from './fish3.jpg'
import fish4 from './fish4.jpg'
import './Gallery.css'
import Image from './Image'

const Gallery = () => (
  <section className='gallery'>
    Gallery
    <div className='img-container'>
      <Image src={fish1} />
      <Image src={fish2} />
      <Image src={fish3} />
      <Image src={fish4} />
    </div>
  </section>
);

export default Gallery
