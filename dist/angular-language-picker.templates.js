angular.module('templates-languagePicker', ['language-picker-button.tpl.html', 'language-picker-dialog.tpl.html']);

angular.module('language-picker-button.tpl.html', []).run(['$templateCache', function($templateCache) {
  'use strict';
  $templateCache.put('language-picker-button.tpl.html',
    '<button ng-click=open() class="btn btn-default navbar-btn"><span ng-transclude="" class="fa fa-globe"></span></button>');
}]);

angular.module('language-picker-dialog.tpl.html', []).run(['$templateCache', function($templateCache) {
  'use strict';
  $templateCache.put('language-picker-dialog.tpl.html',
    '<div class=modal-content><div class=modal-header><button ng-click=close() class=close><span class="fa fa-times"></span><span class=sr-only>Close</span></button><h3 class=modal-title><span class="fa fa-globe"></span> Choose a language</h3></div><div class="modal-body modal-lang-picker"><div ng-show="languages.length &gt; limitMin" class=form-group><input type=search ng-model=search placeholder="Search languages..." class="form-control"><h4>We are available in {{languages.length}} languages</h4></div><div class=row><div ng-repeat="lang in languages | filter:search | limitTo: limitMax" class="col-xs-6 col-sm-4 col-lg-4"><a href=# ng-click=onLanguageChange({language:lang}) class=language><span ng-if=flags><span class="flag-icon flag-icon-{{lang.country}}"></span>&nbsp;</span><span>{{lang.nativeName}}</span></a></div><div ng-if="languages.length - limitMax &gt; 0" class="col-xs-6 col-sm-3 col-lg-2">+ {{languages.length - limitMax}} more</div></div></div></div>');
}]);