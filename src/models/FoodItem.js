class FoodItem {
    constructor (foodName,foodDesc,foodUid,foodPrice,rating,review,sellerUid) {
        this.foodName = foodName;
        this.foodDesc = foodDesc;
        this.foodUid = foodUid;
        this.foodPrice = foodPrice;
        this.rating = rating;
        this.review = review;
        this.sellerUid = sellerUid;
    }
    toString() {
        return this.foodName +
        this.foodDesc +
        this.foodUid +
        this.foodPrice +
        this.rating +
        this.review +
        this.sellerUid
    }
}

// Firestore data converter
const fooodItemConverter = {
    toFirestore: (foodItem) => {
        return {
            foodName : foodItem.foodName,
            foodDesc : foodItem.foodDesc,
            foodUid : foodItem.foodUid,
            foodPrice : foodItem.foodPrice,
            rating : foodItem.rating,
            review : foodItem.review,
            sellerUid : foodItem.sellerUid
            };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new FoodItem(data.foodName,data.foodDesc,data.foodUid,data.foodPrice,data.rating,data.review.data.sellerUid);
    }
};

export default FoodItem;