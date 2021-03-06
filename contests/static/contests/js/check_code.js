function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (!(/^http:.*/.test(settings.url) || /^https:.*/.test(settings.url))) {
            // Only send the token to relative URLs i.e. locally.
            xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
        }
    }
});


function req(problem, code, lang){
		$.ajax({
			type:'POST',
			url: '/contests/q/submit/'+problem+"/",
			data:{'code':code, 'lang':lang},
			beforeSend: function(xhr, settings){
				console.log("Before send");
				$.ajaxSettings.beforeSend(xhr, settings);
			},
			success:function(data){
				var div = document.getElementById("result");
                var load = document.getElementById('load');
                load.innerHTML = '';
                color = 'green';
				if(data['status']=='SE' || data['status']=='RTE'){
					color = 'blue';
				}
				else if(data['status'] != 'Accepted'){
					color = 'red';
				}
				div.setAttribute('style', `background-color:${color}; padding:10px;border:2px black solid; border-radius:4px;`);
				div.innerHTML = `<p style='color:white; font-weight:bold; font-size:20px;'> ${data['status']}<br> ${data['error']}</p>`;
//				console.log(data)
			},
			error:function(data){
				document.getElementById("result").innerHTML = data['error'];
			}
		})
	}
function submit(problem, src){
	var code = document.getElementById("editcode").value;
	var lang = document.getElementById("lang").value;
	src = "<center><img src='"+src+"'></img></center>";
	document.getElementById("load").innerHTML = src;
    document.getElementById('result').innerHTML = '';
	req(problem, code, lang);
}