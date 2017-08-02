let balance  = 50;

    function get_balance () {
    return "Your current balance is:" + balance
    
    }

    function deposit () {
    	let deposit = parseInt(prompt("How much do you want to deposit?"));
    	if (typeof deposit === "string" &  deposit === "") {
    		return  "Please enter a number"
    		deposit();
    	} else {
    		return balance += deposit;
    	}
    }


    function withdrawal() {
		let withdrawal = parseInt(prompt('How much do you want to withdraw?'));
		if (typeof(withdrawal) === "string"  &  withdrawal === "") {
			return "please enter a number"
			withdrawal();
		} else if (withdrawal > balance) {
		  alert ("insufficient funds")
		  return atm()
		} else {
		 	return balance -= withdrawal;
		}
	}

	function error() {
		alert ("Pls input correct number"); 
    return atm()
	}


	function atm() {
		var choice = parseInt(prompt("Select a choice 1.) Balance 2.) Deposit 3.) Withdrawal")); //prompt user for choice.
		if (choice == 1) {
			return get_balance();
		} else if (choice == 2) {
			return deposit();
		} else if (choice == 3) {
			return withdrawal();
		} else {
			return error();
		}
	}
	atm();