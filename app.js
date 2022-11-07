$(document).ready(function(){

    // labels of drop message form in contact page 
    $('#dropmsg_name_lbl').hide();
    $('#dropmsg_email_lbl').hide();
    $('#dropmsg_subject_lbl').hide();
    $('#dropmsg_message_lbl').hide();

    $("#savingsSectn").slideUp();
    $("#creditcardSectn").slideUp();
    accountTypeHeader.acctTypeTransactLabel = "CHEQUING ACCOUNT";
    $("#chequingSectn").slideDown();

    $('#otherOffices').load("blank.txt");

    // handling booking an appointment section
    $('#personalStep1').slideUp();
    $('#businessStep1').slideUp();
    $('#pbankingStep2').slideUp();
    $('#pinvestingStep2').slideUp();
    $('#phomefinancingStep2').slideUp();
    $('#pborrowingStep2').slideUp();
    $('#pcreditcardsStep2').slideUp();
    $('#bbankingStep2').slideUp();
    $('#binvestingStep2').slideUp();
    $('#bborrowingStep2').slideUp();
    $('#bcreditcardsStep2').slideUp();
    $('#appointmentStep4').slideUp();

    // $('#personalListBtns').load("blank.txt");
    // $('#subAppmntTypeListBtns').load("blank.txt");
    // $('#appointmentStep4').load("blank.txt");

});

// transaction history header handler
var accountTypeHeader = new Vue({
    el: '#typeOfAccount',
    data: {acctTypeTransactLabel: ''}
});

// functions called by chequingBtn, savingsBtn and creditcardsBtn buttons
// For chequing account
/* function changeToChequing() {
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
 */

$("#chequingBtn").click(function(){
    $("#savingsSectn").slideUp();
    $("#creditcardSectn").slideUp();
    accountTypeHeader.acctTypeTransactLabel = "CHEQUING ACCOUNT";
    $("#chequingSectn").slideDown();   
});

$("#savingsBtn").click(function(){
    $("#creditcardSectn").slideUp();
    $("#chequingSectn").slideUp();
    accountTypeHeader.acctTypeTransactLabel = "SAVINGS ACCOUNT";
    $("#savingsSectn").slideDown();
});

$("#creditcardsBtn").click(function(){
    $("#savingsSectn").slideUp();
    $("#chequingSectn").slideUp();
    accountTypeHeader.acctTypeTransactLabel = "CREDIT CARD";
    $("#creditcardSectn").slideDown();
});

// Ajax code to filter
// Ajax example

// Chequing account section
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

// Savings account section
$('#creditSearchSaving').on("keyup", function(){
    var value = $(this).val().toLowerCase();
    $('#listSavingC tr').filter(function(){
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)    // index (0 - 10)
    });
});

$('#debitSearchSaving').on("keyup", function(){
    var value = $(this).val().toLowerCase();
    $('#listSavingD tr').filter(function(){
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)    // index (0 - 10)
    });
});

// Credit Card section
$('#creditSearchCreditCard').on("keyup", function(){
    var value = $(this).val().toLowerCase();
    $('#listCreditCardC tr').filter(function(){
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)    // index (0 - 10)
    });
});

