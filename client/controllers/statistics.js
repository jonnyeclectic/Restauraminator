function getTotal(orders) {
  return orders.count();
}

function getFrequency(orders) {
  var count = orders.count();
  var orders = orders.fetch()

  var first = orders[0];
  var last = orders[count - 1];

  var diff = last.timestamp - first.timestamp;
  var time = diff*1.1574e-8;

  return Math.round(count/time);
}

Template.statistics.events({
  'click .downloadPDF': function(event) {
    var data = {
      name: this.store.name,
      date: new Date(),
      total: getTotal(this.orders),
      frequency: getFrequency(this.orders)
    };

    Blaze.saveAsPDF(Template.report, {
      filename: "report.pdf",
      data: data,
      format: "letter"
    });

    return false;
  }
});

Template.statistics.helpers({
  total: function() {
    return getTotal(this.orders);
  },

  frequency: function() {
    return getFrequency(this.orders);
  }
});
