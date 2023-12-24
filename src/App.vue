<script setup lang="ts"> 

import NavigationBar from './views/MainPage/components/NavigationBar.vue';

import MainPage from './views/MainPage/MainPage.vue'

</script>

<template>
  	<header>
    	<NavigationBar></NavigationBar>
  	</header>
	<main class="md:flex align-top m-6 lg:mx-20 gap-6 lg:gap-20">
		<MainPage></MainPage>
	</main>
</template>

