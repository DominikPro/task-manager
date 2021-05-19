const showDate = (creationDateInMiliseconds) => {
	const dateInMiliseconds = new Date(creationDateInMiliseconds);
	console.log(dateInMiliseconds.toLocaleDateString());
	return dateInMiliseconds.toLocaleDateString();
};
export default showDate;
