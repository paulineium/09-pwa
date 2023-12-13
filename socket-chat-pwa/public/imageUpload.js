function uploadImage() {
    const input = document.getElementById('image-file');
    const file = input.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const imgSrc = e.target.result;
            // Display the uploaded image in a list or preview area
            const img = document.createElement('img');
            img.src = imgSrc;
            document.getElementById('uploaded-images').appendChild(img);
        };
        reader.readAsDataURL(file);
    }
}
