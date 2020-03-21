function init() {
  const api_key = 'XXXXXXXX';
  const base_id = 'XXXXXXXX';

  var Airtable = require('airtable');
  var base = new Airtable({
    apiKey: api_key
  }).base(base_id);
}

const getData = () => {

  base('Imported table').select({
    view: 'Grid view'
  }).firstPage(function(err, records) {
    if (err) {
      console.error(err);
      return;
    }
    records.forEach(function(record) {
      console.log('Retrieved', record.get('Name'));
    });
  });
}



exports.getData = getData;