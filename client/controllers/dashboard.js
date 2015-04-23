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
      isVisible: true
    };

    //if(Meteor.call('duplicateCheck', product))//duplicateCheck(product.name))
    Meteor.call('createProduct', product);
    var frm = document.getElementsByName('contact-form')[0];    //gets page
    frm.reset();                                                //resets page after submit

    return false;
  }
});

Template.product.events({
    'click .removeFromStore': function(event) {
        var product = {
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
