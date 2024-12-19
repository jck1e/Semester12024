var actNum = 0;
var nums = [1, 2, 3, 4];
var windowShape = document.querySelector("#window"),
  windowSide = document.querySelector("#side-window"),
  windowSideExtra = document.querySelector("#side-window-extra"),
  popSound = document.querySelector("#popSound");

document.querySelector("#building").addEventListener("click", changeShape);

function changeShape() {
  //   let cont = false;
  //   popSound.play();
  actNum = nums.shift();
  nums.push(actNum);
  console.log(actNum + " ar: " + nums);

  if (actNum == 1) {
    /* makes small*/
    windowShape.style.width = "4vw";
    windowShape.style.height = "4vw";
    windowShape.style.top = "41%";
    windowShape.style.left = "44%";
    windowSide.style.width = "50%";
    windowSide.style.left = "-2%";
    windowSide.style.top = "-1%";
    // windowSideExtra.style.width = "50%";
    windowSideExtra.style.background = "none";
  }
  if (actNum == 2) {
    /* makes slanted */
    windowShape.style.transform = "skew(14deg)";
    windowShape.style.left = "32%";
    windowShape.style.height = "66%";
    windowShape.style.width = "36%";
    windowShape.style.top = "14%";
    windowSideExtra.style.background = "none";
  }
  if (actNum == 3) {
    /*makes rotated */
    windowShape.style.top = "24%";
    windowShape.style.left = "28%";
    windowShape.style.transform = "rotate(45deg)";
    windowShape.style.height = "10vw";
    windowShape.style.width = "10vw";
    windowSide.style.width = "23%";
    windowSideExtra.style.backgroundColor = "#2c2d2e";
    windowSideExtra.style.transform = "rotate(90deg)";
    windowSideExtra.style.width = "23%";
    windowSideExtra.style.top = "-64%";
    windowSideExtra.style.left = "38%";
  }
  if (actNum == 4) {
    /*back to normal*/
    windowShape.style.width = "48%";
    windowShape.style.height = "50%";
    windowShape.style.top = "22%";
    windowShape.style.left = "25%";
    windowShape.style.transform = "rotate(0deg)";
    windowSideExtra.style.background = "none";
    windowSide.style.width = "35%";
  }
}

//   while (!cont) {
//     var num = Math.random().toFixed(1) * 10;
//     if (num <= 3 && num != actNum && num != 0) {
//       cont = true;
//       actNum = num;
//       //   console.log(num + "less than 3");
//     }
//   }
//   console.log("click");
