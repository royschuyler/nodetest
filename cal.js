var argv = require('yargs')
// var parse = require(path.join(process.cwd(), '/lib/calURLParse'));
var lvl1 = require('./lib/calURLParse.js').lvl1
var lvl2 = require('./lib/calURLParse.js').lvl2


console.log(lvl1)
console.log(lvl2)

var monthI = 3;
var yearI = 2;

var rowAA = [];
var rowBB = [];
var rowCC = [];
var rowDD = [];
var rowEE = [];
var rowFF = [];

if (process.argv[3] !== undefined) {
  var monthOfYear = process.argv[2].toLowerCase().charAt(0).toUpperCase() + process.argv[2].slice(1);
  var y = process.argv[3];
  hey(monthOfYear, y, 3)

}

  function hey(m, y, x){

    if (((y % 4 == 0) && (y % 100 != 0)) || (y % 400 == 0)){
        leapYear = true;
      } else {
        leapYear = false;
      }

    if (m == 'January')   { moy = 13; y = process.argv[x] - 1 }
    if (m == 'February')  { moy = 14; y = process.argv[x] - 1 }
    if (m == 'March')     { moy = 3 }
    if (m == 'April')     { moy = 4 }
    if (m == 'May')       { moy = 5 }
    if (m == 'June')      { moy = 6 }
    if (m == 'July')      { moy = 7 }
    if (m == 'August')    { moy = 8 }
    if (m == 'September') { moy = 9 }
    if (m == 'October')   { moy = 10 }
    if (m == 'November')  { moy = 11 }
    if (m == 'December')  { moy = 12 }

    var dayOfMonth = 1;
    var month = parseInt(moy);
    var year = parseInt(y);
    var K = year % 100;
    var J = (year - K) / 100;

    //ZELLERS EQUATION
    var solve = (dayOfMonth + parseInt((13 * (month + 1) / 5)) + K + parseInt(K / 4) + parseInt(J / 4) + 5 * J) % 7;

    //jan march may july aug oct dec
    if (solve == 0) { dayOfWeek = 'Saturday'; tester = 18; leftoverDaysRow1 = '1'; row2Numbers = ' 2  3  4  5  6  7  8'; row3Numbers = ' 9 10 11 12 13 14 15'; row4Numbers = '16 17 18 19 20 21 22'; };
    if (solve == 1) { dayOfWeek = 'Sunday';   tester = 0;  leftoverDaysRow1 = '1  2  3  4  5  6  7';  row2Numbers = ' 8  9 10 11 12 13 14';  row3Numbers = '15 16 17 18 19 20 21'; row4Numbers = '22 23 24 25 26 27 28' };
    if (solve == 2) { dayOfWeek = 'Monday';   tester = 3;  leftoverDaysRow1 = '1  2  3  4  5  6';  row2Numbers = ' 7  8  9 10 11 12 13';  row3Numbers = '14 15 16 17 18 19 20'; row4Numbers = '21 22 23 24 25 26 27' };
    if (solve == 3) { dayOfWeek = 'Tuesday';  tester = 6;  leftoverDaysRow1 = '1  2  3  4  5';  row2Numbers = ' 6  7  8  9 10 11 12'; row3Numbers = '13 14 15 16 17 18 19'; row4Numbers = '20 21 22 23 24 25 26' };
    if (solve == 4) { dayOfWeek = 'Wednsday'; tester =  9; leftoverDaysRow1 = '1  2  3  4';  row2Numbers = ' 5  6  7  8  9 10 11'; row3Numbers = '12 13 14 15 16 17 18'; row4Numbers = '19 20 21 22 23 24 25' };
    if (solve == 5) { dayOfWeek = 'Thursday'; tester = 12; leftoverDaysRow1 = '1  2  3'; row2Numbers = ' 4  5  6  7  8  9 10'; row3Numbers = '11 12 13 14 15 16 17'; row4Numbers = '18 19 20 21 22 23 24' };
    if (solve == 6) { dayOfWeek = 'Friday';   tester = 15; leftoverDaysRow1 = '1  2'; row2Numbers = ' 3  4  5  6  7  8  9'; row3Numbers = '10 11 12 13 14 15 16'; row4Numbers = '17 18 19 20 21 22 23' };

    //31 DAY MONTHS
    if (m == 'January' || m == 'March' || m == 'May' || m == 'July' || m == 'August' || m == 'October' || m == 'December')
      { if (solve == 0) { dayOfWeek = 'Saturday'; tester = 18; row5Numbers = '23 24 25 26 27 28 29'; row6Numbers = '30 31               ' };
        if (solve == 1) { dayOfWeek = 'Sunday';   tester = 0;  row5Numbers = '29 30 31            '; row6Numbers = '                    ' };
        if (solve == 2) { dayOfWeek = 'Monday';   tester = 3;  row5Numbers = '28 29 30 31         '; row6Numbers = '                    ' };
        if (solve == 3) { dayOfWeek = 'Tuesday';  tester = 6;  row5Numbers = '27 28 29 30 31      '; row6Numbers = '                    ' };
        if (solve == 4) { dayOfWeek = 'Wednsday'; tester =  9; row5Numbers = '26 27 28 29 30 31   '; row6Numbers = '                    ' };
        if (solve == 5) { dayOfWeek = 'Thursday'; tester = 12; row5Numbers = '25 26 27 28 29 30 31'; row6Numbers = '                    ' };
        if (solve == 6) { dayOfWeek = 'Friday';   tester = 15; row5Numbers = '24 25 26 27 28 29 30'; row6Numbers = '31                  ' }; }

    //30 DAY MONTHS
    if (m == 'April' || m == 'June' || m == 'September' || m == 'November')
      { if (solve == 0) { dayOfWeek = 'Saturday'; tester = 18; row5Numbers = '23 24 25 26 27 28 29'; row6Numbers = '30                  ' };
        if (solve == 1) { dayOfWeek = 'Sunday';   tester = 0;  row5Numbers = '29 30               '; row6Numbers = '                    ' };
        if (solve == 2) { dayOfWeek = 'Monday';   tester = 3;  row5Numbers = '28 29 30            '; row6Numbers = '                    ' };
        if (solve == 3) { dayOfWeek = 'Tuesday';  tester = 6;  row5Numbers = '27 28 29 30         '; row6Numbers = '                    ' };
        if (solve == 4) { dayOfWeek = 'Wednsday'; tester =  9; row5Numbers = '26 27 28 29 30      '; row6Numbers = '                    ' };
        if (solve == 5) { dayOfWeek = 'Thursday'; tester = 12; row5Numbers = '25 26 27 28 29 30   '; row6Numbers = '                    ' };
        if (solve == 6) { dayOfWeek = 'Friday';   tester = 15; row5Numbers = '24 25 26 27 28 29 30'; row6Numbers = '                    ' }; }

    //28 DAY MONTHS
    if (m == 'February')
      { if (solve == 0) { dayOfWeek = 'Saturday'; tester = 18; row5Numbers = '23 24 25 26 27 28   '; row6Numbers = '                    ' };
        if (solve == 1) { dayOfWeek = 'Sunday';   tester = 0;  row5Numbers = '                    '; row6Numbers = '                    ' };
        if (solve == 2) { dayOfWeek = 'Monday';   tester = 3;  row5Numbers = '28                  '; row6Numbers = '                    ' };
        if (solve == 3) { dayOfWeek = 'Tuesday';  tester = 6;  row5Numbers = '27 28               '; row6Numbers = '                    ' };
        if (solve == 4) { dayOfWeek = 'Wednsday'; tester =  9; row5Numbers = '26 27 28            '; row6Numbers = '                    ' };
        if (solve == 5) { dayOfWeek = 'Thursday'; tester = 12; row5Numbers = '25 26 27 28         '; row6Numbers = '                    ' };
        if (solve == 6) { dayOfWeek = 'Friday';   tester = 15; row5Numbers = '24 25 26 27 28      '; row6Numbers = '                    ' }; }

    //29 DAY MONTHS
    if (m === 'February' && leapYear === true )
      { if (solve == 0) { dayOfWeek = 'Saturday'; tester = 18; row5Numbers = '23 24 25 26 27 28 29'; row6Numbers = '                    ' };
        if (solve == 1) { dayOfWeek = 'Sunday';   tester = 0;  row5Numbers = '29                  '; row6Numbers = '                    ' };
        if (solve == 2) { dayOfWeek = 'Monday';   tester = 3;  row5Numbers = '28 29               '; row6Numbers = '                    ' };
        if (solve == 3) { dayOfWeek = 'Tuesday';  tester = 6;  row5Numbers = '27 28 29            '; row6Numbers = '                    ' };
        if (solve == 4) { dayOfWeek = 'Wednsday'; tester =  9; row5Numbers = '26 27 28 29         '; row6Numbers = '                    ' };
        if (solve == 5) { dayOfWeek = 'Thursday'; tester = 12; row5Numbers = '25 26 27 28 29      '; row6Numbers = '                    ' };
        if (solve == 6) { dayOfWeek = 'Friday';   tester = 15; row5Numbers = '24 25 26 27 28 29   '; row6Numbers = '                    ' }; }

    // console.log(dayOfWeek);

    //*******FIRST ROW FOR LOOP***************
    var row1 = [];
    for (i = 0; i < tester; i++) {
        row1.push(' ');
      };
      var spaces = row1.join('');

    //******************************CENTER MONTH CALENDER HEADER************************

    var headerYear = process.argv[x];
    var headerLength = m.length + process.argv[x].length + 2;
    var looper = (20 - headerLength) / 2;
    var headerArr = [];

    for (i = 0; i < looper; i ++) {
        headerArr.push(' ');
    };

    var headerSpace = headerArr.join('');
    var headerWithMonth = headerSpace + m + ' ' + headerYear;

    //*************************** MONTH CALENDER PRESENTATION ******************************

    var presentDays = 'Su Mo Tu We Th Fr Sa';
    var test3 = ' ' + spaces + leftoverDaysRow1

if (process.argv[3] !== undefined){
    console.log(headerWithMonth);
    console.log(presentDays);
    console.log(test3);
    console.log(row2Numbers);
    console.log(row3Numbers);
    console.log(row4Numbers);
    console.log(row5Numbers);
    console.log(row6Numbers);
  };

    var presentDays = 'Su Mo Tu We Th Fr Sa';
    var test3 = ' ' + spaces + leftoverDaysRow1

    rowAA.push(test3)
    rowBB.push(row2Numbers)
    rowCC.push(row3Numbers)
    rowDD.push(row4Numbers)
    rowEE.push(row5Numbers)
    rowFF.push(row6Numbers)

};

