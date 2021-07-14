const youTube = new YouTube();

youTube.setKey('AIzaSyAV8kN2NDxPOZsFehipSbfe3o3LNHM5Qh8');

window.onLoad = youTube.getMostPopularByCategoryAndRegion(2, 10, 'AU', function(error, result) {
    if (error) {
        console.log(error);
    } else {
        console.log(JSON.stringify(result, null, 2));
    }
});