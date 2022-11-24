// Code your solution here
const findMatching = (collection, names) => { 
    return collection.filter(list => (
        list.toLowerCase() === names.toLowerCase()
    ));
}

const fuzzyMatch = (collection, names) => {
    return collection.filter(list => (
        list.slice(0, names.length) === names
    ));
}

function matchName(collection, names){
    return collection.filter(function(list){
        return list.name === names;
    })
}
