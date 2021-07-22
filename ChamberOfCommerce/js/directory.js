
const requestURL = '/ChamberOfCommerce/directory.json';

window.addEventListener('load', () => {
    fetch(requestURL)
        .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const directory = jsonObject['directory'];
        // console.table(jsonObject);   
        
        for(let z = 0; z < 7; z++){
        
            i=z+1;
            
            document.getElementById(`dir_img${i}`).setAttribute("src", directory[z].imageurl);
            document.getElementById(`name${i}`).textContent = directory[z].name;
            document.getElementById(`web${i}`).innerHTML = directory[z].webpage;
            document.getElementById(`phone${i}`).innerHTML = directory[z].phone;

            document.getElementById(`dir_list_img${i}`).setAttribute("src", directory[z].imageurl);
            document.getElementById(`name_list${i}`).textContent = directory[z].name;
            document.getElementById(`web_list${i}`).innerHTML = directory[z].webpage;
            document.getElementById(`phone_list${i}`).innerHTML = directory[z].phone;
            
            
    
        }
        
        
               
        
        
        
    });
});


var li_links = document.querySelectorAll(".links ul li");
var view_wraps = document.querySelectorAll(".directory_view");
var list_view = document.querySelector(".directory_list");
var grid_view = document.querySelector(".directory_grid");



li_links.forEach(function(link){
	link.addEventListener("click", function(){
		li_links.forEach(function(link){
			link.classList.remove("active");
		})

		link.classList.add("active");

		var li_view = link.getAttribute("data-view");

		view_wraps.forEach(function(view){
			view.style.display = "none";
		})

		if(li_view == "list-view"){
			list_view.style.display = "block";
		}
		else{
			grid_view.style.display = "grid";
		}
	})
})