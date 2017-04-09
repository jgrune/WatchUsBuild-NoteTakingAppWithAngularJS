angular.module('NoteWrangler').controller('NotesEditController', function($scope, Note, $routeParams){
  $scope.note = Note.get({id: $routeParams.id})
})
