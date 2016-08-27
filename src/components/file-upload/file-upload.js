var FileUploadDirective = function() {
    return {
        templateUrl: 'components/file-upload/views/file-upload.html',
        scope: {
            fileread: "="
        },
        link: function(scope, element, attributes) {
            element = document.querySelector('[file-upload-directive]');
            element.querySelector("div").addEventListener('click', function() {
                element.querySelector('[type="file"]').click();
            });

            element.querySelector('[type="file"]').addEventListener('change', function(changeEvent) {
                var reader = new FileReader();
                reader.onload = function(loadEvent) {
                    scope.$apply(function() {
                        scope.fileread = element.querySelector('[name="files[]"]').value;
                    });
                };
                reader.readAsDataURL(changeEvent.target.files[0]);
            });
        }
    };
};

FileUploadDirective.$inject = [];
