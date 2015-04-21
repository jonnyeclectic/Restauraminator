    // Schema
    Schemas.Products = new SimpleSchema({
    _id: {
        type: String,
        optional: true
    },
    storeId: {
        type: String
    },
    name: {
        type: String
    },
    shortDescription: {
        type: String,
        optional: true
    },
    calories: {
        type: String,
        optional: true
    },
    ingredients: {
        type: String,
        optional: true
    },
    picSite: {
        type: String,
        optional: true
    },
    longDescription: {
        type: String,
        optional: true
    },
    price: {
        type: Number,
        decimal: true,
        optional: true
    },
    isVisible: {
        type: Boolean,
        index: true
    }
    });

    // Collection
    Collections.Products = new Meteor.Collection('products');
    Collections.Products.attachSchema(Schemas.Products);


    // Methods
    Meteor.methods({
    createProduct: function(options) {
        var storeId = Collections.Stores.findOne({ owner: Meteor.userId() })._id;
        Collections.Products.insert({
            storeId: storeId,
            name: options.name,
            shortDescription: options.shortDescription,
            longDescription: options.longDescription,
            calories: options.calories,
            ingredients: options.ingredients,
            picSite: options.picSite,
            price: options.price,
            isVisible: options.isVisible
        });
    }
    });

    Meteor.methods({
    duplicateCheck: function(options){
    var storeId = Collections.Stores.findOne({ owner: Meteor.userId() })._id;
    console.log(Collections.Products.findOne({ name: options.name, storeId: storeId}));
    console.log(options.duplicate);
    options.duplicate = true;
        //return typeof Collections.Products.findOne({ name: options.name, storeId: storeId}) === "undefined";
    return options;
    }
    });

    Meteor.methods({
    removeFromStore: function(options) {
        var storeId = Collections.Stores.findOne({ owner: Meteor.userId() })._id;
        Collections.Products.remove({
            _id:              options._id,
            storeId:          storeId,
            name:             options.name,
            shortDescription: options.shortDescription,
            longDescription:  options.longDescription,
            calories:         options.calories,
            ingredients:      options.ingredients,
            picSite:          options.picSite,
            price:            options.price,
            isVisible:        options.isVisible
        });
    }
    });
