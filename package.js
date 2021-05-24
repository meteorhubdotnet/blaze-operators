Package.describe({
    name: 'meteorhubdotnet:blaze-operators',
    summary: 'Simple operators for Blaze templates',
    version: '1.0.0',
    git: '#',
});

Package.onUse(function(api) {

    api.versionsFrom('METEOR@2.2');

    api.use([
        'meteorhubdotnet:firestorm-iron-router',
    ], 'client');

    api.addFiles(['tuxedo.js'], 'client');

});
