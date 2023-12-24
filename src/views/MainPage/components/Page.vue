<script setup lang="ts">
import { ref } from 'vue';
import { parser } from '../actions/markdownParser';

const markdownText = `
# Heading 1
This is a paragraph.
## Heading 2

- Item 1
- Item 2

---

1. Item 3
2. Item 4

### Heading 3
Some ***bold*** and *italic* text.

> 地球变暖和添加 JavaScript 有莫大的关系。
> 每个人的浏览器多执行两个函数，CPU使用就要往上蹿一点，能耗就会增加，气温就会升高。一个网页被访问的人越多，地球的生态就会越发危险。
> 比起空调，JavaScript 才是罪魁祸首。你看到的每一个爆款页面，后面都是北极熊和企鹅的血泪。
> 从今天起，克制 JavaScript 的使用，让网页回到没有交互没有特效几乎啥也干不了的年代。否则，我们的子孙后代的家园会毁在今天每一个 function 里。
`;
const ast = ref(parser.parse(markdownText))
</script>
<template>
  	<div class="flex-1 m-6">
        <div v-html="ast"></div>
    </div>
</template>
<style scoped>
:deep(h1) {
    @apply text-4xl text-gray-600 font-bold py-2
}
:deep(h2) {
    @apply text-3xl text-gray-600 font-bold py-2
}
:deep(h3) {
    @apply text-2xl text-gray-600 font-bold py-2
}
:deep(h4) {
    @apply text-xl text-gray-600 font-semibold py-2
}
:deep(h5, h6) {
    @apply text-base text-gray-600 font-semibold py-2
}
:deep(blockquote) {
    @apply block p-4 pl-4 bg-gray-300 bg-opacity-50 text-base border-l-4 border-gray-400 rounded-md my-4
}
:deep(p) {
    @apply flow-root py-2
}
:deep(ul) {
    @apply list-disc pl-4 py-4
}
:deep(ol) {
    @apply list-decimal pl-4 py-4
}
:deep(a) {
    @apply text-blue-400 hover:underline underline-offset-4
}
</style>