var name = prompt("what is your name")

alert("hey, wlecome to my website " + name )

var songkind = prompt("what kind of songs do you like  here is a list == Rap / Blouse / Jazz")

<<<<<<< HEAD

=======
>>>>>>> d552cfc4d5682692820c2a6bc781f57b4d14a910
//************************************************************** those Strings are for a discription for the images in the website      *************************************************************//

var string = "Hip hop music, also known as rap music,is a genre of popular music developed in the United States by inner-city African Americans and Latino Americans in the Bronx borough of New York City in the 1970s. It consists of a stylized rhythmic music that commonly accompanies rapping, a rhythmic and rhyming speech that is chanted.[8] It developed as part of hip hop culture, a subculture defined by four key stylistic elements: MCing/rapping, DJing/scratching with turntables, break dancing, and graffiti writing.Other elements include sampling beats or bass lines from records (or synthesized beats and sounds), and rhythmic beatboxing. While often used to refer solely to rapping, 'hip hop'  more properly denotes the practice of the entire subculture.The term hip hop music is sometimes used synonymously with the term rap music,though rapping is not a required component of hip hop music; the genre may also incorporate other elements of hip hop culture, including DJing, turntablism, scratching, beatboxing, and instrumental tracks.   -->         "+"     "
var stringA ="Blouse is an American alternative rock band based in Portland, Oregon formed in 2010 by Charlie Hilton (vocals, guitar) and Patrick Adams (bass).-->"
var stringB ="Jazz is a music genre that originated in the African-American communities of New Orleans, Louisiana, United States, in the late 19th and early 20th centuries, with its roots in blues and ragtime. Since the 1920s Jazz Age, it has been recognized as a major form of musical expression in traditional and popular music, linked by the common bonds of African-American and European-American musical parentage.-->"
/**end of the Strings */

if (songkind=="Rap"){
  document.write("<div>" + "<h3>" + songkind+ "</h3>" +"<img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTovucQCV_YAr_ZPfmQrR1cUgkOTMTGhPW4nw&usqp=CAU width='350' height='350'/>" + "</div>"+string)
}
<<<<<<< HEAD


=======
>>>>>>> d552cfc4d5682692820c2a6bc781f57b4d14a910
else if (songkind=="Blouse"){
document.write("<div>" + "<h3>" + songkind+ "</h3>" +"<img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX_S7vWHBR2UT36RbGunxNeXHdwLOz5vHQFA&usqp=CAU width='350' height='350'/>" + "</div>"+stringA)
}
else if (songkind=="Jazz"){
document.write("<div>" + "<h3>" + songkind+ "</h3>" +"<img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmI5Mp8VP_1GDkzdXBC_DGA1mdDw0TqzVIVA&usqp=CAU  width='350' height='350'/>" + "</div>"+stringB)
}
<<<<<<< HEAD
else{document.write("I force you to choose one of the kinds above Rap  /Jazz  / Blouse          (*_*) LoL")
}
=======
else{"I force you to choose one of the kinds above LoL"}
>>>>>>> d552cfc4d5682692820c2a6bc781f57b4d14a910




