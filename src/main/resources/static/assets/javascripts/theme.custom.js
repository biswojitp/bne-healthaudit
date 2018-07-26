(function($) {
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

}(jQuery));

/*********************
   UPLOAD BUTTON
********************/
!function(e){var t=function(t,n){this.$element=e(t),this.type=this.$element.data("uploadtype")||(this.$element.find(".thumbnail").length>0?"image":"file"),this.$input=this.$element.find(":file");if(this.$input.length===0)return;this.name=this.$input.attr("name")||n.name,this.$hidden=this.$element.find('input[type=hidden][name="'+this.name+'"]'),this.$hidden.length===0&&(this.$hidden=e('<input type="hidden" />'),this.$element.prepend(this.$hidden)),this.$preview=this.$element.find(".fileupload-preview");var r=this.$preview.css("height");this.$preview.css("display")!="inline"&&r!="0px"&&r!="none"&&this.$preview.css("line-height",r),this.original={exists:this.$element.hasClass("fileupload-exists"),preview:this.$preview.html(),hiddenVal:this.$hidden.val()},this.$remove=this.$element.find('[data-dismiss="fileupload"]'),this.$element.find('[data-trigger="fileupload"]').on("click.fileupload",e.proxy(this.trigger,this)),this.listen()};t.prototype={listen:function(){this.$input.on("change.fileupload",e.proxy(this.change,this)),e(this.$input[0].form).on("reset.fileupload",e.proxy(this.reset,this)),this.$remove&&this.$remove.on("click.fileupload",e.proxy(this.clear,this))},change:function(e,t){if(t==="clear")return;var n=e.target.files!==undefined?e.target.files[0]:e.target.value?{name:e.target.value.replace(/^.+\\/,"")}:null;if(!n){this.clear();return}this.$hidden.val(""),this.$hidden.attr("name",""),this.$input.attr("name",this.name);if(this.type==="image"&&this.$preview.length>0&&(typeof n.type!="undefined"?n.type.match("image.*"):n.name.match(/\.(gif|png|jpe?g)$/i))&&typeof FileReader!="undefined"){var r=new FileReader,i=this.$preview,s=this.$element;r.onload=function(e){i.html('<img src="'+e.target.result+'" '+(i.css("max-height")!="none"?'style="max-height: '+i.css("max-height")+';"':"")+" />"),s.addClass("fileupload-exists").removeClass("fileupload-new")},r.readAsDataURL(n)}else this.$preview.text(n.name),this.$element.addClass("fileupload-exists").removeClass("fileupload-new")},clear:function(e){this.$hidden.val(""),this.$hidden.attr("name",this.name),this.$input.attr("name","");if(navigator.userAgent.match(/msie/i)){var t=this.$input.clone(!0);this.$input.after(t),this.$input.remove(),this.$input=t}else this.$input.val("");this.$preview.html(""),this.$element.addClass("fileupload-new").removeClass("fileupload-exists"),e&&(this.$input.trigger("change",["clear"]),e.preventDefault())},reset:function(e){this.clear(),this.$hidden.val(this.original.hiddenVal),this.$preview.html(this.original.preview),this.original.exists?this.$element.addClass("fileupload-exists").removeClass("fileupload-new"):this.$element.addClass("fileupload-new").removeClass("fileupload-exists")},trigger:function(e){this.$input.trigger("click"),e.preventDefault()}},e.fn.fileupload=function(n){return this.each(function(){var r=e(this),i=r.data("fileupload");i||r.data("fileupload",i=new t(this,n)),typeof n=="string"&&i[n]()})},e.fn.fileupload.Constructor=t,e(document).on("click.fileupload.data-api",'[data-provides="fileupload"]',function(t){var n=e(this);if(n.data("fileupload"))return;n.fileupload(n.data());var r=e(t.target).closest('[data-dismiss="fileupload"],[data-trigger="fileupload"]');r.length>0&&(r.trigger("click.fileupload"),t.preventDefault())})}(window.jQuery)

/*******************************
   To Do List Toogle Button
********************************/
$(document).ready(function(){
  $("#openinputadd").bind("click",function(){
      $("#inputadd").slideDown();
  });
  $("#inputaddclose").bind("click",function(){
      $("#inputadd").slideUp();
  });


});
/**************************
    Dashboard Details
**************************/

var header = $('.stats__header');
var bar  = $('.stats__item-bar');
var nums = $('.stats__item-num');
var overlay = $('.stats__overlay');
var back = $('.stats__overlay-back');
var isOpen = false;

var vDepartment = $('#department');
var vAvg = $('#avg');
var vGames = $('#games');
var vActivities = $('#activities');

$(document).on('ready', function() {
  entrance();
});

bar.on('click', showOverlay);
back.on('click', showOverlay);

function entrance() {
  bar.addClass('active');
  header.addClass('active');
  header.on('transitionend webkitTransitionend', function() {
    nums.css('opacity', '1');
    bar.css('transition-delay', '0');
    header.off('transitionend webkitTransitionend');
  });
}

