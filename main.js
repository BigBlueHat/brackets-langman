/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets, window */

/** Simple extension that lets you add file type mappings to languages */
define(function (require, exports, module) {
    "use strict";

    var LanguageManager = brackets.getModule("language/LanguageManager");
    var language = LanguageManager.getLanguage("html");
    language.addFileExtension("mustache");
    // ...do the above for each language you'd like to add...
    // TODO: interface for doing this for you is forthcoming. ^_^
});
