(function () {
    if (Framework7.prototype.device.android) {
        Dom7('head').append(
            '<link rel="stylesheet" href="css/material-icons.css">' +
            '<link rel="stylesheet" type="text/css" href="components/framework7/dist/css/framework7.material.min.css"/>' +
            '<link rel="stylesheet" type="text/css" href="components/framework7/dist/css/framework7.material.colors.min.css"/>' +
            '<link rel="stylesheet" href="css/style.material.css">'
        );
    }
    else {
        Dom7('head').append(
            '<link rel="stylesheet" type="text/css" href="components/framework7/dist/css/framework7.ios.min.css"/>' +
            '<link rel="stylesheet" type="text/css" href="components/framework7/dist/css/framework7.ios.colors.min.css"/>' +
            '<link rel="stylesheet" href="css/style.ios.css">'
        );
    }
})();