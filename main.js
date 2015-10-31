// 'use strict';

$(document).ready(init);

  var count = 0

function init() {
  console.log('ready!');


  $('#myButton').click(colorize);
  $('#randomColor').click(getRandomColor);
  $('#cadeRandomBox').click(randomBox);
  $('#reRandomize').click(reRandomize);
  $('#clear').click(clearDisplay);
  $('#cadeify').click(cadeify);

  $('#boxes').on('click', '.box', boxHandler);
  $('#favorites').on('click', '.box', blackBorder);
  $('#despised').on('click', '.box', blackBorder);

  $('#favorites').on('click', addToFavorites);
  $('#boxes').on('click', addToBoxes);
  $('#despised').on('click', addToDespised);

  }


  function colorize(event){
    count += 1;
    var color = $('#color').val();
    var $box = $('<div>').addClass('box').css('background-color', color);
    $('#boxes').append($box);
  }

  function getRandomColor(){
    count += 1;
    var colorR = Math.floor(Math.random() * 256);
    var colorG = Math.floor(Math.random() * 256);
    var colorB = Math.floor(Math.random() * 256);
    var colorA = Math.random();

    var color = 'rgba(' + colorR.toString() + ", "
                        + colorG.toString() + ", "
                        + colorB.toString() + ", "
                        + colorA + ")";
    console.log(color);
    var $box = $('<div>').addClass('box').css('background-color', color);
    $('#boxes').append($box);
  }

  function reRandomize(){

    $('#boxes').empty();

    for (var i = 0; i < count; i++){

      var colorR = Math.floor(Math.random() * 256);
      var colorG = Math.floor(Math.random() * 256);
      var colorB = Math.floor(Math.random() * 256);
      var colorA = Math.random();

      var color = 'rgba(' + colorR.toString() + ", "
                          + colorG.toString() + ", "
                          + colorB.toString() + ", "
                          + colorA + ")";

      var $box = $('<div>').addClass('box').css('background-color', color);
      $('#boxes').append($box);
    }
  }

  function randomBox () {
    count++;
    var colorValue = Math.floor(parseInt('ffffff', 16) * Math.random()).toString(16);

    while (colorValue.length < 6){
      colorValue = "0" + colorValue;
    }

    var color = "#" + colorValue;

    var $box = $('<div>').addClass('box').css('background-color', color);
    $('#boxes').append($box);
  }


  function clearDisplay(){
    $('#boxes').empty();
    $('#favorites').empty();
    $('#despised').empty();
    count = 0;
  }

  // function randomColor (){
  //   var coinToss = Math.floor(Math.random());
  //   coinToss === 1 ?
  // }

  function boxHandler(event) {
    var $clickedBox = $(event.target);

    $clickedBox.toggleClass('highlight');
    // console.log($clickedBox.hasClass('highlight'));
    // if ($clickedBox.hasClass('highlight')){
    //   $clickedBox.removeClass('highlight');
    // } else {
    //   console.log('ok');
    //   $clickedBox.addClass('highlight');
    // }
  }

  function addToFavorites(event){
    var highlightedBoxes = $('.highlight').detach();
    $('#favorites').append(highlightedBoxes);
    highlightedBoxes.removeClass('highlight');
  }

  function addToBoxes(event){
    var blacklightedBoxes = $('.blackBorder').detach();
    $('#boxes').append(blacklightedBoxes);
    blacklightedBoxes.removeClass('blackBorder');

  }

  function blackBorder(event){
    var $clickedBox = $(event.target);

    $clickedBox.toggleClass('blackBorder');
    // console.log($clickedBox.hasClass('blackBorder'));
    // if ($clickedBox.hasClass('blackBorder')){
    //   $clickedBox.removeClass('blackBorder');
    // } else {
    //   console.log('blacky');
    //   $clickedBox.addClass('blackBorder');
    // }
  }


  function addToDespised(event){
    var $highlightedBoxes = $('.highlight').detach();
    $('#despised').append($highlightedBoxes);
    $highlightedBoxes.removeClass('highlight');
  }

  function cadeify(){

    $('.box').click(changeBackground);
  }

  function changeBackground(event){
    console.log(event);

    $(event.target).addClass('cade');
  }
