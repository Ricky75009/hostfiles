
//var canvasDiv = document.getElementById('myCanvas');
//var width = canvasDiv.clientWidth;
//var height = canvasDiv.clientHeight;

function setup(){
    createCanvas(1000,500).parent('myCanvas');
    background(255);
 //   var sketchCanvas = createCanvas(width,height);
  //  sketchCanvas.parent("myCanvas");
  }
  
  
  let ofs =0;
  let ofs_v =1;
  
  
  
  function draw(){
  
    translate(0,-200);
    ofs+=ofs_v;
   if((ofs==offset) || (ofs==0))
    {
     ofs_v=0-ofs_v;
    }
    
  
    //drawLine(212+ofs,0,255);
    //drawLine(215+ofs,#FF6A7E,#FFFA6A);//color
    strokeWeight(1);
    stroke(0,0,255);
    drawLine(210+ofs,100,100);
  
    
  }
  
  let step = 80;
  let noiseScale = 0.02;
  let offset = 300;
  
  let y0;
  function drawLine(y0){
   
  fill(255);
    beginShape();
    curveVertex(-50,y0);
    for (let i =0 ; i<width/step+3;i+=1){
       let noiseVal = noise(i*noiseScale*(y0*0.06), frameCount*noiseScale); 
       
  
       curveVertex(i*step-10,y0+noiseVal*offset);
    }
   curveVertex(width+10, height+200);
   curveVertex(0, height+210);
   curveVertex(0, height+210);
   endShape();
    
  }