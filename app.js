$(document).ready(function(){

    // labels of drop message form in contact page 
    $('#dropmsg_name_lbl').hide();
    $('#dropmsg_email_lbl').hide();
    $('#dropmsg_subject_lbl').hide();
    $('#dropmsg_message_lbl').hide();

    $('#otherOffices').load("blank.txt");

    $('#personalListBtns').load("blank.txt");
    $('#subAppmntTypeListBtns').load("blank.txt");
    $('#appointmentStep4').load("blank.txt");

});

// transaction history header handler
var accountTypeHeader = new Vue({
    el: '#typeOfAccount',
    data: {acctTypeTransactLabel: ''}
});

// functions called by chequingBtn, savingsBtn and creditcardsBtn buttons
// For chequing account
function changeToChequing() {
    accountTypeHeader.acctTypeTransactLabel = "CHEQUING ACCOUNT";
}

// For savings account
function changeToSavings() {
    accountTypeHeader.acctTypeTransactLabel = "SAVINGS ACCOUNT";
}

// For credit cards
function changeToCreditCards() {
    accountTypeHeader.acctTypeTransactLabel = "CREDIT CARD";
}

// Ajax code to filter
// Ajax example
$('#creditSearchChequing').on("keyup", function(){
    var value = $(this).val().toLowerCase();
    $('#listCheqC tr').filter(function(){
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)    // index (0 - 10)
    });
});

$('#debitSearchChequing').on("keyup", function(){
    var value = $(this).val().toLowerCase();
    $('#listCheqD tr').filter(function(){
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)    // index (0 - 10)
    });
});


$('#name').on("keyup", function(){
    $('#dropmsg_name_lbl').show();
});

$('#email').on("keyup", function(){
    $('#dropmsg_email_lbl').show();
});

$('#subject').on("keyup", function(){
    $('#dropmsg_subject_lbl').show();
});

$('#message').on("keyup", function(){
    $('#dropmsg_message_lbl').show();
});

// script handling other branches
$("#showLocations").click(function(){
    if($("#showLocations").text()=="show more"){
        $('#otherOffices').load("otherBranches.txt");
        $("#showLocations").html("show less");
    }else{
        $('#otherOffices').load("blank.txt");
        $("#showLocations").html("show more");
        $('#transactionsH').load("chequing.txt");
    }
});

// script to load text files
$('#personalBtn').click(function(){
    $('#personalListBtns').load("nextOnPersonal.txt");
    $('#personalBtn').css()
});

// Showing transaction history
$('#chequingBtn').click(function(){
    $('#transactionsH').load("chequing.txt");
});

$('#savingsBtn').click(function(){
    $('#transactionsH').load("savings.txt");
});

$('#creditcardBtn').click(function(){
    $('#transactionsH').load("creditcard.txt");
});


$('#bankingBtn').click(function(){
    $('#subAppmntTypeListBtns').load("nextOnBanking.txt");
});

$('#showContact').click(function(){
    $('#contactInfo').load("info.txt");
});

$('#openChequing').click(function(){
    $('#appointmentStep4').load("Step4Banking.txt");
});

$('#openSavings').click(function(){
    $('#appointmentStep4').load("Step4Banking.txt");
});

$('#openUSdollar').click(function(){
    $('#appointmentStep4').load("Step4Banking.txt");
});

$('#applyOverdraftP').click(function(){
    $('#appointmentStep4').load("Step4Banking.txt");
});

$('#investingBtn').click(function(){
    $('#subAppmntTypeListBtns').load("nextOnInvesting.txt");
});

$('#startsaving').click(function(){
    $('#appointmentStep4').load("Step4Banking.txt");
});

$('#retirement').click(function(){
    $('#appointmentStep4').load("Step4Banking.txt");
});

$('#mutualfunds').click(function(){
    $('#appointmentStep4').load("Step4Banking.txt");
});

$('#childeduc').click(function(){
    $('#appointmentStep4').load("Step4Banking.txt");
});
