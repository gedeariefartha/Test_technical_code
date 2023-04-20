//form validasi frontend
const form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const inputangka = document.getElementById("inputAngka");
  
  if (inputangka.value === "") {
    alert("please input angka terlebih dahulu");
    return false;
  }
  
});


//code menampilkan segitiga
function displaySegitiga () {
    const number = document.getElementById("inputAngka").value;
    let segitiga = "";
    

    for (let i = 0; i < number.length; i++) {
        segitiga += number[i]
        console.log(segitiga)
    }
    // document.getElementById("result").innerHTML = "Result:" + segitiga;
}
//code menampilkan ganjil
function displayGanjil() {
    const angkaMaksimal = parseInt(document.getElementById("inputAngka").value);

    for (let i = 1; i <= angkaMaksimal; i += 2) {
        console.log(i);
    }
    
}


//code menampilkan prima
function isPrime(number) {
    if (number < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function displayPrimes() {
    const maxNumber = parseInt(document.getElementById("inputAngka").value);
    for (let i = 2; i <= maxNumber; i++) {
      if (isPrime(i)) {
        console.log(i);
      }
    }
  }
  
displaySegitiga()
displayGanjil()
displayPrimes()


