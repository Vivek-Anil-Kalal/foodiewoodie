class Store {
    constructor (storeUid,storeName,storeImg,storedesc,storeAddress,sellerUid,listOfFoods ) {
        this.storeUid = storeUid;
        this.storeName = storeName;
        this.storeImg = storeImg;
        this.storedesc = storedesc;
        this.storeAddress = storeAddress;
        this.sellerUid = sellerUid;
        this.listOfFoods = listOfFoods;
    }
    toString() {
        return this.storeUid+
        this.storeName+
        this.storeImg +
        this.storedesc+ 
        this.storeAddress+
        this.sellerUid +
        this.listOfFoods
    }
}

// Firestore data converter
const storeConverter = {
    toFirestore: (store) => {
        return {
            storeName : store.storeName,
            storeUid : store.storeUid,
            storeImg : store.storeImg,
            storedesc : store.storedesc,
            storeAddress : store.storeAddress,
            listOfFoods : store.listOfFoods,
            sellerUid : store.sellerUid
            };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new Store(data.storeName,data.storeUid,data.storeImg,data.storedesc,data.storeAddress,data.listOfFoods,data.sellerUid);
    }
};

export default Store;