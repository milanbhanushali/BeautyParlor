(function($){"use strict";jQuery(document).ready(function($){$('body').on('click','.nectar-love',function(){var $loveLink=$(this);var $icon=$(this).find('i');var $id=$(this).attr('id');var $that=$(this);if($loveLink.hasClass('loved'))return!1;if($(this).hasClass('inactive'))return!1;var $dataToPass={action:'nectar-love',loves_id:$id}
$.post(nectarLove.ajaxurl,$dataToPass,function(data){$loveLink.find('ins').html(data);$loveLink.addClass('loved').attr('title','You already love this!')});$(this).addClass('inactive');return!1})})})(jQuery)