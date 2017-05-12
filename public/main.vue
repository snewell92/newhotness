<template>
    <div id="main">
        <h3>This Page is {{ currentPage }}</h3>
        <p>Yeah, '{{ currentPage }}' is great I guess</p>
        <!-- think about using http://spin.js.org/ for loader... -->
        <my-app v-bind:page="currentPage">
            Loading...
        </my-app>
    </div>
</template>

<script>
// required export so express-vue can override
export default {
    data() {
        return {
            currentPage: 'empty'
        }
    }
}
</script>
