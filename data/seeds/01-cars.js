
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {vin: '1780YUYBCH789', make: 'Honda', model: 'Accord', mileage: 128987.67, transmissionType: 'Automatic', titleStatus: 'clean'},
        {vin: 'CFV97947889RT', make: 'Toyota', model: 'Camry', mileage: 999947, transmissionType: 'Manual', titleStatus: 'salvage'},
      ]);
    });
};