$('#debitSearchCreditCard').on("keyup", function(){
    var value = $(this).val().toLowerCase();
    $('#listCreditCardD tr').filter(function(){
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
    }
});


// handling contact booking appointment button clicks
$('#personalBtn').click(function(){
    $('#businessStep1').slideUp();    
    $('#pbankingStep2').slideUp();
    $('#pinvestingStep2').slideUp();
    $('#phomefinancingStep2').slideUp();
    $('#pborrowingStep2').slideUp();
    $('#pcreditcardsStep2').slideUp();
    $('#bbankingStep2').slideUp();
    $('#binvestingStep2').slideUp();
    $('#bborrowingStep2').slideUp();
    $('#bcreditcardsStep2').slideUp();
    $('#appointmentStep4').slideUp();
    $('#personalStep1').slideDown();
});

$('#businessBtn').click(function(){
    $('#personalStep1').slideUp();    
    $('#pbankingStep2').slideUp();
    $('#pinvestingStep2').slideUp();
    $('#phomefinancingStep2').slideUp();
    $('#pborrowingStep2').slideUp();
    $('#pcreditcardsStep2').slideUp();
    $('#bbankingStep2').slideUp();
    $('#binvestingStep2').slideUp();
    $('#bborrowingStep2').slideUp();
    $('#bcreditcardsStep2').slideUp();
    $('#appointmentStep4').slideUp();
    $('#businessStep1').slideDown();
});


$('#bankingBtn').click(function(){
    $('#businessStep1').slideUp();
    $('#pinvestingStep2').slideUp();
    $('#phomefinancingStep2').slideUp();
    $('#pborrowingStep2').slideUp();
    $('#pcreditcardsStep2').slideUp();
    $('#bbankingStep2').slideUp();
    $('#binvestingStep2').slideUp();
    $('#bborrowingStep2').slideUp();
    $('#bcreditcardsStep2').slideUp();
    $('#appointmentStep4').slideDown();
    $('#pbankingStep2').slideDown();
});

$('#investingBtn').click(function(){
    $('#businessStep1').slideUp();
    $('#pbankingStep2').slideUp();
    $('#phomefinancingStep2').slideUp();
    $('#pborrowingStep2').slideUp();
    $('#pcreditcardsStep2').slideUp();
    $('#bbankingStep2').slideUp();
    $('#binvestingStep2').slideUp();
    $('#bborrowingStep2').slideUp();
    $('#bcreditcardsStep2').slideUp();
    $('#appointmentStep4').slideDown();
    $('#pinvestingStep2').slideDown();
});

$('#homeFinancingBtn').click(function(){
    $('#businessStep1').slideUp();
    $('#pbankingStep2').slideUp();
    $('#pinvestingStep2').slideUp();
    $('#pborrowingStep2').slideUp();
    $('#pcreditcardsStep2').slideUp();
    $('#bbankingStep2').slideUp();
    $('#binvestingStep2').slideUp();
    $('#bborrowingStep2').slideUp();
    $('#bcreditcardsStep2').slideUp();
    $('#appointmentStep4').slideDown();
    $('#phomefinancingStep2').slideDown();
});

$('#borrowingBtn').click(function(){
    $('#businessStep1').slideUp();
    $('#pbankingStep2').slideUp();
    $('#pinvestingStep2').slideUp();
    $('#phomefinancingStep2').slideUp();
    $('#pcreditcardsStep2').slideUp();
    $('#bbankingStep2').slideUp();
    $('#binvestingStep2').slideUp();
    $('#bborrowingStep2').slideUp();
    $('#bcreditcardsStep2').slideUp();
    $('#appointmentStep4').slideDown();
    $('#pborrowingStep2').slideDown();
});

$('#creditcardBtn').click(function(){
    $('#businessStep1').slideUp();
    $('#pbankingStep2').slideUp();
    $('#pinvestingStep2').slideUp();
    $('#phomefinancingStep2').slideUp();
    $('#pborrowingStep2').slideUp();
    $('#bbankingStep2').slideUp();
    $('#binvestingStep2').slideUp();
    $('#bborrowingStep2').slideUp();
    $('#bcreditcardsStep2').slideUp();
    $('#appointmentStep4').slideDown();
    $('#pcreditcardsStep2').slideDown();
});

$('#bankingBtnBiz').click(function(){
    $('#personalStep1').slideUp();    
    $('#pbankingStep2').slideUp();
    $('#pinvestingStep2').slideUp();
    $('#phomefinancingStep2').slideUp();
    $('#pborrowingStep2').slideUp();
    $('#pcreditcardsStep2').slideUp();
    $('#binvestingStep2').slideUp();
    $('#bborrowingStep2').slideUp();
    $('#bcreditcardsStep2').slideUp();
    $('#appointmentStep4').slideDown();
    $('#bbankingStep2').slideDown();
});

$('#investingBtnBiz').click(function(){
    $('#personalStep1').slideUp();    
    $('#pbankingStep2').slideUp();
    $('#pinvestingStep2').slideUp();
    $('#phomefinancingStep2').slideUp();
    $('#pborrowingStep2').slideUp();
    $('#pcreditcardsStep2').slideUp();
    $('#bbankingStep2').slideUp();
    $('#bborrowingStep2').slideUp();
    $('#bcreditcardsStep2').slideUp();
    $('#appointmentStep4').slideDown();
    $('#binvestingStep2').slideDown();
});

$('#borrowingBtnBiz').click(function(){
    $('#personalStep1').slideUp();    
    $('#pbankingStep2').slideUp();
    $('#pinvestingStep2').slideUp();
    $('#phomefinancingStep2').slideUp();
    $('#pborrowingStep2').slideUp();
    $('#pcreditcardsStep2').slideUp();
    $('#bbankingStep2').slideUp();
    $('#binvestingStep2').slideUp();
    $('#bcreditcardsStep2').slideUp();
    $('#appointmentStep4').slideDown();
    $('#bborrowingStep2').slideDown();
});

$('#creditcardBtnBiz').click(function(){
    $('#personalStep1').slideUp();    
    $('#pbankingStep2').slideUp();
    $('#pinvestingStep2').slideUp();
    $('#phomefinancingStep2').slideUp();
    $('#pborrowingStep2').slideUp();
    $('#pcreditcardsStep2').slideUp();
    $('#bbankingStep2').slideUp();
    $('#binvestingStep2').slideUp();
    $('#bborrowingStep2').slideUp();
    $('#appointmentStep4').slideDown();
    $('#bcreditcardsStep2').slideDown();
});

// script to load text files
// $('#personalBtn').click(function(){
//     $('#personalListBtns').load("nextOnPersonal.txt");
//     $('#personalBtn').css()
// });

// Showing transaction history
// $('#chequingBtn').click(function(){
//     $('#transactionsH').load("chequing.txt");
// });

// $('#savingsBtn').click(function(){
//     $('#transactionsH').load("savings.txt");
// });

// $('#creditcardBtn').click(function(){
//     $('#transactionsH').load("creditcard.txt");
// });


// $('#showContact').click(function(){
//     $('#contactInfo').load("info.txt");
// });

// $('#openChequing').click(function(){
//     $('#appointmentStep4').load("Step4Banking.txt");
// });

// $('#openSavings').click(function(){
//     $('#appointmentStep4').load("Step4Banking.txt");
// });

// $('#openUSdollar').click(function(){
//     $('#appointmentStep4').load("Step4Banking.txt");
// });

// $('#applyOverdraftP').click(function(){
//     $('#appointmentStep4').load("Step4Banking.txt");
// });

// $('#investingBtn').click(function(){
//     $('#subAppmntTypeListBtns').load("nextOnInvesting.txt");
// });

// $('#startsaving').click(function(){
//     $('#appointmentStep4').load("Step4Banking.txt");
// });

// $('#retirement').click(function(){
//     $('#appointmentStep4').load("Step4Banking.txt");
// });

// $('#mutualfunds').click(function(){
//     $('#appointmentStep4').load("Step4Banking.txt");
// });

// $('#childeduc').click(function(){
//     $('#appointmentStep4').load("Step4Banking.txt");
// });
