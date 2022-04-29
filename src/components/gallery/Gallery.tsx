import fish1 from './fish1.jpg'
import fish2 from './fish2.jpg'
import fish3 from './fish3.jpg'
import fish4 from './fish4.jpg'
import './Gallery.css'
import Image from './Image'

const fishData: string[] = [
	fish1, fish2, fish3, fish4
]

const Gallery = () => (
  <section className='gallery'>
    Gallery
    <div className='img-container'>
		{fishData.map(fish => (
			<Image key={fish} src={fish} />
		))}
    </div>
  </section>
);
// URL till bilderna är unik, fungerar att använda som key - den här gången

export default Gallery
