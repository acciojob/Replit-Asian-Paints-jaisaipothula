//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    const gridItems = document.querySelectorAll('.grid-item');
    const changeButton = document.getElementById('change_button');
    const resetButton = document.getElementById('reset_button');

    // Function to change the background color of a specific grid item
    function changeGridItemColor(blockId, color) {
        const gridItem = document.getElementById(blockId);
        if (gridItem) {
            gridItem.style.backgroundColor = color;
        }
    }

    // Change color button click event listener
    changeButton.addEventListener('click', function() {
        const blockId = document.getElementById('block_id').value;
        const color = document.getElementById('colour_id').value;
        
        changeGridItemColor(blockId, color);
    });

    // Reset button click event listener
    resetButton.addEventListener('click', function() {
        gridItems.forEach(function(item) {
            item.style.backgroundColor = 'transparent';
        });
    });
});
