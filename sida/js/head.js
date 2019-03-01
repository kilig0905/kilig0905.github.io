function $(id){
    return typeof id==='string'?document.getElementById(id):id;
}

window.onload=tab;

function tab(){

    var lis=$('navigation-up').getElementsByTagName('li');
    var divs=$('navigation-down').getElementsByTagName('div');
    if(lis.length!=divs.length)
        return;


    for(var i=0;i<lis.length;i++){
        lis[i].id=i;
        lis[i].onmouseover=function(){
            changeOption(this.id);
        }
    }


    function changeOption(curIndex){
        for(var j=0;j<lis.length;j++){
            lis[j].className='';
            divs[j].style.display='none';
        }
        lis[curIndex].className='choosing';
        divs[curIndex].style.display='block';
        index=curIndex;




    }
}