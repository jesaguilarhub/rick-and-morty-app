import { useState, useEffect } from 'react';
import getResident from '../services/getResident';
import ResidentInfo from './ResidentInfo';
import '../ResidentContainer.css';
const statusColors = {
	Alive   : '#55cc44',
	Dead    : '#d63d2e',
	Unknown : '#9e9e9e'
};
const ResidentContainer = ({ url }) => {
	const [
		name,
		setName
	] = useState('');
	const [
		image,
		setImage
	] = useState('');
	const [
		status,
		setStatus
	] = useState('');
	const [
		origin,
		setOrigin
	] = useState('');
	const [
		episodes,
		setEpisodes
	] = useState(0);
	const [
		statusColor,
		setStatusColor
	] = useState('#55cc44');

	useEffect(
		() => {
			if (url) {
				getResident(url).then((resident) => {
					setName(resident.name);
					setImage(resident.image);
					setStatus(resident.status);
					setStatusColor(statusColors[resident.status]);
					setOrigin(resident.origin.name);
					setEpisodes(resident.episode.length);
				});
			}
		},
		[
			url
		]
	);
	return (
		<div className="resident-container">
			<ResidentInfo
				name={name}
				image={image}
				status={status}
				origin={origin}
				episodes={episodes}
				statusColor={statusColor}
			/>
		</div>
	);
};

export default ResidentContainer;
