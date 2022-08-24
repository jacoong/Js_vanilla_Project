const googlesearch = document.querySelector(".searchInput");


function googlesearchSubmit(event){
    event.preventDefault();
    const userinput = googlesearch.value;
    googlesearch.value = ""
    window.open(`https://www.google.com/search?q=${userinput}`,);
    console.log("xhdrhk");
    

}
googleForm.addEventListener("submit", googlesearchSubmit);