var dragItem=document.querySelectorAll("#dragArea .drag-item")
var dropArea=document.querySelectorAll("#dropArea .drop-item")
var drgId;
for(var i=0;i<dragItem.length;i++){
    dragItem[i].addEventListener("dragstart",function(ilkin){
        ilkin.dataTransfer.setData("ilkinId",this.id)
        drgId=ilkin.dataTransfer.getData("ilkinId").split("drag")[1]
        console.log(drgId)
    })
}
for(var i=0;i<dropArea.length;i++){
    dropArea[i].addEventListener("dragover",function(a){
        minval=this.getAttribute("samirmin")
        maxval=this.getAttribute("samirmax")
        if(drgId>=minval && drgId<=maxval){
            this.style.background="green"
        }
        a.preventDefault()
    })
    dropArea[i].addEventListener("drop",function(a){
        var dtId= a.dataTransfer.getData("ilkinId")
        console.log(dtId)
        var dtItem=document.getElementById(dtId)
        //  dropArea[i].appendChild(dtItem);
     })
     
}

