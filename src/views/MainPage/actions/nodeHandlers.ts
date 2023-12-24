import { MarkdownNode, OrderedListNode, UnorderedListNode, ParagraphNode, QuotationNode } from './markdownNode';

class NodeHandler {
    handle(node: MarkdownNode, ast: MarkdownNode[]): void {
        ast.push(node);
    }
}

class OrderedListHandler extends NodeHandler {
    handle(node: MarkdownNode, ast: MarkdownNode[]): void {
        const lastNode = ast[ast.length - 1];
        if (lastNode && lastNode instanceof OrderedListNode) {
            lastNode.addChild(new ParagraphNode((node as OrderedListNode).content!));
            lastNode.level += 1;
        } else {
            ast.push(node);
        }
    }
}

class UnorderedListHandler extends NodeHandler {
    handle(node: MarkdownNode, ast: MarkdownNode[]): void {
        const lastNode = ast[ast.length - 1];
        if (lastNode && lastNode instanceof UnorderedListNode) {
            lastNode.addChild(new ParagraphNode((node as UnorderedListNode).content!));
            lastNode.level += 1;
        } else {
            ast.push(node);
        }
    }
}

class QuotationHandler extends NodeHandler {
    handle(node: MarkdownNode, ast: MarkdownNode[]): void {
        const lastNode = ast[ast.length - 1];
        if (lastNode && lastNode instanceof QuotationNode) {
            lastNode.addChild(new ParagraphNode((node as QuotationNode).content!));
        } else {
            ast.push(node);
        }
    }
}

class WrapHandler extends NodeHandler {
    handle(node: MarkdownNode, ast: MarkdownNode[]): void {
        ast.push(node)
    }
}


export { NodeHandler, OrderedListHandler, UnorderedListHandler, QuotationHandler, WrapHandler };