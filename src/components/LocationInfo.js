import '../LocationInfo.css';
import { IoPeopleCircle, IoPlanetOutline } from 'react-icons/io5';
import { GiAbstract024 } from 'react-icons/gi';
const ResidentInfo = ({ name, type, dimension, residents, population }) => {
	return (
		<div className="location-info-container">
			<h3>{name}</h3>
			<h3>
				<IoPlanetOutline /> {type}
			</h3>
			<h3>
				<GiAbstract024 /> {dimension}
			</h3>
			<h3>
				<IoPeopleCircle /> {population}
			</h3>
			<div className="residents-container">{residents}</div>
		</div>
	);
};

export default ResidentInfo;
