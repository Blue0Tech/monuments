let coords = {};
$(document).ready(function() {
    getCoords();
    getWeather();
});
function getCoords() {
    let searchParams = new URLSearchParams(window.location.search);
    if(searchParams.has('src') && searchParams.has('dest')) {
        let src = searchParams.get('src'), dest = searchParams.get('dest');
        coords.src_long = src.split(';')[0], coords.src_lat = src.split(';')[1];
        coords.dest_long = dest.split(';')[0], coords.dest_lat = dest.split(';')[1];
    } else {
        alert('Please select a destination');
        window.history.back();
    };
};
function getWeather() {
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?lat=${coords.dest_lat}&lon=${coords.dest_long}&appid=eb1dea078d579cb3867d8d8bd5bef15c`,
        type: 'get',
        success: function(response) {
            let name = response.name;
            let weather = response.weather[0].main;
            $('scene_container').append(`
                <a-entity gps-entity-place="latitude: ${coords.dest_lat}; longitude: ${coords.dest_long};">
                    <a-entity>
                        <a-text height="50" value="The weather is ${weather} at ${name}."></a-text>
                    </a-entity>
                </a-entity>
            `);
        },
        error: function(error) {
            console.log(error.responseJSON.cod);
            console.log(error.responseJSON.message);
        }
    });
}