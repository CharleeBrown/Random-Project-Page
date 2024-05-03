function inits() {
    var doc = document.getElementById("buttonTry");
    doc.value = "unsubscribe";
	let upperInfo = document.getElementById("capsEntry");
	let lowerInfo = document.getElementById("lowerLocation");
	upperInfo.value = "";
	lowerInfo.value = "";
  }
  function changeText(e) {
    if (e) {
      e.value = "un-UN-subscribe";
    }
    else {
      e.value = "unsubscribe";
    }


  }
  function checkAlert(e) {
	let dollarUSLocale = Intl.NumberFormat('en-US');

    if (e.value = "un-UN-subscribe") {
		let randomNumber = Math.floor(Math.random() *1000000).toLocaleString(dollarUSLocale);
		let centsNum = Math.floor(Math.random() * 99).toLocaleString(dollarUSLocale)
		if(centsNum < 10){
			centsNum = "0"+centsNum;
		}
		else{
			centsNum = centsNum;
		}
      alert(`You have signed up by un-unsubscribing! \n A charge of     \$${randomNumber}.${centsNum}    will appear on your account shortly!`);
    }
  }
  function caseChange(e) {
    let upperInfo = e.value;
    let lowerInfo = document.getElementById("lowerLocation");
    lowerInfo.value = upperInfo.toLowerCase();
  }