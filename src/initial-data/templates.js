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
   'Ex 1-3',
   'Ex 4-6',
   'Ex 7-9',
   'Ex 10-12',
   'Ex 13-15',
   'Ex 16-18',
   'Ex 19-21',
   'Ex 22-24',
   'Ex 25-27',
   'Ex 28, 29',
   'Ex 30-32',
   'Ex 33-35',
   'Ex 36-38',
   'Ex 39, 40',
   'Lev 1-4',
   'Lev 5-7',
   'Lev 8, 9',
   'Lev 10-12',
   'Lev 13',
   'Lev 14, 15',
   'Lev 16-18',
   'Lev 19-21',
   'Lev 22, 23',
   'Lev 24, 25',
   'Lev 26, 27',
   'Num 1, 2',
   'Num 3, 4',
   'Num 5, 6',
   'Num 7',
   'Num 8-10',
   'Num 11-13',
   'Num 14, 15',
   'Num 16-18',
   'Num 19-21',
   'Num 22-24',
   'Num 25, 26',
   'Num 27-29',
   'Num 30, 31',
   'Num 32, 33',
   'Num 34-36',
]

var i = 1;

readings.forEach((reading) => {
   var day = { order: i, reading: reading };

   template1.days.push(day);
   i++;
});

templates.push(template1);

module.exports = templates;
