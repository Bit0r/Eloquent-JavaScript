let panes=document.getElementsByClassName('pane');
for (const pane of panes) {
    pane.addEventListener('click',()=>pane.remove());
}
