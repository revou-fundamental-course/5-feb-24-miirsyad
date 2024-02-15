function tukarSuhu(){
    let dari = document.getElementById("dari").value 
    let ke = document.getElementById("ke").value 
    document.getElementById("dari").value = ke
    document.getElementById("ke").value = dari
}

function plusMinus(){
    let input = document.getElementById("input").value
    document.getElementById("input").value = input * -1
}

function hapusInput(){
    document.getElementById("input").value = ""
    document.getElementById("solusi").style.display = "none"
    document.getElementById("displayHasil").innerText = ""
}

function hasilKonversi(){
    let input = document.getElementById("input").value
    let dari = document.getElementById("dari").value
    let ke = document.getElementById("ke").value
    let hasil

    if (dari == "C"){
        if (ke == "C"){
            hasil = input
            document.getElementById("solusi").style.display = "none"
        }
        else if (ke == "F"){
            hasil = (input * (9/5)) + 32
            document.getElementById("solusi").style.display = "flex"
            document.getElementById("solusiF").style.display = "flex"
            document.getElementById("solusiC").style.display = "none"
        }
    } 
    else if (dari == "F"){
        if (ke == "F"){
            hasil = input
            document.getElementById("solusi").style.display = "none"
        }
        else if(ke == "C"){
            hasil = (input - 32) * (5/9) 
            document.getElementById("solusi").style.display = "flex"
            document.getElementById("solusiC").style.display = "flex"
            document.getElementById("solusiF").style.display = "none"
        }
    }

    let adjustedHasil = hasil.toLocaleString(undefined,{maximumFractionDigits:4});
    document.getElementById("displayHasil").innerText = adjustedHasil
    
    for (i=0; i<2; i++){
        document.getElementsByClassName("solusiSatu")[i].innerText = input

        document.getElementsByClassName("solusiDua")[i].innerText = adjustedHasil
    }

}




  
