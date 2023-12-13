document.addEventListener('DOMContentLoaded', () => {
    const textOptionsSelect = document.getElementById('text-options');
    const textarea = document.getElementById('journal-entry');
    const customizationDiv = document.getElementById('customization');

    function toggleCustomization() {
        if (customizationDiv.style.display === 'none') {
            customizationDiv.style.display = 'block';
        } else {
            customizationDiv.style.display = 'none';
        }
    }

    textOptionsSelect.addEventListener('change', () => {
        const selectedOption = textOptionsSelect.value;

        switch (selectedOption) {
            case 'arial':
            case 'times':
                textarea.style.fontFamily = selectedOption;
                textarea.style.fontWeight = 'normal';
                textarea.style.fontStyle = 'normal';
                break;
            case 'bold':
                textarea.style.fontWeight = 'bold';
                textarea.style.fontStyle = 'normal';
                break;
            case 'italic':
                textarea.style.fontWeight = 'normal';
                textarea.style.fontStyle = 'italic';
                break;
            default:
                // Handle other cases if needed
                break;
        }
    });

    // Assign the toggleCustomization function to the click event of the customization toggle
    document.getElementById('customization-toggle').addEventListener('click', toggleCustomization);
});
