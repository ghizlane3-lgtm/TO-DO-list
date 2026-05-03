const addbtn=document.getElementById('addbtn');
const taskinput=document.getElementById('taskinput');
 const tasklist=document.getElementById('tasklist');
 const img=document.getElementById('undraw-img');


 

 //funtion of updating the image 
 function updateimage(){
    if(tasklist.children.length!==0){
      img.style.display='none' ; 
    }
    else if(tasklist.children.length===0){
        img.style.display='block';
    }
  }
   //average function
  function moyenne(){
  const check=document.querySelectorAll('input:checked').length;
  const total=document.querySelectorAll('input[type=checkbox]').length;
  const average=document.getElementById('average');
  if(total===0){
    average.textContent="Let's start💪";
  }
  else{
   average.textContent=check +"/"+total;
  }

}


  //clicking the add button +

addbtn.addEventListener('click',function(){


    if(taskinput.value==''){return;}

    //adding a task
   const listitems=document.createElement('li');
    const tasktext=taskinput.value;
    listitems.textContent=tasktext;
    tasklist.appendChild(listitems);
     updateimage();
    
     
    listitems.innerHTML=`
    <input type="checkbox" class="checkbox">
    <span>${tasktext}</span>`;
    taskinput.value='';
     moyenne();
     


   
   //controling and styling the checkbox
    const checkbox=listitems.querySelector('.checkbox');
    const span =listitems.querySelector('span');
      checkbox.addEventListener('change',()=>{
        if(checkbox.checked){
          span.style.textDecoration='line-through';
          
         }
        else{
          span.style.textDecoration='none';

        }
        moyenne();
      });

    
    //the delete button , functionality
    const delet=document.createElement('button');
     delet.innerHTML=`<i class="fa-solid fa-trash"></i>`;
    listitems.appendChild(delet);
    delet.classList.add('deletebtn')

    delet.addEventListener('click',function(){
    tasklist.removeChild(listitems);
    updateimage();
    moyenne();
   

    });

   });

   






 


 



  

