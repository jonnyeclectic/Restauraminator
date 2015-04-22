Template.statistics.helpers({
  total: function() {
    return this.orders.count();
  },
  frequency: function() {
    var count = this.orders.count();
    var orders = this.orders.fetch()

    var first = orders[0];
    var last = orders[count - 1];

    var diff = last.timestamp - first.timestamp;
    var time = diff*1.1574e-8;

    return Math.round(count/time);
  }
});
