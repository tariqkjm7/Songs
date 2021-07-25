function welcoming(){ var name = prompt("what is your name")

alert("hey, wlecome to my website " + name )
}
welcoming();

//************************************************************** those Strings are for a discription for the images in the website      *************************************************************//

var string = "Hip hop music, also known as rap music,is a genre of popular music developed in the United States by inner-city African Americans and Latino Americans in the Bronx borough of New York City in the 1970s. It consists of a stylized rhythmic music that commonly accompanies rapping, a rhythmic and rhyming speech that is chanted.[8] It developed as part of hip hop culture, a subculture defined by four key stylistic elements: MCing/rapping, DJing/scratching with turntables, break dancing, and graffiti writing.Other elements include sampling beats or bass lines from records (or synthesized beats and sounds), and rhythmic beatboxing. While often used to refer solely to rapping, 'hip hop'  more properly denotes the practice of the entire subculture.The term hip hop music is sometimes used synonymously with the term rap music,though rapping is not a required component of hip hop music; the genre may also incorporate other elements of hip hop culture, including DJing, turntablism, scratching, beatboxing, and instrumental tracks.   -->         "+"     "
var stringA ="Blouse is an American alternative rock band based in Portland, Oregon formed in 2010 by Charlie Hilton (vocals, guitar) and Patrick Adams (bass).-->"
var stringB ="Jazz is a music genre that originated in the African-American communities of New Orleans, Louisiana, United States, in the late 19th and early 20th centuries, with its roots in blues and ragtime. Since the 1920s Jazz Age, it has been recognized as a major form of musical expression in traditional and popular music, linked by the common bonds of African-American and European-American musical parentage.-->"
/**end of the Strings */

var songkind = prompt("what kind of songs do you like  here is a list == Rap / Blouse / Jazz") 
while (songkind != "Rap" && songkind != "Blouse" && songkind != "Jazz"){
  var songkind = prompt("I force you to choose one of these kinds::: Rap  /Jazz  / Blouse          (*_*) LoL") 
}
var counter = prompt("how many times would you like to read the same article   (->_->)  ")


RapSongs();
BlouseSongs();
JazzSongs();


function RapSongs(){
if (songkind=="Rap"){
  for(var i =1; i<=counter; i++){
  
  document.write("<div>" + "<h3>" + songkind+ "</h3>" +"<img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS5T0I8sOxXr9Hb8y5TDTQNcl_2pPKbQrN5w&usqp=CAU width='400' height='350'/>" + "</div>"+string) }
  }
}
  

  function BlouseSongs(){
 if (songkind=="Blouse"){
    for(var i =1; i<=counter; i++){
document.write("<div>" + "<h3>" + songkind+ "</h3>" +"<img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX_S7vWHBR2UT36RbGunxNeXHdwLOz5vHQFA&usqp=CAU width='350' height='350'/>" + "</div>"+stringA)}
  }
}



function JazzSongs(){
 if (songkind=="Jazz"){
    for(var i =1; i<=counter; i++){
document.write("<div>" + "<h3>" + songkind+ "</h3>" +"<img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmI5Mp8VP_1GDkzdXBC_DGA1mdDw0TqzVIVA&usqp=CAU  width='350' height='350'/>" + "</div>"+stringB)}
  }
}





