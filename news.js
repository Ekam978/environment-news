function get_data() {
    fetch('https://newsapi.org/v2/everything?q=climate&sortBy=publishedAt&apiKey=f4a7cc07790747a88ad8519c05a8e531')
    .then(a => a.json())
    .then(response =>{
        console.log(response);
        length=response.articles.length;
        console.log(length)
        for(var i=0; i<response.articles.length; i++){
            document.getElementById("container").innerHTML+="<div id='news'><img src='"+response.articles[i].urlToImage+"'><h3>"+response.articles[i].title+"</h3><br>"+response.articles[i].description+"</div><hr>"
        }
    })
}

get_data();