/*********************
   UPLOAD BUTTON
********************/
!function(e){var t=function(t,n){this.$element=e(t),this.type=this.$element.data("uploadtype")||(this.$element.find(".thumbnail").length>0?"image":"file"),this.$input=this.$element.find(":file");if(this.$input.length===0)return;this.name=this.$input.attr("name")||n.name,this.$hidden=this.$element.find('input[type=hidden][name="'+this.name+'"]'),this.$hidden.length===0&&(this.$hidden=e('<input type="hidden" />'),this.$element.prepend(this.$hidden)),this.$preview=this.$element.find(".fileupload-preview");var r=this.$preview.css("height");this.$preview.css("display")!="inline"&&r!="0px"&&r!="none"&&this.$preview.css("line-height",r),this.original={exists:this.$element.hasClass("fileupload-exists"),preview:this.$preview.html(),hiddenVal:this.$hidden.val()},this.$remove=this.$element.find('[data-dismiss="fileupload"]'),this.$element.find('[data-trigger="fileupload"]').on("click.fileupload",e.proxy(this.trigger,this)),this.listen()};t.prototype={listen:function(){this.$input.on("change.fileupload",e.proxy(this.change,this)),e(this.$input[0].form).on("reset.fileupload",e.proxy(this.reset,this)),this.$remove&&this.$remove.on("click.fileupload",e.proxy(this.clear,this))},change:function(e,t){if(t==="clear")return;var n=e.target.files!==undefined?e.target.files[0]:e.target.value?{name:e.target.value.replace(/^.+\\/,"")}:null;if(!n){this.clear();return}this.$hidden.val(""),this.$hidden.attr("name",""),this.$input.attr("name",this.name);if(this.type==="image"&&this.$preview.length>0&&(typeof n.type!="undefined"?n.type.match("image.*"):n.name.match(/\.(gif|png|jpe?g)$/i))&&typeof FileReader!="undefined"){var r=new FileReader,i=this.$preview,s=this.$element;r.onload=function(e){i.html('<img src="'+e.target.result+'" '+(i.css("max-height")!="none"?'style="max-height: '+i.css("max-height")+';"':"")+" />"),s.addClass("fileupload-exists").removeClass("fileupload-new")},r.readAsDataURL(n)}else this.$preview.text(n.name),this.$element.addClass("fileupload-exists").removeClass("fileupload-new")},clear:function(e){this.$hidden.val(""),this.$hidden.attr("name",this.name),this.$input.attr("name","");if(navigator.userAgent.match(/msie/i)){var t=this.$input.clone(!0);this.$input.after(t),this.$input.remove(),this.$input=t}else this.$input.val("");this.$preview.html(""),this.$element.addClass("fileupload-new").removeClass("fileupload-exists"),e&&(this.$input.trigger("change",["clear"]),e.preventDefault())},reset:function(e){this.clear(),this.$hidden.val(this.original.hiddenVal),this.$preview.html(this.original.preview),this.original.exists?this.$element.addClass("fileupload-exists").removeClass("fileupload-new"):this.$element.addClass("fileupload-new").removeClass("fileupload-exists")},trigger:function(e){this.$input.trigger("click"),e.preventDefault()}},e.fn.fileupload=function(n){return this.each(function(){var r=e(this),i=r.data("fileupload");i||r.data("fileupload",i=new t(this,n)),typeof n=="string"&&i[n]()})},e.fn.fileupload.Constructor=t,e(document).on("click.fileupload.data-api",'[data-provides="fileupload"]',function(t){var n=e(this);if(n.data("fileupload"))return;n.fileupload(n.data());var r=e(t.target).closest('[data-dismiss="fileupload"],[data-trigger="fileupload"]');r.length>0&&(r.trigger("click.fileupload"),t.preventDefault())})}(window.jQuery)




	/*
	Multi Select: Toggle All Button
	*/
	function multiselect_selected($el) {
		var ret = true;
		$('option', $el).each(function(element) {
			if (!!!$(this).prop('selected')) {
				ret = false;
			}
		});
		return ret;
	}

	function multiselect_selectAll($el) {
		$('option', $el).each(function(element) {
			$el.multiselect('select', $(this).val());
		});
	}

	function multiselect_deselectAll($el) {
		$('option', $el).each(function(element) {
			$el.multiselect('deselect', $(this).val());
		});
	}

	function multiselect_toggle($el, $btn) {
		if (multiselect_selected($el)) {
			multiselect_deselectAll($el);
			$btn.text("Select All");
		}
		else {
			multiselect_selectAll($el);
			$btn.text("Deselect All");
		}
	}

	$("#ms_example7-toggle").click(function(e) {
		e.preventDefault();
		multiselect_toggle($("#ms_example7"), $(this));
	});
	
	
	
	
	
	/******************************************
    Form Tabs
******************************************/

