<script setup>
import { ref } from 'vue';
const sidebarInfo = ref([
    { name: "Location", url: "#", icon: "#" },
    { name: "Google", url: "https://www.google.com", icon: "fa fa-google" },
    { name: "Baidu", url: "https://www.baidu.com", icon: "fa fa-google" },
    { name: "GitHub", url: "https://www.github.com", icon: "fa fa-github" }
])
var open = ref(false)
function toggleOpen() { open.value = !open.value }
</script>
<template>
    <aside class="w-56 max-md:hidden">
        <div class="sticky top-0 p-6 w-56 max-md:hidden">
            <img src="../../../assets/avat.jpg" class="rounded-full align-middle max-h-44 flex" />
            <br>
            <div>
                <p class="my-3 font-bold text-gray-600">Your Sidebar Name</p>
                <p class="text-sm font-normal text-gray-600 break-words">Your biography for the left-hand sidebar</p>
            </div>
            
            <ul class="my-4 text-xs text-gray-600">
                <li class="my-2" v-for="item in sidebarInfo">
                    <span class="mx-0.5" :class="item.icon"></span>
                    <a class="mx-0.5 hover:underline" :href=item.url>{{ item.name }}</a>
                </li>
            </ul>
        </div>
        
    </aside>

    <header class="md:hidden flex p-6 justify-normal items-center">
    	<div>
    		<img src="../../../assets/avat.jpg" class="max-h-12 rounded-full">
    	</div>
    	<div class="mx-4">
    		<p class="pb-1 text-base font-bold text-gray-600">Your Sidebar Name</p>
        	<p class="text-xs font-normal text-gray-600 break-words">Your biography for the left-hand sidebar</p>
      	</div>
      	<div>
            <button @click="toggleOpen" class="rounded-md ring-1 px-2 py-1 text-slate-700 font-medium text-sm hover:bg-slate-100 hover:text-slate-900">Follow</button>
            <div v-if="open" class="absolute px-3 z-10 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div class="block text-xs text-gray-700 my-2" v-for="item in sidebarInfo">
                    <span class="mx-0.5" :class="item.icon"></span>
                    <a class="mx-0.5 hover:underline" :href="item.url">{{ item.name }}</a>
                </div>
            </div>
        </div>
    </header>
</template>
