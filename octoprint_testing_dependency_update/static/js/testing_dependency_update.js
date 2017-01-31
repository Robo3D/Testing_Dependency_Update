/*
 * View model for OctoPrint-Testing_dependency_update
 *
 * Author: Victor
 * License: AGPLv3
 */
$(function() {
    function Testing_dependency_updateViewModel(parameters) {
        var self = this;

        // assign the injected parameters, e.g.:
        // self.loginStateViewModel = parameters[0];
        // self.settingsViewModel = parameters[1];

        // TODO: Implement your plugin's view model here.
    }

    // view model class, parameters for constructor, container to bind to
    OCTOPRINT_VIEWMODELS.push([
        Testing_dependency_updateViewModel,

        // e.g. loginStateViewModel, settingsViewModel, ...
        [ /* "loginStateViewModel", "settingsViewModel" */ ],

        // e.g. #settings_plugin_testing_dependency_update, #tab_plugin_testing_dependency_update, ...
        [ /* ... */ ]
    ]);
});
