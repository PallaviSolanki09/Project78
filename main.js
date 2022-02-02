var images = ["Papa.jpg","Mummy.jpg", "Sister 1.jpeg" , "Brother.jpeg", "Me.jpeg", "Sister 2.jpg"];
var names = ["Father (Yogesh Kumar)","Mother (Babita Rani) ","Sister (Anjali Solanki)","Brother (Manav Solanki)", "Me (Pallavi Solanki)", "Sister (Ruhi Solanki)"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 6
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names [i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}