$(document).ready(function(){
$("#ftbtn1_next").click(function(){
$("#formtab1").removeClass("active");
$("#formtab2").addClass("active");
$("#tab1").removeClass("active");
$("#tab2").addClass("active");
});

$("#ftbtn2_next").click(function(){
$("#formtab2").removeClass("active");
$("#formtab3").addClass("active");
$("#tab2").removeClass("active");
$("#tab3").addClass("active");
});

$("#ftbtn2_prev").click(function(){
$("#formtab2").removeClass("active");
$("#formtab1").addClass("active");
$("#tab2").removeClass("active");
$("#tab1").addClass("active");
});

$("#ftbtn3_next").click(function(){
$("#formtab3").removeClass("active");
$("#formtab4").addClass("active");
$("#tab3").removeClass("active");
$("#tab4").addClass("active");
});

$("#ftbtn3_prev").click(function(){
$("#formtab3").removeClass("active");
$("#formtab2").addClass("active");
$("#tab3").removeClass("active");
$("#tab2").addClass("active");
});

$("#ftbtn4_next").click(function(){
$("#formtab4").removeClass("active");
$("#formtab5").addClass("active");
$("#tab4").removeClass("active");
$("#tab5").addClass("active");
});

$("#ftbtn4_prev").click(function(){
$("#formtab4").removeClass("active");
$("#formtab3").addClass("active");
$("#tab4").removeClass("active");
$("#tab3").addClass("active");
});

$("#ftbtn5_next").click(function(){
$("#formtab5").removeClass("active");
$("#formtab6").addClass("active");
$("#tab5").removeClass("active");
$("#tab6").addClass("active");
});

$("#ftbtn5_prev").click(function(){
$("#formtab5").removeClass("active");
$("#formtab4").addClass("active");
$("#tab5").removeClass("active");
$("#tab4").addClass("active");
});

$("#ftbtn6_prev").click(function(){
$("#formtab6").removeClass("active");
$("#formtab5").addClass("active");
$("#tab6").removeClass("active");
$("#tab5").addClass("active");
});

$("#ftbtn6_next").click(function(){
	$("#formtab6").removeClass("active");
	$("#formtab7").addClass("active");
	$("#tab6").removeClass("active");
	$("#tab7").addClass("active");
	});

	$("#ftbtn7_prev").click(function(){
	$("#formtab7").removeClass("active");
	$("#formtab6").addClass("active");
	$("#tab7").removeClass("active");
	$("#tab6").addClass("active");
	});


});

/******************************************
Land Tabs
******************************************/

