import { GiWireframeGlobe } from 'react-icons/gi';
import { MdTv } from 'react-icons/md';
import '../ResidentInfo.css';

const ResidentInfo = ({ name, image, status, origin, episodes, statusColor }) => {
	return (
		<div className="resident-info-container">
			<div className="resident-info-left">
				<img className="resident-image" src={image} alt={name} />
			</div>
			<div className="resident-info-right">
				<h2 style={{ margin: 0 }}>{name}</h2>
				<h6 style={{ margin: 0 }}>
					<span style={{ color: statusColor, fontSize: '3rem' }}>.</span> {status}
				</h6>
				<h6 style={{ margin: 0 }}>
					<GiWireframeGlobe /> {origin}
				</h6>
				<h6 style={{ margin: 0 }}>
					<MdTv /> {episodes}
				</h6>
			</div>
		</div>
	);
};

export default ResidentInfo;
