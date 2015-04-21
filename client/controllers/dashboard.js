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
   //kdef3 mergetool

      console.log(product)
        Meteor.call('createProduct', product);

        return false;
    }
});
