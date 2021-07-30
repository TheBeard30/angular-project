import {Editor} from 'tinymce';

export const TinyMceConfig = {
    // inline: true,
    // skin: 'oxide-dark',
    base_url: 'assets/tinymce',
    height: 200,
    language: 'zh_CN',
    language_url: 'assets/tinymce/lang/zh_CN.js',
    branding: false,
    menubar: false,
    toolbar: [
        'undo redo | fontselect fontsizeselect | forecolor backcolor | bold italic | underline strikethrough | alignleft aligncenter | alignright alignjustify | alignnone table | styleselect | 插入 BoldTest'
    ],
    placeholder: '请输入内容',

    setup: editorSetup
      
}; 


function editorSetup(editor: Editor){
    insertDimension(editor);
    boldTest(editor);
}

function insertDimension(editor: Editor){
    editor.ui.registry.addMenuButton('插入', {
        tooltip: '插入',
        text: '插入',
        fetch: (callback) => {

            const template = (text: string) => `<span contenteditable='false' style='color: green;cursor: text;'>[${text}]</span><span contenteditable="false">&ZeroWidthSpace;</span>`;
            
            const items = [
                {
                    type: 'menuitem',
                    text: '维度一',
                    onAction: (api) => {
                        editor.insertContent(template('维度一'));
                    }
                },
                {
                    type: 'menuitem',
                    text: '维度二',
                    onAction: (api) => {
                        editor.insertContent(template('维度二'));
                    }
                }
            ] as any[];
            callback(items);
        }
    }); 

}

function boldTest(editor: Editor){
    editor.ui.registry.addButton('BoldTest',{
        tooltip: 'BoldTest',
        text: 'BoldTest',
        onAction: (api) => {
            console.log(api);
            console.log(editor.selection);

            const content = editor.selection.getContent();
            const node = editor.selection.getNode();
            console.log('node>>>',node);
            console.log('content>>>',content);
            const template = `<strong>${content}</strong>`;
            editor.selection.setContent(template);
        }
    });

}