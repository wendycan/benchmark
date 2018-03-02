const program = require('commander');
const request = require('request');

program
    .option('--qps <type>', 'qps')
    .option('--url <type>', 'url')
    .parse(process.argv);


const qps = program.qps || 1;
const url = program.url;

// const url = 'https://apiv3.shanbay.com/adventure/123';
// const url = 'https://apiv3.shanbay.com/uc/checkin/calendar/dates\?user_id\=39932737\&start_date\=2017-02-01\&end_date\=2018-02-02'
// const url = 'http://local.x0y1.com:5000/uc/checkin/calendar/dates\?user_id\=39932737\&start_date\=2017-02-01\&end_date\=2018-02-02'
// const url = 'http://local.x0y1.com:5000/uc/checkin/days_num/?user_id\=23624';
// const url = 'https://apiv3.shanbay.com/uc/checkin/days_num/?user_id\=39932737';


let count = 0;
const fetch = () => {
    request.get({url, url}, (e, r, res) => {
        console.log(++count + ':' + url);
    });
};

const duration = 1000/qps;

console.log(url, duration);

setInterval(fetch, duration);

