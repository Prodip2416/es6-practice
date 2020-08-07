const user = {
    id:231,
    name:'Tom',
    friends:['Todd','Bob','Marry'],
    lover:{
        name:"Piter",
        age:24,
        favtFood:'Pizza'
    }
};

const userJSON = JSON.stringify(user);
console.log(userJSON);
const userFromJSON = JSON.parse(userJSON);
console.log(userFromJSON);