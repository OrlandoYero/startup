 $("#imagenPerfil").click(function(e) {
	$("#subirImagen").click();
});
			
function verImagenPerfil( uploader ) {   
   //ensure a file was selected 
   if (uploader.files && uploader.files[0]) {
	  var imageFile = uploader.files[0];
	  var sizeBytes = uploader.files[0].size;
	  var sizeKBytes = parseInt(sizeBytes / 1024);
	  
	  if(sizeKBytes > 1024){
	  	 alert("El tamaño de la imagen no debe superar 1MB.");
		 return;
	  }
	  
	  var reader = new FileReader();    
	  reader.onload = function (e) {
		 //set the image data as source
		 $("#imagenPerfil").attr("src", e.target.result);
	 }    
	 reader.readAsDataURL( imageFile );
  }
}

$("#subirImagen").change(function(){
  verImagenPerfil( this );
});