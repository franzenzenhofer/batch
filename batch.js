var timer = 0;
var timeout = 100;
var batchA = [];


var batchPush = function(func, argumentsArray, thisArg)
{
  var self = this;
  batchA.push({
    'func':func,
    'argumentsArray':argumentsArray,
    'thisArg':thisArg
  });
  return batchA.length;
}

var batchShift = function(){
  var self = this;
  return batchA.shift();
};

var batchPop = function(){
  var self = this;
  return batchA.pop();
};

var batchApply = function (func, argumentsArray, thisArg)
{
  var self = this;
  //setTimout(function(){ func.apply(thisArg, argumentsArray); }, timer);
}

var batchStart = function()
{
  var self = this;
}

var wait = function(val)
{
  var self = this;
  var timeout = val;
  return this;
}

