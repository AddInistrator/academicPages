import { MarkdownNode, HeadingNode } from "./markdownNode"

abstract class NodeRenderer {
    openTag: string = ''
    closeTag: string = ''
    class: string = ''
    constructor () {}
    attach(node: MarkdownNode):string | void {
        const content = this.inlineRender(node.content)
        return `${this.openTag}${content}${this.closeTag}`
    }
    protected inlineRender(str: string) {
        str = str.replace(/\*\*\*(.*?)\*\*\*/g, '<b><i>$1</i></b>')  // 这个渲染加粗倾斜
        str = str.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
        str = str.replace(/\*(.*?)\*/g, '<i>$1</i>')
        str = str.replace(/\~\~(.*?)\~\~/g, '<del>$1</del>')
        str = str.replace(/!\[(.*?)\]\((.*?)\"(.*?)\"\)/g, '<img src=\"$2\" alt=\"$1\">')  // 这个渲染图片
        str = str.replace(/\[(.*?)\]\((.*?)\)/g, '<a href=\"$2\">$1</a>')  // 这个渲染链接
        return str
    }
}

class HeadingRenderer extends NodeRenderer {
    openTag: string =''
    closeTag: string = ''
    attach(node: MarkdownNode): string {
        this.openTag = `<h${(node as HeadingNode).level}>`
        this.closeTag = `</h${(node as HeadingNode).level}>`
        const content = this.inlineRender(node.content)
        return `${this.openTag}${content}${this.closeTag}`
    }
}

class ListRenderer extends NodeRenderer {
    openTag: string = '<li>'
    closeTag: string = '</li>'
    extOpenTag: string = ''
    extCloseTag: string = ''
    attach(node: MarkdownNode, atTop: boolean = true): string {
        var content = this.inlineRender(node.content)
        content = `${this.openTag}${content}${this.closeTag}`
        for (let i = 0; i < node.children!.length; i++) { 
            content = `${content}${this.attach(node.children![i], false)}` 
        }
        return atTop ? `${this.extOpenTag}${content}${this.extCloseTag}` : content
    }
}

class OrderedListRenderer extends ListRenderer {
    extOpenTag: string = '<ol>'
    extCloseTag: string = '</ol>'
}

class UnorderedListRenderer extends ListRenderer {
    extOpenTag: string = '<ul>'
    extCloseTag: string = '</ul>'
}

class SeparateRenderer extends NodeRenderer {
    openTag: string = '<hr>'
    closeTag: string = '</hr>'
}

class ParagraphRenderer extends NodeRenderer {
    openTag: string = '<p>'
    closeTag: string = '</p>'
}

class QuotationRenderer extends ListRenderer{
    extOpenTag: string = '<blockquote>'
    extCloseTag: string = '</blockquote>'
    openTag: string = ''
    closeTag: string = '<br>'
}

class WrapRenderer extends NodeRenderer {
    attach(node: MarkdownNode): void {
        return
    }
}

export { 
    NodeRenderer, 
    HeadingRenderer, 
    OrderedListRenderer, 
    UnorderedListRenderer, 
    ParagraphRenderer, 
    QuotationRenderer, 
    SeparateRenderer,
    WrapRenderer
}