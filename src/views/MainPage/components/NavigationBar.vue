<script setup lang="ts">
import { ref } from 'vue';

const navbarInfo = ref([
	{ name: "Publications", url: "#" },
	{ name: "Publications", url: "#" },
	{ name: "Publications", url: "#" },
	{ name: "Publications", url: "#" },
	{ name: "Publications", url: "#" },
]
)
</script>
<template>
  	<nav class="flex border-b p-6 lg:mx-14 gap-0 lg:gap-7">
    	<div>
      		<a class="whitespace-nowrap mx-6 font-bold text-gray-600"> Your Name / Site Title </a>
   		 </div>
    	<span class="px-4"></span>
    	<div class="grid grid-flow-col gap-x-10 mx-6 overflow-hidden text-gray-600">
      		<a v-for="item in navbarInfo">{{ item.name }}</a>
    	</div>
  	</nav>
</template>
