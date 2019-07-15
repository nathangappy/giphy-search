const app = {};

// giphy api key
app.key = '2MZDVDkNUnQoS449MQ9jZSPThXfobczP';

app.init = () => {
    console.log('app initialized')
}

// get input value from user
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    document.querySelector('.results').innerHTML = ''
    // $('.results').empty()
    let searchTerm = document.getElementById('searchText').value;
    app.getGifs(searchTerm);
    console.log(searchTerm);
})

// append dynamic data to page
app.displayGifs = (gifArray) => {
    gifArray.forEach(gif => {
        let gifHtml =  
        `<div class="gif-box">
            <div class="img-box">
                <img src="${gif.images.original_still.url}">
            </div>
            <p class="gif-title">${gif.title}</p>
        </div>`
        $('.results').append(gifHtml);
    });
}

// make an api call using user input
app.getGifs = (searchTerm) => {
    $.ajax({
        url: 'https://api.giphy.com/v1/gifs/search',
        method: 'GET',
        dataType: 'json',
        data: {
            api_key: app.key,
            q: searchTerm
        }
    }).then(res => {
        let gifArray = res.data;
        app.displayGifs(gifArray);
    })
    
}

// document ready
$(() => {
    console.log('Document ready');
    app.init();
});











































