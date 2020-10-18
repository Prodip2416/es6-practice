class Dictionary {
    constructor() {
        this.dictionary = []
    }
    add(key, value) {
        this.dictionary[key] = value;
    }
    get(key) {
        return this.dictionary[key];
    }
}

const myDictionary = new Dictionary();
myDictionary.add("Prodip","0171234567");
myDictionary.add("Salekin","0176543222");
myDictionary.add("Anik","017111111111");
console.log(myDictionary.dictionary);

const anik = myDictionary.get("Anik");
console.log(anik);

// get value by key
// Dictionary is like key value pair