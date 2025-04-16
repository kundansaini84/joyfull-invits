// Function to preview uploaded photo
function previewImage(event) {
    const uploadedPhoto = document.getElementById('uploadedPhoto');
    
    // Display the uploaded image
    uploadedPhoto.src = URL.createObjectURL(event.target.files[0]);
    uploadedPhoto.style.display = 'block';
}

// Ensure html2canvas is loaded
if (typeof html2canvas === 'undefined') {
    console.error('html2canvas is not loaded. Make sure you include the html2canvas library.');
}

// Event listener for the "Download Invitation" button
document.getElementById('downloadBtn').addEventListener('click', function() {
    const invitationCard = document.getElementById('invitationCard');
    
    // Check if the invitationCard exists before trying to capture it
    if (invitationCard) {
        html2canvas(invitationCard).then(function(canvas) {
            // Create a link element to download the image
            const link = document.createElement('a');
            link.href = canvas.toDataURL(); // Convert canvas to data URL
            link.download = 'wedding_invitation.png'; // Set default file name

            // Ensure the download works in all browsers
            document.body.appendChild(link);  // Append to body to trigger download
            link.click();  // Trigger the download
            document.body.removeChild(link);  // Remove the link after download
        });
    } else {
        console.error('Invitation card not found');
    }
});
