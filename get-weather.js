let coords = {};
$(document).ready(function() {
    getCoords();
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