const items=document.querySelectorAll(".item");
for(let i=0;i<items.length;i++){
    items[i].addEventListener('click',function(){
        this.classList.remove("middle","left","right");
        this.classList.add('middle');

        document.body.style.background=this.dataset.color;
    

        let left=this.previousElementSibling ?? items[items.length-1];
        left.classList.remove("middle","left","right");
        left.classList.add("left");

        let right=this.nextElementSibling ?? items[0];
        right.classList.remove("left","middle","right");
        right.classList.add("right");
    })
}
