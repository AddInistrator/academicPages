import { MarkdownNode, HeadingNode, OrderedListNode, UnorderedListNode, QuotationNode, SeparateNode, ParagraphNode, WrapNode } from './markdownNode';

class NodeFactory {
    createNode(line: string): MarkdownNode | null {
        const atxHeadingRegex: RegExp = /^(#+)\s+(.*)/;
        if (atxHeadingRegex.test(line)) {
            const matches = line.match(atxHeadingRegex);
            const headingNode = new HeadingNode(matches![1].length, matches![2]);
            return headingNode;
        }

        const orderedListRegex: RegExp = /^(\d+\.)\s(.*)/;
        if (orderedListRegex.test(line)) {
            const matches = line.match(orderedListRegex);
            return new OrderedListNode(1,matches![2]);
        }

        const unorderedListRegex: RegExp = /^(\-)\s(.*)/;
        if (unorderedListRegex.test(line)) {
            const matches = line.match(unorderedListRegex);
            return new UnorderedListNode(1,matches![2]);
        }

        const quotationRegex: RegExp = /^(\>)\s(.*)/;
        const matches = line.match(quotationRegex);
        if (quotationRegex.test(line)) {
            return new QuotationNode(matches![2]);
        }

        const separateRegex: RegExp = /^([\*\-\_]){3}/;
        if (separateRegex.test(line)) {
            return new SeparateNode();
        }

        const paragraphRegex: RegExp = /^([^\*\-].*)/;
        if (paragraphRegex.test(line)) {
            return new ParagraphNode(line);
        }

        return new WrapNode();
    }
}

export { NodeFactory };