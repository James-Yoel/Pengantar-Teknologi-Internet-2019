/*let documentReady = () => {
	$( "#accordion" ).accordion({
		collapsible: true
	});
}

$(document).ready(documentReady());*/

$(function() {
            $( "#accordion" ).accordion({
               collapsible: true
            });
         });

let dialog = $('#dialog-form').dialog({autoOpen: false, height: 400, width: 350, modal: true, buttons: {
	"Add new order": function(){
		//implement here
	},
	Cancel: function(){
		dialog.dialog( "close" );
	}
},
close: function(){
	form[ 0 ].reset();
}
});

$('.btnAddOrder').on('click', function(btn){
	//and here
	dialog.dialog('open');
});

function renderAllProduct(products,discountFlag){
	products = JSON.parse(JSON.stringify(products))
	if(discountFlag)
		products.map(product => {
			product.price *= 0.75
			return product
		})
	document.getElementById('card-container').innerHTML = ''
	products.forEach( product => renderProduct(product))
}
/*$( function() {
    $( "#accordion" ).accordion();
  } );*/