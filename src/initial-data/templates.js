var templates = [],
    template1, template1Readings;

template1 = {
   id: 1,
   name: 'Bethel Bible Reading',
   days: [],
};

readings = [
   'Gen 1-3',
   'Gen 4-7',
   'Gen 8-11',
   'Gen 12-15',
   'Gen 16-18',
   'Gen 19, 20',
   'Gen 21-23',
   'Gen 24, 25',
   'Gen 26-28',
   'Gen 29, 30',
   'Gen 31, 32',
   'Gen 33-35',
   'Gen 36-38',
   'Gen 39-41',
   'Gen 42-44',
   'Gen 45-47',
   'Gen 48-50',
]

var i = 1;

readings.forEach((reading) => {
   var day = { order: i, reading: reading };

   template1.days.push(day);
   i++;
});

templates.push(template1);

module.exports = templates;
