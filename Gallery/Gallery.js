var fontSizebtn = document.getElementById('changeFontSizeButton');
var themebtn = document.getElementById('changeThemeButton');
var body = document.getElementById('body');
var bodyStyle = window.getComputedStyle(body);
var colorPickerFirst = document.getElementById('color-picker-first-half');
var colorPickerSecond = document.getElementById('color-picker-second-half');
var theme = "theme1";
var firstColor;
var secondColor;

function HoveredImageDisplay(imgs) {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
    expandImg.style.height = '800px';
    imgs.scrollIntoView();    
}

function HoveredImageDescriptionDisplay(desId) {
    var sourceDiv = document.getElementById(desId);
    const targetDiv = document.getElementById("targetDiv");
    targetDiv.innerHTML = sourceDiv.innerHTML;
}

function ChangeFont(font) {
    body.style.fontFamily = font;
}

function ChangeFontSize(size) {
    body.style.fontSize = size;
}

function ChangeBackgroundColor(color1,color2) {
    document.body.style.background = `linear-gradient(to bottom right, ${color1}, ${color2})`;
}

function ChangeTextColour(color) {
    body.style.color = color;
}

function ThemeChange(){
        if (theme === "theme1") {
        theme = "theme2";        
        firstColor = '#FFD8E4';
        secondColor = '#31111D';
        ChangeFont('Comic Sans MS', 'Comic Sans');
        ChangeBackgroundColor(firstColor, secondColor);
        colorPickerFirst.value = firstColor;
        colorPickerSecond.value = secondColor;
        ChangeTextColour('black');
        themebtn.src = "./Assets/themeIconDark.png";
        fontSizebtn.src = "./Assets/fontIconDark.png";
    }
    else if (theme === "theme2") {
        theme = "theme3";
        firstColor = '#7D5260';
        secondColor = 'black';
        ChangeFont('Courier New, Courier');
        ChangeBackgroundColor(firstColor, secondColor);
        colorPickerFirst.value = firstColor;
        colorPickerSecond.value = secondColor;
        ChangeTextColour('white');
        themebtn.src = "./Assets/themeIconLight.png";
        fontSizebtn.src = "./Assets/fontIconLight.png";
    } else {
        theme = "theme1";
        firstColor = '#625B71';
        secondColor = '#601410';
        ChangeFont('Times, Times New Roman');        
        ChangeBackgroundColor(firstColor, secondColor);
        colorPickerFirst.value = firstColor;
        colorPickerSecond.value = secondColor;
        ChangeTextColour('#FFD8E4');
        themebtn.src = "./Assets/themeIconLight.png";
        fontSizebtn.src = "./Assets/fontIconLight.png";        
    }
}
window.onload = function(){
    ThemeChange();
    ChangeFontSize('24px');
}

themebtn.addEventListener('click', () => {
        ThemeChange();
});

fontSizebtn.addEventListener('click', () => {
    if (bodyStyle.getPropertyValue('font-size') === '24px') {
        console.log(bodyStyle.getPropertyValue('font-size'));
        ChangeFontSize('30px');
    } else if (bodyStyle.getPropertyValue('font-size') === '30px') {
        console.log(bodyStyle.getPropertyValue('font-size'));
        ChangeFontSize('36px');
    } else {
        console.log(bodyStyle.getPropertyValue('font-size'));
        ChangeFontSize('24px');
    }
});

colorPickerFirst.addEventListener('input', () => {
    firstColor = colorPickerFirst.value;
    ChangeBackgroundColor(firstColor,secondColor);
});

colorPickerSecond.addEventListener('input', () => {
    secondColor = colorPickerSecond.value;
    ChangeBackgroundColor(firstColor,secondColor);
});