//**************************** YEAR CALENDER *****************************************

if (process.argv[3] == undefined) {

  var monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  y = process.argv[2];

  hey(monthArr[0], y, yearI)
  hey(monthArr[1], y, yearI)
  hey(monthArr[2], y, yearI)
  hey(monthArr[3], y, yearI)
  hey(monthArr[4], y, yearI)
  hey(monthArr[5], y, yearI)
  hey(monthArr[6], y, yearI)
  hey(monthArr[7], y, yearI)
  hey(monthArr[8], y, yearI)
  hey(monthArr[9], y, yearI)
  hey(monthArr[10], y, yearI)
  hey(monthArr[11], y, yearI)

  var yearSpace = '  ';

  var AA = rowAA[0] + yearSpace + rowAA[1] + yearSpace + rowAA[2];
  var BB = rowBB[0] + yearSpace + rowBB[1] + yearSpace + rowBB[2];
  var CC = rowCC[0] + yearSpace + rowCC[1] + yearSpace + rowCC[2];
  var DD = rowDD[0] + yearSpace + rowDD[1] + yearSpace + rowDD[2];
  var EE = rowEE[0] + yearSpace + rowEE[1] + yearSpace + rowEE[2];
  var FF = rowFF[0] + yearSpace + rowFF[1] + yearSpace + rowFF[2];

  var GG = rowAA[3] + yearSpace + rowAA[4] + yearSpace + rowAA[5];
  var HH = rowBB[3] + yearSpace + rowBB[4] + yearSpace + rowBB[5];
  var II = rowCC[3] + yearSpace + rowCC[4] + yearSpace + rowCC[5];
  var JJ = rowDD[3] + yearSpace + rowDD[4] + yearSpace + rowDD[5];
  var KK = rowEE[3] + yearSpace + rowEE[4] + yearSpace + rowEE[5];
  var LL = rowFF[3] + yearSpace + rowFF[4] + yearSpace + rowFF[5];

  var MM = rowAA[6] + yearSpace + rowAA[7] + yearSpace + rowAA[8];
  var NN = rowBB[6] + yearSpace + rowBB[7] + yearSpace + rowBB[8];
  var OO = rowCC[6] + yearSpace + rowCC[7] + yearSpace + rowCC[8];
  var PP = rowDD[6] + yearSpace + rowDD[7] + yearSpace + rowDD[8];
  var QQ = rowEE[6] + yearSpace + rowEE[7] + yearSpace + rowEE[8];
  var RR = rowFF[6] + yearSpace + rowFF[7] + yearSpace + rowFF[8];

  var SS = rowAA[9] + yearSpace + rowAA[10] + yearSpace + rowAA[11];
  var TT = rowBB[9] + yearSpace + rowBB[10] + yearSpace + rowBB[11];
  var UU = rowCC[9] + yearSpace + rowCC[10] + yearSpace + rowCC[11];
  var VV = rowDD[9] + yearSpace + rowDD[10] + yearSpace + rowDD[11];
  var WW = rowEE[9] + yearSpace + rowEE[10] + yearSpace + rowEE[11];
  var XX = rowFF[9] + yearSpace + rowFF[10] + yearSpace + rowFF[11];


var yearHeader = '                             ' + y
var monthHeader1 = '      January               February               March'
var monthHeader2 = '       April                  May                   June'
var monthHeader3 = '        July                 August              September'
var monthHeader4 = '      October               November              December'
var presentDays = 'Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa';

console.log(yearHeader);
console.log('')
console.log(monthHeader1);
console.log(presentDays);
console.log(AA)
console.log(BB)
console.log(CC)
console.log(DD)
console.log(EE)
console.log(FF)
console.log(monthHeader2);
console.log(presentDays);
console.log(GG)
console.log(HH)
console.log(II)
console.log(JJ)
console.log(KK)
console.log(LL)
console.log(monthHeader3);
console.log(presentDays);
console.log(MM)
console.log(NN)
console.log(OO)
console.log(PP)
console.log(QQ)
console.log(RR)
console.log(monthHeader4);
console.log(presentDays);
console.log(SS)
console.log(TT)
console.log(UU)
console.log(VV)
console.log(WW)
console.log(XX)

};


//************************************************************************

if (process.argv[2] == undefined && process.argv[3] == undefined){
  hey('july', '2015')
    }
