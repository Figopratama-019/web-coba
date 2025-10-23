pindah = 1;
function GA(){
    if(pindah == 1){
        Btn.style.top=400;
        Btn.style.left=300;
        pindah=2;
    }
    else if(pindah == 2){
        Btn.style.top=400;
        Btn.style.left=50;
        pindah=3;
        }
        else if(pindah == 3){
        Btn.style.top=370;
        Btn.style.left=166;
        pindah=4;
        }
        else if(pindah == 4){
            Btn.style.top=400;
            Btn.style.left=300;
            pindah=5;
            }
            else if(pindah==5){
            Btn.style.top=380;
            Btn.style.right=200;
            pindah=1;
            }

}