function showOverlay() {
  if (!isOpen) {
    overlay.addClass('active').removeAttr('style');
    bar.css('transition', 'all 0.4s cubic-bezier(0.86, 0, 0.07, 1)')
    .removeClass('active');
    header.removeClass('active');
    nums.css('opacity', '0');
    isOpen = true;
    
   updateInfo($(this).parent().index());
  } else {
    overlay.css('transition', 'all 0.4s cubic-bezier(0.755, 0.05, 0.855, 0.06)').removeClass('active');
    bar.addClass('active').removeAttr('style');
    header.addClass('active');
    nums.css('opacity', '1');
    isOpen = false;
  }
}

var data = [
  {
    department: 'Human Resource Managements',
    activities: '65',
    games: '82',
    avg: '0.79'
    
  },
  {
    department: 'Financial Accounting Management',
    activities: '56',
    games: '79',
    avg: '0.7'
    
  },
  {
    department: 'IT Helpdesk',
    activities: '50',
    games: '72',
    avg: '0.69'
    
  },
  {
    department: 'Internal Asset Management',
    activities: '32',
    games: '79',
    avg: '0.40'
    
  },
  {
    department: 'Integrated Asset Management',
    activities: '38',
    games: '78',
    avg: '0.48'
    
  },
  {
    department: 'Legal Case Management',
    activities: '32',
    games: '48',
    avg: '0.66'
    
  },
  {
    department: 'Online Allotment System',
    activities: '51',
    games: '78',
    avg: '0.65'
    
  },
    {
    department: 'Content Management',
    activities: '51',
    games: '78',
    avg: '0.65'
    
  },
  {
    department: 'RTI Portal',
    activities: '90',
    games: '76',
    avg: '0.66'
    
  },
  {
    department: 'e-Filing',
    activities: '90',
    games: '76',
    avg: '0.66'
    
  },
  {
    department: 'Land Acquisition',
    activities: '90',
    games: '76',
    avg: '0.66'
    
  },
  {
    department: 'Integrated Project Management',
    activities: '90',
    games: '76',
    avg: '0.66'
    
  },
   {
    department: 'Document Management',
    activities: '90',
    games: '76',
    avg: '0.66'
    
  } 

];

function updateInfo(index) {
  vDepartment.text(data[index].department);
  vAvg.text(data[index].avg);
  vActivities.text(data[index].activities);
  vGames.text(data[index].games);
}

/******************************************
          Form Tabs
******************************************/

$(document).ready(function(){
  $("#ftbtn1_next").click(function(){
      $("#formtab1").removeClass("active");
      $("#formtab2").addClass("active");
      $("ul.wizard-steps li:nth-child(1)").removeClass("active");
      $("ul.wizard-steps li:nth-child(2)").addClass("active");
  });

  $("#ftbtn2_next").click(function(){
      $("#formtab2").removeClass("active");
      $("#formtab3").addClass("active");
      $("ul.wizard-steps li:nth-child(2)").removeClass("active");
      $("ul.wizard-steps li:nth-child(3)").addClass("active");
  });

  $("#ftbtn2_prev").click(function(){
      $("#formtab2").removeClass("active");
      $("#formtab1").addClass("active");
      $("ul.wizard-steps li:nth-child(2)").removeClass("active");
      $("ul.wizard-steps li:nth-child(1)").addClass("active");
  });
  
  $("#ftbtn3_next").click(function(){
      $("#formtab3").removeClass("active");
      $("#formtab4").addClass("active");
      $("ul.wizard-steps li:nth-child(3)").removeClass("active");
      $("ul.wizard-steps li:nth-child(4)").addClass("active");
  });

  $("#ftbtn3_prev").click(function(){
      $("#formtab3").removeClass("active");
      $("#formtab2").addClass("active");
      $("ul.wizard-steps li:nth-child(3)").removeClass("active");
      $("ul.wizard-steps li:nth-child(2)").addClass("active");
  });

  $("#ftbtn4_next").click(function(){
      $("#formtab4").removeClass("active");
      $("#formtab5").addClass("active");
      $("ul.wizard-steps li:nth-child(4)").removeClass("active");
      $("ul.wizard-steps li:nth-child(5)").addClass("active");
  });

  $("#ftbtn4_prev").click(function(){
      $("#formtab4").removeClass("active");
      $("#formtab3").addClass("active");
      $("ul.wizard-steps li:nth-child(4)").removeClass("active");
      $("ul.wizard-steps li:nth-child(3)").addClass("active");
  });

  $("#ftbtn5_next").click(function(){
      $("#formtab5").removeClass("active");
      $("#formtab6").addClass("active");
      $("ul.wizard-steps li:nth-child(5)").removeClass("active");
      $("ul.wizard-steps li:nth-child(6)").addClass("active");
  });

  $("#ftbtn5_prev").click(function(){
      $("#formtab5").removeClass("active");
      $("#formtab4").addClass("active");
      $("ul.wizard-steps li:nth-child(5)").removeClass("active");
      $("ul.wizard-steps li:nth-child(4)").addClass("active");
  });

  $("#ftbtn6_prev").click(function(){
      $("#formtab6").removeClass("active");
      $("#formtab5").addClass("active");
      $("ul.wizard-steps li:nth-child(6)").removeClass("active");
      $("ul.wizard-steps li:nth-child(5)").addClass("active");
  });


});

