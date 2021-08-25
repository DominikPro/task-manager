const showDate = (creationDateInMiliseconds) => {
	const dateInMiliseconds = new Date(creationDateInMiliseconds);
	return dateInMiliseconds.toLocaleDateString();
};
export default showDate;
