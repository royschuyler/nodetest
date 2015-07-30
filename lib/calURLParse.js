module.exports = function(url){

  var lvl1 = url.split('/')[2];
  var lvl2 = url.split('/')[3];



  if (lvl1 === undefined && lvl2 === undefined) {
    return './cal';
  }


  if (lvl2 === undefined && +lvl1) {
    return './cal ' + lvl1;
  }



if (+lvl1 && +lvl2){

    if (lvl1 > 12) {
      return './cal ' + lvl2 + ' ' + lvl1;
    } else {
      return './cal ' + lvl1 + ' ' + lvl2;
    }
}
}

