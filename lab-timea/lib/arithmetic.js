'use strict';

module.exports = exports = {};


exports.add = (par1, par2) => {

  if( typeof par1 !== 'number' || typeof par2 !== 'number') { return null; }
  else { return par1+par2; } 

}

exports.sub = (par1, par2) => {

  if( typeof par1 !== 'number' || typeof par2 !== 'number') { return null; }
  else { return par1-par2; } 

}