// Takes two parameters

// First parameter - sortingType - string 
// specifies how the program is to sort tasks.

// The second parameter - listOfTask - takes a collection of tasks 
// and sorts them according to the passed type.

//The function returns a sorted collection.

const sortTasks = (sortingType, listOfTask) => {
    let sorted;
    if (sortingType === "newest") {
        sorted = listOfTask.sort((a, b) => { return (b.date - a.date) })
        return (sorted)
    }
    else if (sortingType === "oldest") {
        sorted = listOfTask.sort((a, b) => { return (a.date - b.date) })
        return (sorted)
    }
    else if (sortingType === "shortTerm") {
        sorted = listOfTask.sort((a, b) => { return (a.endDate - b.endDate) })
        return (sorted)
    }
    else if (sortingType === "longTerm") {
        sorted = listOfTask.sort((a, b) => { return (b.endDate - a.endDate) })
        return (sorted)
    }
    else if (sortingType === "importantFirst") {
        sorted = listOfTask.sort((a, b) => { return (b.priority - a.priority) })
        return (sorted)
    }
    else if (sortingType === "myDay") {
        sorted = listOfTask.sort((a, b) => { return (b.myDay - a.myDay) })
        return (sorted)
    }
}
export default sortTasks;