const weightSlider = document.getElementById('weight-slider');
const variableText = document.getElementById('variable-text');

weightSlider.addEventListener('input', function() {
    const midpoint = 500;
    console.log("Slider value:", this.value);
    console.log("Midpoint:", midpoint);
    if (parseInt(this.value) <= midpoint) {
        console.log("Using ScienceGothic-Lt");
        variableText.style.fontFamily = 'ScienceGothic-Lt';
        variableText.style.fontWeight = ((this.value / midpoint) * 700) + 200; 
    } else {
        console.log("Using ScienceGothic-Blk");
        variableText.style.fontFamily = 'ScienceGothic-BlkCnd';
        variableText.style.fontWeight = (((this.value - midpoint) / midpoint) * 700) + 900; 
    }
});





//ScienceGothic-BlkCnd

//ScienceGothic-Lt