$(document).ready(function(){
	$("#id1_next").click(function(){
		$("#landtab1").removeClass("active");
		$("#landtab2").addClass("active");
		$("#ld1").removeClass("active");
		$("#ld2").addClass("active in");
		});
	
	$("#id2_prev").click(function(){
		$("#landtab2").removeClass("active");
		$("#landtab1").addClass("active");
		$("#ld2").removeClass("active");
		$("#ld1").addClass("active in");
		});
		
	$("#id2_next").click(function(){
		$("#landtab2").removeClass("active");
		$("#landtab3").addClass("active");
		$("#ld2").removeClass("active");
		$("#ld3").addClass("active in");
		});
	
	$("#id3_prev").click(function(){
		$("#landtab3").removeClass("active");
		$("#landtab2").addClass("active");
		$("#ld3").removeClass("active");
		$("#ld2").addClass("active in");
		});
	$("#id3_next").click(function(){
		$("#landtab3").removeClass("active");
		$("#landtab4").addClass("active");
		$("#ld3").removeClass("active");
		$("#ld4").addClass("active in");
		});	
	
	$("#id4_prev").click(function(){
		$("#landtab4").removeClass("active");
		$("#landtab3").addClass("active");
		$("#ld4").removeClass("active");
		$("#ld3").addClass("active in");
		});
	$("#id4_next").click(function(){
		$("#landtab4").removeClass("active");
		$("#landtab5").addClass("active");
		$("#ld4").removeClass("active");
		$("#ld6").addClass("active in");
		});
	$("#id6_prev").click(function(){
		$("#landtab5").removeClass("active");
		$("#landtab4").addClass("active");
		$("#ld6").removeClass("active");
		$("#ld4").addClass("active in");
		});	
	$("#id6_next").click(function(){
		$("#landtab5").removeClass("active");
		$("#landtab6").addClass("active");
		$("#ld6").removeClass("active");
		$("#ld7").addClass("active in");
		});	
	$("#id7_prev").click(function(){
		$("#landtab6").removeClass("active");
		$("#landtab5").addClass("active");
		$("#ld7").removeClass("active");
		$("#ld6").addClass("active in");
		});	
	$("#id7_next").click(function(){
		$("#landtab6").removeClass("active");
		$("#landtab7").addClass("active");
		$("#ld7").removeClass("active");
		$("#ld11").addClass("active in");
		});	
	$("#id11_prev").click(function(){
		$("#landtab7").removeClass("active");
		$("#landtab6").addClass("active");
		$("#ld11").removeClass("active");
		$("#ld7").addClass("active in");
		});
	
	$("#id11_next").click(function(){
		$("#landtab7").removeClass("active");
		$("#landtab8").addClass("active");
		$("#ld11").removeClass("active");
		$("#ld12").addClass("active in");
		});	
	$("#id12_prev").click(function(){
		$("#landtab8").removeClass("active");
		$("#landtab7").addClass("active");
		$("#ld12").removeClass("active");
		$("#ld11").addClass("active in");
		});
	$("#id12_next").click(function(){
		$("#landtab8").removeClass("active");
		$("#landtab11").addClass("active");
		$("#ld12").removeClass("active");
		$("#ld13").addClass("active in");
		});	
	$("#id8_next").click(function(){
		$("#landtab9").removeClass("active");
		$("#landtab10").addClass("active");
		$("#ld8").removeClass("active");
		$("#ld9").addClass("active in");
		});	
	$("#id8_prev").click(function(){
		$("#landtab9").removeClass("active");
		$("#landtab11").addClass("active");
		$("#ld8").removeClass("active");
		$("#ld13").addClass("active in");
		});		
	$("#id13_next").click(function(){
		$("#landtab11").removeClass("active");
		$("#landtab9").addClass("active");
		$("#ld13").removeClass("active");
		$("#ld8").addClass("active in");
		});	
	$("#id13_prev").click(function(){
		$("#landtab11").removeClass("active");
		$("#landtab8").addClass("active");
		$("#ld13").removeClass("active");
		$("#ld12").addClass("active in");
		});	
	$("#id14_next").click(function(){
		$("#landtab12").removeClass("active");
		$("#landtab9").addClass("active");
		$("#ld14").removeClass("active");
		$("#ld8").addClass("active in");
		});	
	$("#id14_prev").click(function(){
		$("#landtab12").removeClass("active");
		$("#landtab11").addClass("active");
		$("#ld14").removeClass("active");
		$("#ld13").addClass("active in");
		});	
	$("#id9_prev").click(function(){
		$("#landtab10").removeClass("active");
		$("#landtab9").addClass("active");
		$("#ld9").removeClass("active");
		$("#ld8").addClass("active in");
		});		
	
	
	
	
	
});	

/******************************************
		Select2 Tooltip
******************************************/

for (var i = 1; i < 31; i++) {
	$("#createtooltip"+i).mouseenter(function() {
		$("#select2tooltip").remove();
		var data=$(this).find(".select2-chosen").text();
	  	$(this).append("<div id='select2tooltip'><p>"+data+"</p></div>");
	});
	$("#createtooltip"+i).mouseleave(function() {
  		$("#select2tooltip").remove();
	});
};
	
	



