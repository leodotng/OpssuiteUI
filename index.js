let clickThat = document.getElementsByName(".ui.orange.button.mini.clickableButton");
function clickThemAll () {
    for (i = 0; i <= clickThat.length; i++) {
        clickThat[i].click();
    }
}
clickThemAll();

let data = 'FUCK YOU';
function alertMessageOne() {
  function alertMessage1(stuff, data) {
    document.getElementById("stuff").innerText += data;
    console.log("fuck you")
  }
  alertMessage1('stuff', data)
//   console.log("fuck you")
  
}

// function alertMessageTwo() {
//   function alertMessage1(stuff, data) {
//     let data = 'fuck'
//     document.getElementsById('stuff').innerText += data
//   }
//   alertMessage1('stuff', data)
// }
// function alertMessageThree() {
//   function alertMessage1(stuff, data) {
//     let data = 'fuck'
//     document.getElementsById('stuff').innerText += data
//   }
//   alertMessage1('stuff', data)
// }

// function alertMessageFour() {
//   function alertMessage1(stuff, data) {
//     let data = 'fuck'
//     document.getElementsById('stuff').innerText += data
//   }
//   alertMessage1('stuff', data)
// }
// function alertMessageFive() {
//   function alertMessage1(stuff, data) {
//     let data = 'fuck'
//     document.getElementsById('stuff').innerText += data
//   }
//   alertMessage1('stuff', data)
// }
