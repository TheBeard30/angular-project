import {Editor} from 'tinymce';

const insertDimension = (editor: Editor) => {
    editor.ui.registry.addMenuButton('插入', {
        tooltip: '插入',
        text: '插入',
        fetch: (callback) => {

            const template = (text: string) => `<span contenteditable='false' style='color: green;cursor: text;font-weight:normal'>[${text}]</span><span contenteditable="false">&ZeroWidthSpace;</span>`;

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

const boldTest = (editor: Editor) => {
    editor.ui.registry.addButton('BoldTest',{
        tooltip: 'BoldTest',
        text: 'BoldTest',
        onAction: (api) => {
            console.log(api);
            const content = editor.selection.getContent();
            const node = editor.selection.getNode();
            console.log('node>>>',node);
            console.log('content>>>',content);
            const template = `<strong>${content}</strong>`;
            editor.selection.setContent(template);

            // editor.execCommand('bold');
        }
    });

}


const openDialog = (editor: Editor) => {
    editor.ui.registry.addButton('自定义',{
        tooltip: '自定义',
        text: '自定义',
        onAction: (api) => {
            const template = `<h1 style ='color: red;'>hello world</h1>`;
            const event = window.event;
            console.log(event);
            editor.windowManager.open({
                title: '', // The dialog's title - displayed in the dialog header
                body: {
                  type: 'panel', // The root body type - a Panel or TabPanel
                  items: [ // A list of panel components
                    {
                      type: 'htmlpanel', // A HTML panel component
                      html: template,
                      presets: 'document'
                    }
                  ]
                },
                buttons: []
            },{inline: 'toolbar',ariaAttrs: true});
        }
    });
}


const registerCustomTest = (editor: Editor,element: any) => {
    editor.ui.registry.addButton('ceshi',{
        text: 'ceshi',
        tooltip: 'ceshi',
        onAction: (api) => {

            const event = window.event as any;

            element.style.display = element.style.display == 'block' ? 'none' : 'block';
            element.style.left = `${event.clientX}px`;
            element.style.top = `${event.clientY + 18}px`;
        }
    })
}

const url = `${window.location.origin}/angular`;

const TinyMceConfig = {
    inline: true,
    base_url: `${url}/assets/tinymce`,
    height: 200,
    language: 'zh_CN',
    language_url: 'assets/tinymce/lang/zh_CN.js',
    branding: false,
    menubar: false,
    toolbar: [
        'undo redo ceshi| fontselect fontsizeselect | forecolor backcolor | bold italic | underline strikethrough | alignleft aligncenter | alignright alignjustify | alignnone table | styleselect | BoldTest 插入'
    ],
    toolbar_sticky: true,
    plugins: ['table'],
    placeholder: '请输入内容',
    statusbar: false,

};





export {TinyMceConfig,insertDimension,boldTest,openDialog,registerCustomTest};
