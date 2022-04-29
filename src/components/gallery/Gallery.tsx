import fish1 from './fish1.jpg'
import fish2 from './fish2.jpg'
import fish3 from './fish3.jpg'
import fish4 from './fish4.jpg'
import './Gallery.css'

const Gallery = () => (
	<section className="gallery">
		Gallery
		<div className="img-container">
			<img src={fish1} />
			<img src={fish2} />
			<img src={fish3} />
			<img src={fish4} />
		</div>
	</section>
)

export default Gallery
