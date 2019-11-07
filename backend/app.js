const express = require('express');

const app = express();

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control.Allow-Header','Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    next();
});

app.use('/api/results', (req, res, next) => {
  const pupilDataDetail = [
    {
      firstName: 'Robert',
      surname: 'Smith',
      dob: '01/02/2007',
      gender: 'M',
      datasets: [
        'CTF XML',
        'Year 1 Phonics',
        'KS1',
        'KS2'
      ]
    },
    {
      firstName: 'Sally',
      surname: 'Green',
      dob: '02/03/2008',
      gender: 'F',
      datasets: [
        'CTF XML',
        'KS1',
        'KS2',
        'KS3'
      ]
    },
    {
      firstName: 'David',
      surname: 'Black',
      dob: '03/06/2008',
      gender: 'M',
      datasets: [
        'CTF XML',
        'KS1'
      ]
    }];

    res.json({
      results: pupilDataDetail
    });
});

module.exports = app;
