/* pract5 */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/* pract7 */
    window.timerId = window.setInterval(currentTime, 500);
    function currentTime() {
        var date = new Date();

        var datetxt = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();

        var clock = date.getHours() + ":" + addZero(date.getMinutes()) + ":" + addZero(date.getSeconds());
        document.getElementById("date").innerHTML = (datetxt + " " + clock);
    }
    function addZero(num) {
        if (num <= 9) return "0" + num;
        else return num;
    }

/* pract8 */
function makeGreen() {
  document.body.style.backgroundColor = "Green";
}
function makeRed() {
  document.body.style.backgroundColor = "Red";
}
function makeBlue() {
  document.body.style.backgroundColor = "Blue";
}
function makeBrown() {
  document.body.style.backgroundColor = "Brown";
}
function makeWhite() {
  document.body.style.backgroundColor = "White";
}

/* pract10 */
function changeSize(param) {
  var textElem = document.getElementById("text")

  style = window.getComputedStyle(textElem, null).getPropertyValue('font-size');

  currentSize = parseFloat(style);

  textElem.style.fontSize = currentSize + (5 * param) + 'px';
}

/* pract16 */
let favicon_images = [
  'https://usefulangle.com/img/posts/45-tmp-0.gif',
  'https://usefulangle.com/img/posts/45-tmp-1.gif',
  'https://usefulangle.com/img/posts/45-tmp-2.gif',
  'https://usefulangle.com/img/posts/45-tmp-3.gif',
  'https://usefulangle.com/img/posts/45-tmp-4.gif',
  'https://usefulangle.com/img/posts/45-tmp-5.gif',
  'https://usefulangle.com/img/posts/45-tmp-6.gif',
],
  image_counter = 0; // To keep track of the current image
setInterval(function () {
  // remove current favicon
  if (document.querySelector("link[rel='icon']") !== null)
      document.querySelector("link[rel='icon']").remove();

  // add new favicon image
  document.querySelector("head").insertAdjacentHTML('beforeend', '<link rel="icon" href="' + favicon_images[image_counter] + '" type="image/gif">');

  if (image_counter == favicon_images.length - 1)
      image_counter = 0;
  else
      image_counter++;
}, 200);

/* pract18*/
const a = document.getElementById('a'),
            c = 3 // max_step
        let b = 1 // step
        a.addEventListener('click', () => {
            if (b > 0 && b < c)
                b++
            else if (b < 0 && b > -c)
                b--
            else if (b === c)
                b = -1
            else
                b = 1

            a.style.width =
                a.style.height = `${b * 50 + a.clientWidth}px`
        })

/*pract19*/
const a = document.getElementById('a'), // button
                b = document.getElementById('b') // block
            let c = false // flag
    
            a.addEventListener('click', () => {
                b.style.visibility = c ? 'visible' : 'hidden'
                c = !c
            })

/*pract20*/
const a = document.getElementById('a'); let b
        for (let i = 0; i < 7; i++) {
            b = i > 0 ? b.cloneNode(true) : a.querySelector('div')

            const c = (Math.random() * 100).toString() + 'px'
            b.style.width = b.style.height = c
            b.style.backgroundColor = b.style.backgroundColor = 'red'

            i > 0 ? a.append(b) : undefined // noinspect
        }

/* pract22*/
const cns = document.getElementById('cns'),
            ctx = cns.getContext('2d')

        ctx.beginPath()
        ctx.arc(50, 50, 40, 0, 2 * Math.PI)
        ctx.fill()
        ctx.closePath()
        ctx.font = "30px Arial"
        ctx.fillText("Pham The Vinh", 0, 125)
