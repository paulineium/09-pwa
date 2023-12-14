document.addEventListener('DOMContentLoaded', () => {
    const textOptionsSelect = document.getElementById('text-options');
    const boldButton = document.getElementById('bold-button');
    const italicButton = document.getElementById('italic-button');
    const textarea = document.getElementById('journal-entry');
    const customizationDiv = document.getElementById('customization');

    let fontWeight = 'normal';
    let fontStyle = 'normal';

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
            case 'Arial':
            case 'Times New Roman':
                fontWeight = 'normal';
                fontStyle = 'normal';
                break;
            default:
                break;
        }

        applyStyles();
    });

    boldButton.addEventListener('click', () => {
        fontWeight = fontWeight === 'bold' ? 'normal' : 'bold';
        applyStyles();
    });

    italicButton.addEventListener('click', () => {
        fontStyle = fontStyle === 'italic' ? 'normal' : 'italic';
        applyStyles();
    });

    function applyStyles() {
        textarea.style.fontFamily = textOptionsSelect.value;
        textarea.style.fontWeight = fontWeight;
        textarea.style.fontStyle = fontStyle;
    }

    // Assign the toggleCustomization function to the click event of the customization toggle
    document.getElementById('customization-toggle').addEventListener('click', toggleCustomization);
});
