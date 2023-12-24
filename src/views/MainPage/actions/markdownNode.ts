abstract class MarkdownNode {
    type: string;
    children?: MarkdownNode[];
    content: string = ''

    constructor(type: string) {
        this.type = type;
        this.children = [];
    }

    addChild(node: MarkdownNode) {
        this.children!.push(node);
    }
}


class HeadingNode extends MarkdownNode {
    level: number;

    constructor(level: number, content: string) {
        super('heading');
        this.level = level;
        this.content = content
    }
}


class OrderedListNode extends MarkdownNode {
    level: number;
    constructor(level: number, content: string) {
        super('orderedList');
        this.level = level;
        this.content = content
    }
}


class UnorderedListNode extends MarkdownNode {
    level: number;
    content: string;
    constructor(level: number, content: string) {
        super('unorderedList');
        this.level = level;
        this.content = content;
    }
}


class QuotationNode extends MarkdownNode {
    content: string;

    constructor(content: string) {
        super('quotation');
        this.content = content
    }
}


class SeparateNode extends MarkdownNode {
    content: string;
    constructor() {
        super('separate');
    }
}


class ParagraphNode extends MarkdownNode {
    content: string;
    constructor(content: string) {
        super('paragraph');
        this.content = content;
    }
}

class WrapNode extends MarkdownNode {
    constructor() {
        super('wrap')
    }
}

class CodeBlockNode extends MarkdownNode {
    content: string
    constructor(content: string) {
        super('codeblock')
        this.content = content
    }
}

export { 
    MarkdownNode, 
    HeadingNode, 
    OrderedListNode, 
    UnorderedListNode, 
    QuotationNode, 
    SeparateNode, 
    ParagraphNode, 
    WrapNode,
    CodeBlockNode
};