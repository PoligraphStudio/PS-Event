// window.onload = () => {

//   setTimeout(()=> {
//     let preloader = document.getElementById('page-preloader');
//     if (!preloader.classList.contains('done'))
//     {
//       preloader.classlist.add('done');
//     }
//   }, 1000);

// }

window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 1000);
}