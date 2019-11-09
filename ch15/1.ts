let p = <HTMLElement>document.querySelector("p");
let size: number;
function setSize(newSize: number) {
  size = newSize;
  p.style.fontSize = size + "rem";
}
setSize(2);
//EventListener只能是函数，不能是方法，而且
function handleArrow(event: any) {
  if (event.key == "ArrowUp") {
    if (size > 5) {
      p.textContent = "💥";
      document.body.removeEventListener("keydown", handleArrow);
    } else {
      setSize(size * 1.1);
      event.preventDefault();
    }
  } else if (event.key == "ArrowDown") {
    setSize(size * 0.9);
    event.preventDefault();
  }
}
document.body.addEventListener("keydown", handleArrow);