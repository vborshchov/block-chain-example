import Transaction from "./models/Transaction.js";
import Block from "./models/Block.js";
import Chain from "./models/Chain.js";

window.Transaction = Transaction;
window.Block = Block;
window.Chain = Chain;


// clipboard js init function
(function(){
    new Clipboard('.code');
})();


// toastr function
$(".code").click(function() {
	toastr.options.positionClass = "toast-top-center";
	toastr.success('&nbsp; &nbsp; Copied to the clipboard');
});