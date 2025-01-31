(function ($) {
    var CKEDITOR_FA = {
        version: '11.5.3'
    };

    CKEDITOR.dtd.$removeEmpty.span = 0;
    CKEDITOR.dtd.$removeEmpty.em = 0;
    CKEDITOR.dtd.$removeEmpty.i = 0;

    CKEDITOR.plugins.add('ckeditor_fa5pro', {
    icons: 'ckeditor-fa',
    init: function (editor) {
        editor.addCommand('ckeditor_fa5pro', new CKEDITOR.dialogCommand('ckeditorFaDialog', {
            allowedContent: 'i(!fa-*)',
        }));
        editor.ui.addButton('ckeditor_fa5pro', {
            label: 'Insert FontAwesome icon',
            command: 'ckeditor_fa5pro',
            toolbar: 'insert',
            icon: this.path + 'icons/ckeditor-fa.png',
        });
        CKEDITOR.dialog.add('ckeditorFaDialog', this.path + 'dialogs/ckeditor-fa.js?v='+CKEDITOR_FA.version);
        CKEDITOR.document.appendStyleSheet(this.path + 'css/ckeditor-fa.css?v='+CKEDITOR_FA.version);
    }
  });
})(TYPO3.jQuery);