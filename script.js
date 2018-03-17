var showPreviewInHtmlById = function(fileID,previewID){
    return function(){
        Array.from(document.getElementById(fileID).files).forEach(cur => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(cur);
            fileReader.onload = function(){
                const img = document.createElement('img');
                img.src = fileReader.result;
                img.classList.add('image');
                document.getElementById(previewID).appendChild(img);
            }
        });        
    }    
}

document.getElementById('file-up').addEventListener('change',showPreviewInHtmlById('file-up','target'));
