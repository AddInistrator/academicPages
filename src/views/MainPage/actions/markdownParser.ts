import { NodeFactory } from './nodeFactory';
import { NodeHandler, OrderedListHandler, UnorderedListHandler, QuotationHandler, WrapHandler } from './nodeHandlers';
import { MarkdownNode, WrapNode } from './markdownNode';
import { HeadingRenderer, NodeRenderer, OrderedListRenderer, ParagraphRenderer, QuotationRenderer, SeparateRenderer, UnorderedListRenderer } from './nodeRenderer';

class MarkdownParser {
    private ast: MarkdownNode[];
    private nodeFactory = new NodeFactory();
    private handlers: { [key: string]: NodeHandler } = {
        heading: new NodeHandler(),
        orderedList: new OrderedListHandler(),
        unorderedList: new UnorderedListHandler(),
        quotation: new QuotationHandler(),
        separate: new NodeHandler(),
        paragraph: new NodeHandler(),
        wrap: new WrapHandler()
    };
    
    private renderers:{ [key: string]: NodeRenderer } = {
        heading: new HeadingRenderer(),
        orderedList: new OrderedListRenderer(),
        unorderedList: new UnorderedListRenderer(),
        quotation: new QuotationRenderer(),
        separate: new SeparateRenderer(),
        paragraph: new ParagraphRenderer(),
    }


    constructor() {
        this.ast = [];
    }


    parse(text: string) {
        const blocks = text.trim().split('\n\n');
        for (let i = 0; i < blocks.length; i++) {
            const lines = blocks[i].split('\n');
            for (let j = 0; j < lines.length; j++) {
                const line = lines[j]
                const node = this.nodeFactory.createNode(line);
                if (node) {
                    const handler = this.handlers[node.type];
                    handler.handle(node, this.ast);
                }
            }
            this.ast.push(new WrapNode())
        }
        return this.render() 
        return this.ast
    }

    private render(): string{
        var html: string = '';
        for (let i = 0; i < this.ast.length; i++) {
            const node = this.ast[i];
            if (node instanceof WrapNode) { continue }
            const renderer = this.renderers[node.type];
            html = `${html}${renderer.attach(node)}`
        }
        return html;
    }
}


// 示例用法
export const parser = new MarkdownParser();
/*


*/