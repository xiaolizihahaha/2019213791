const photo_list=[
    'img/pic2.png',
    'img/pic3.jpg',
    'img/pic4.png',
    'img/pic5.png',
    'img/pic6.jpg',
    'img/pic7.jpg',
];

const albumView=document.querySelector("#album-view");
const modalView=document.querySelector("#modal-view");

function createImage(src)
{
    const image=document.createElement("img");
    image.src=src;
    return image;
}

// -------------------鼠标点击---------------------------
function albumClick(event)
{
    const src1=event.currentTarget.src;
    modalView.querySelector("img").src=src1;
    modalView.classList.remove("hidden");
    modalView.classList.add("no-scroll");
    modalView.style.top=event.clientY;
}

function modalClick(event)
{
    modalView.classList.add("hidden");
    modalView.classList.remove("no-scroll");
}


const figureList=albumView.querySelectorAll("figure");
for(let i=0;i<figureList.length;i++)
{
    const imageList=figureList[i].querySelectorAll("img");
    for(let j=0;j<imageList.length;j++)
    {
        console.log(imageList[j].src);
        imageList[j].addEventListener('pointerup',albumClick);
    }
}



const image1=createImage(photo_list[0]);
modalView.appendChild(image1);
modalView.addEventListener("pointerup",modalClick);


