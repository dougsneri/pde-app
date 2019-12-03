window.Mercadopago.setPublishableKey("ENV_PUBLIC_KEY");

function guessingPaymentMethod(event) {
    var bin = $("#cardNumber").val().substr(0,6);

    $('body').on('keydown', bin, function(event){ 
        if (bin.length >= 6) {
            console.log('passei');
            window.Mercadopago.getPaymentMethod({
                "bin": bin
            }, setPaymentMethodInfo);
        }
    })
};

function setPaymentMethodInfo(status, response) {
    if (status == 200) {
        var paymentMethodElement = $('input[name=paymentMethodId]');
        console.log(paymentMethodElement);

        if (paymentMethodElement) {
            paymentMethodElement.value = response[0].id;
        } else {
            const input = document.createElement('input');
            input.setattribute('name', 'paymentMethodId');
            input.setAttribute('type', 'hidden');
            input.setAttribute('value', response[0].id);

            form.appendChild(input);
        }
    } else {
        alert(`payment method info error: ${response}`);
    }
};

$(document).ready(function () {
    guessingPaymentMethod();
})