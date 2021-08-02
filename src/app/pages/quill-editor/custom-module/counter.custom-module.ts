import Quill from "quill";

export class Counter{

    container: Element;

    constructor(quill,options){

        this.container = quill.addContainer('ql-container');

        quill.on(Quill.events.TEXT_CHANGE, () => {
            const text = quill.getText();
            const char = text.replace(/\s/g,'');

            this.container.innerHTML = `当前字数：${char.length}`;
        });
    }


}