const addEle=document.querySelector("form");
addEle.addEventListener("submit",function(e){
    e.preventDefault();
    const addtext=document.querySelector("#task").value;
    console.log(addtext);
    const collection=document.querySelector("#list");
    const newele= document.createElement('div');
    newele.id="t2";
    newele.className="bg-white h-14 w-10/12 rounded-2xl flex justify-between items-center p-2 m-1.5";
    const x=document.createElement("div");
    const y=document.createElement("img");
    y.src="dustbin-bin-trush-svgrepo-com.svg";
    y.className="size-6";
    x.innerHTML=addtext;
    newele.appendChild(x); 
    newele.appendChild(y);
    document.querySelector("#list").appendChild(newele);   
})
const removeElemet=document.querySelector("#list");
removeElemet.addEventListener("click",function(e){
    const remd=e.target;
    if(remd.className==="size-6"){
        const p=remd.parentElement;
        p.remove();

    }
})

