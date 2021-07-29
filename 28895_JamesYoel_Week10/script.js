$(document).ready(function() {
	$('.btnDetails').on('click', function(e){
		let productModal = $(this).next();
		productModal.modal('show');
	})

	var itemNumber = 1;
    $('.btnAdd').click(function(){
        let divInfo = $(this).closest(".info");
        let itemName = divInfo.find("#name").html();
        let itemPrice = divInfo.find("#price").html();
        let rating = divInfo.find(".rating").html();
        newrow = `
            <tr>
                <td>
                    ${itemNumber}
                </td>
                <td>
                    ${itemName}
                </td>
                <td>
                    ${itemPrice}
                </td>
                <td>
                    ${rating}
                </td>
            </tr>
        `;
        $('.table tbody').append(newrow);
        itemNumber++;
        $("#no").hide();
    })
});