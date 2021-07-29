/*xhhtp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
xhttp.send();*/
function generateUserTable(data){
	let idx = 0;
	let tbody = document.getElementById('users').querySelector('tbody');
	tbody.innerHTML = '';
	for(idx = 0; idx < data.length; idx++){ //membuat row ke table html sebanyak jumlah data yang diperoleh
		let colID = '<td>' +data[idx].id+'</td>';//membuat kolom ID
		let colName = '<td>' +data[idx].name+'</td>';//membuat kolom nama
		let colEmail = '<td>' +data[idx].email+'</td>';//membuat kolom nama persuhaan
		let colCompanyName = '<td>'+data[idx].company.name+'</td>';//membuat kolom nama perusahaan
		let btnShowPost = '<td><button class="button-posts" userId=' +data[idx].id
						    +' onclick="loadPosts('+data[idx].id+')">Show Posts</button></td>';
						    //Membuat tombol untuk menampilkan post user
		//Membuat row sejumlah kolom yang ingin ditampilkan
		let newRow = '<tr>'+colID+colName+colEmail+colCompanyName+btnShowPost+'</tr>';
		tbody.innerHTML += newRow; //meng-append row ke dalam tbody
	}
}
function loadUserData(){
	let request = new XMLHttpRequest(); // membuat objek XMLHttpRequest
	let url = 'https://jsonplaceholder.typicode.com/users';//URL Berisi data users berbentuk JSON
	request.open('GET', url, true); //Open request dengan method GET ke server secara asinkron

	request.onload = function(){
		if(request.status >= 200 && request.status < 400){//Memastikan status request "OK"
			//Memparse data menjadi Javascript object dan ditampung ke variabel dengan nama 'data'
			let data = JSON.parse(request.responseText);
			//console.log(data); //menampilkan data yang didapat
			generateUserTable(data);
		}
		else{
			alert('Page Not Found');
		}
	}
	request.onerror = function(){
		alert('Request Failed! Check your internet connection');
	}
	request.send(); //mengirim request ke server
}
function onDocumentFinish(){
	loadUserData();
}

/*function showPosts(data){
	let idx= 0;
	let tbody = document.getElementById('user-posts').querySelector('tbody');
	tbody.innerHTML = '';
	for(idx = 0; idx < data.length; idx++){//membuat row dengan kolom yang diinginkan
		let colID = '<td>'+data[idx].id+'</td>';
		let colTitle = '<td>'+data[idx].title+'</td>';
		let colBody = '<td>' +data[idx].body+'</td>';
		let btnShowComments = '<td><button class = "button-comments" postId='+data[idx].id
			+' onclick="loadComments('+data[idx].id
			+')">Show Comments</button></td>'; //Tombol untuk mengumpulkan comment pada post yang dipilih
		let newRow = '<tr>'+colID+colTitle+colBody+btnShowComments+'</tr>';
		tbody.innerHTML += newRow; //append row ke tBody
	}
}*/

function showPosts(data){
	//console.log(data);
	let idx =0;
	let tbody = document.getElementById('user-posts');
	tbody.innerHTML = '';
	for(idx = 0; idx < data.length; idx++){
		let newRow = `<div class="card">
					  <h2>TITLE: "`+data[idx].title+`"</h2>
				      <p>`+data[idx].body+`</p>
					  <button onclick="loadComment(`+data[idx].id+`,this)" class ="button-comments">Show Comments</button>
					  <div id="comment_`+data[idx].id+`"></div>
					  </div>`;
		tbody.innerHTML += newRow;
	}
}

function loadPosts(id){
	document.getElementById('post').classList.add("hidden");
	let request = new XMLHttpRequest();
	let url = 'https://jsonplaceholder.typicode.com/posts/?userId='+id; //url dengan parameter userId
	request.open('GET', url, true); // Open Request

	request.onload = function(){
		if(request.status >= 200 && request.status < 400){
			let data = JSON.parse(request.responseText);// parse JSON menjadi object
			showPosts(data);
		}
		else{
			alert('Page Not Found');
		}
	}
	request.onerror = function(){
		alert('Request Failed! Check your internet connection');
	}
	request.send(); //mengirim request
}

function ShowComments(post_id,data){
	console.log(data);
	let idx =0;
	let tbody = document.getElementById('comment_'+post_id);
	tbody.innerHTML = '<h4>Comments : </h4>';
	for(idx = 0; idx < data.length; idx++){
		let newRow = `<p><b> `+data[idx].name+`(`+data[idx].email+ `) </b> : <p style="font-style: italic;">"`+data[idx].body+ `"</p></p>`;
		tbody.innerHTML += newRow;
	}
}

function loadComment(id, comm){
	comm.classList.add('hidden');

	let request = new XMLHttpRequest();
	let url = 'https://jsonplaceholder.typicode.com/posts/1/comments/?postId='+id;
	request.open('GET', url, true);

	request.onload = function(){
		if(request.status >= 200 && request.status < 400){
			let data = JSON.parse(request.responseText);
			console.log(data);
			ShowComments(id,data);
		}
		else{
			alert('Page Not Found');
		}
	}
		request.onerror = function(){
			alert('Request Failed! Check your internet connection');
		}
		request.send();
}