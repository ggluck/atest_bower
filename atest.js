/**
 * atest
 * @version v0.0.1 - 2015-05-07
 * @link https://github.com/ggluck/atest
 * @author gx <458389897@qq.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
'use strict';

angular.module('ggluck.test', [])

  .directive('myDirective', function() {

    return {
      restrict: 'EAC',
      scope: true,
      compile: function compile(tElement, tAttrs, transclude) {
        tElement.html('<span>hello {{name}}</span>');
        return function postLink(scope, iElement, iAttrs, controller) {
          scope.name = 'world';
        };
      }
    };

  });

'use strict';

angular.module('ggluck.test.red',[])
.directive('red',function(){
	return {
		restrict:'A',
		link:function(scope,element,attr){
			element.css('background-color','red');
		}
	};
});