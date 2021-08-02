import { BlockEmbed } from "quill/blots/block";

class Dimension extends BlockEmbed{
    static blotName = 'dimension';
    static tagName = 'span';
    static className = 'link-card';

    static create(value){
        const node = super.create(value);
        return node
    }
}

export {Dimension};