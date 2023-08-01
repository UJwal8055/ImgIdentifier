// How to set up the Webcam
// set the camera characterstics
Webcam.set({
    width: 330,
    height:260,
    image_format: 'png',
    png_quality: 150
});

//Add the Camera
camera = document.getElementById("camera");
Webcam.attach('#camera')

function Capture() {

    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = ' <img id="captured_img" src=" ' + data_uri +' "/> ';
    });
    }


    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/zvi2XhOZg/model.json', modelLoaded );
    function modelLoaded(){
        console.log('Teachable Machine Model Loded OK!');
    }

    function Identify(){
        img = document.getElementById("captured_img");
        classifier.classify(img, gotResult);
    }

    function gotResult( error, results ){
        if(error){
            console.error(error);
            } else{
                console.log(results);
                document.getElementById("result _ object").innerHTML = results[0].label;
                document.getElementById("result_accuracy").innerHTML = results[0].confidence.toFixed(2);
            }    

    }