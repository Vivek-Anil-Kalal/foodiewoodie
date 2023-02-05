class User {
    constructor (uid, userName,address,imgUrl,mobile,isSeller,storeUid ) {
        this.uid = uid;
        this.userName = userName;
        this.address = address;
        this.imgUrl = imgUrl;
        this.mobile = mobile;
        this.isSeller = isSeller;
        this.storeUid = storeUid;
    }
    toString() {
        return this.name + ', ' + this.state + ', ' + this.country;
    }
}

// Firestore data converter
const cityConverter = {
    toFirestore: (city) => {
        return {
            name: city.name,
            state: city.state,
            country: city.country
            };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        // return new City(data.name, data.state, data.country);
    }
};