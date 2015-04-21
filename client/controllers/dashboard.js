Template.createProduct.events({
  'submit': function(event) {
    var product = {
      name: event.target.productName.value.trim(),
      shortDescription: event.target.shortDescription.value.trim(),
      longDescription: event.target.longDescription.value.trim(),
      ingredients: event.target.ingredients.value.trim(),
      calories: event.target.calories.value.trim(),
      picSite: event.target.picSite.value.trim(),
      price: event.target.price.value,
      duplicate: false,
      isVisible: true
    };

    Meteor.call('createProduct', product);
    var duplicate = Meteor.call('duplicateCheck', product);
    console.log(duplicate);

    if(duplicate){                                                  //Checks if this item is already in the store
        Meteor.call('removeFromStore', duplicate);
        Session.set('alert', 'Product already exists.');
    }
    else{
        Session.set('alert', '');
        var frm = document.getElementsByName('contact-form')[0];    //gets page
        frm.reset();                                                //resets page after submit
    }

    return false;
  }
});

Template.product.events({
    'click .removeFromStore': function(event) {
        var product = {
            _id:                this._id,
            name:               this.name,
            shortDescription:   this.shortDescription,
            longDescription:    this.longDescription,
            ingredients:        this.ingredients,
            calories:           this.calories,
            picSite:            this.picSite,
            price:              this.price,
            isVisible:          true
        };

        Meteor.call('removeFromStore', product);
        return false;
    }
});
