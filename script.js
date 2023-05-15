const canvas =document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const nameInput = document.getElementById('name');
const memberInput =document.getElementById('memberId');
const downloadBtn = document.getElementById('download-btn');
let curdate = new Date();
let month = curdate.getMonth();
month += 1;
let date = curdate.getDate();
let year = curdate.getFullYear();
let abcd= year+ "-" + month + "-" + date;

const image = new Image()
image.src="certificate4.jpg"
image.onload = function(){
    drawImage()

}

function drawImage(){
    ctx.drawImage(image,0,0,canvas.clientWidth,canvas.height)
    ctx.font = '17px monotype corsiva'
    ctx.fillStyle='yellow'
    ctx.fillText(nameInput.value,170,170);
    ctx.fillText(abcd,275,260);
    ctx.fillText(memberInput.value,250,197);
}



nameInput.addEventListener('input',function(){
    const name = nameInput.value
    drawImage()

}) 

memberInput.addEventListener('input',function(){
    const name = nameInput.value
    drawImage()

}) 



downloadBtn.addEventListener('click',function(){
    downloadBtn.href=canvas.toDataURL('image/jpg')
    downloadBtn.download= 'Certificate -' + nameInput.value
})

