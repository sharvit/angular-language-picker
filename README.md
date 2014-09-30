# Angular language picker 
an unoficial fork that aims to supports angular-gettext

## Demo

https://rawgit.com/azachar/angular-language-picker/master/example/index.html

## Install

```bash
bower install azachar/angular-language-picker --save
```
 
## Usage

Ensure that your `index.html` contains 

```html
<script src="bower_components/angular-language-picker/dist/angular-language-picker.js"></script>
<script src="bower_components/angular-language-picker/dist/angular-language-picker-templates.js"></script>
```

Add `language-picker` to your angular module:

```js
var module = angular.module('exampleApp', ['language-picker']);
```

Specify `supported-languages` attribute, which supplies a list of supported languages by code. Specify them with codes using lowdash.

```html
<language-picker supported-languages="['en_US', 'fr_CA']" on-language-change="onLanguageChange"></language-picker>
```


```js
$scope.onLanguageChange = function (lang) {
  $scope.currentLang = lang;
});
```

if you are using 'angular-gettext' use

```js
$scope.onLanguageChange = function (langInfo) {
  gettextCatalog.setCurrentLanguage(langInfo.lang.toLowerCase());
});
````

### Customization

You can customize a language picker template by defining a template module ``templates-languagePicker`` and removing 
```html
<script src="bower_components/angular-language-picker/dist/angular-language-picker-templates.js"></script>
```
from ``index.html``.

```js
angular.module('templates-languagePicker', ['lang-picker-button.html', 'lang-picker.html']);

angular.module("lang-picker-button.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("lang-picker-button.html",
    "<button ng-click=\"open()\" class=\"btn btn-default navbar-btn\">\n" +
    "    <span class=\"fa fa-globe\" ng-transclude></span>\n" +
    "</button>\n" +
    "");
}]);

angular.module("lang-picker.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("lang-picker.html",
    "<div class=\"modal-content\">\n" +
    "        <div class=\"modal-header\">\n" +
    "          <button class=\"close\" ng-click=\"close()\">\n" +
    "            <span class=\"fa fa-times\"></span>\n" +
    "            <span class=\"sr-only\">Close</span>\n" +
    "          </button>\n" +
    "          <h3 class=\"modal-title\">Choose a language</h3>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"modal-body modal-lang-picker\">\n" +
    "          <div class=\"form-group\">\n" +
    "            <input class=\"form-control\" type=\"search\" ng-model=\"langSearch\" placeholder=\"Search languages...\">\n" +
    "          </div>\n" +
    "          <h4>We are available in {{langInfo.length}} languages</h4>\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-xs-6 col-sm-4 col-lg-3\" ng-repeat=\"lang in langInfo | filter:langSearch | limitTo: limit\">\n" +
    "              <a href=\"#\" ng-click=\"onLanguageChange({lang: lang})\" class=\"ellipsis lang-picker-lang\">\n" +
    "                {{lang.nativeName}}\n" +
    "              </a>\n" +
    "            </div>\n" +
    "            <div ng-if=\"langInfo.length - limit > 0\" class=\"col-xs-6 col-sm-3 col-lg-2\">\n" +
    "              + {{langInfo.length - limit}} more\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "");
}]);
```
