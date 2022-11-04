function referenceSearch() {
	var val = $(this).val().toLowerCase();
	var res_elem = $("#doc_search_result")

	if(val == "") {
		res_elem.hide();
		$("#doc_items").show();
		return;
	}
	
	$("#doc_items").hide();
	res_elem.html("");
	res_elem.show();
	
	var res = [];
	var index = window.doc_search_index;
	
	for(var i = 0; i < index.length; i++) {
		if(index[i].name.indexOf(val) >= 0) index[i].element.appendTo(res_elem);
	}
}

function referenceSearchInit() {
	var tmp, index = [];
	$(".doc-item").each(function(){
		tmp = {};
		tmp.name = $("h2,h3,h4", $(this)).text().toLowerCase().split("(");
		tmp.name = tmp.name[0];
		tmp.element = $(this).clone();
		$("h2", tmp.element).replaceWith("<h4>"+$("h2", $(this)).html()+"</h4>");
		$("h3", tmp.element).replaceWith("<h4>"+$("h3", $(this)).html()+"</h4>");
		index.push(tmp);
	});
	
	window.doc_search_index = index;
	window.doc_search_result = [];

	$("#doc_search").keyup(referenceSearch);
}

$(function(){
	$(".nav a[href='"+document.location.pathname+"']").parent().addClass("active");
});
