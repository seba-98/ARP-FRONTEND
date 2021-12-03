const gallery = document.getElementById('gallery2');
const modal=document.getElementById('modal')
const modalImg=document.getElementById('modalImg')
const closeButton=document.getElementById('closeButton')
const btn1=document.getElementById('btn-1')
const btn2=document.getElementById('btn-2')
const btn3=document.getElementById('btn-3')

//buttons



const arr=[];
let imgs={};

async function datos(){

    const req= await fetch('../data/data.json');
    const reqData= await req.json()
    
    for (const data of reqData) {

        const item= document.createElement('article');

        item.innerHTML=` 
        <article id='${data.id}' class='articleGallery'>
            <img class="galleryImg" src='${data.img}' />
            <p>${data.info}.</p>
        </article>`;

        gallery.appendChild(item)    
    }

    let elements= document.getElementsByClassName('articleGallery');

    for(i=0;i<elements.length; i++){
        elements[i].addEventListener('click', function(){

           let a=reqData.find(r=> r.id==this.id)
           arrImg={...a}
           modal.style.display='flex'
           modalImg.setAttribute('src', arrImg.img )

        })
    }
}

closeButton.addEventListener('click', function(){
    modal.style.display='none'
})

btn1.addEventListener('click', function(){
    modalImg.setAttribute('src', arrImg.img )
})
btn2.addEventListener('click', function(){
    modalImg.setAttribute('src', arrImg.img2 )
})
btn3.addEventListener('click', function(){
    modalImg.setAttribute('src', arrImg.img3 )
})

datos()


