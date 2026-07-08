import iro from "@jaames/iro";

const colorPicker = new iro.ColorPicker("#pickerContainer", {
    width: 280,
    color: "#e9a1ff",

    layout: [
        {
            component: iro.ui.Wheel,
        },
        {
            component: iro.ui.Slider,
            options: {
                sliderType: "value"
            }
        }
    ]
});


const colorPreview = document.getElementById("colorPreview");
const hexValue = document.getElementById("hexValue");
const rgbValue = document.getElementById("rgbValue");


colorPicker.on("color:change", function(color) {

    colorPreview.style.backgroundColor = color.hexString;

    hexValue.textContent = color.hexString.toUpperCase();

    rgbValue.textContent =
        `${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}`;

});