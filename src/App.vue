<template>
    <div class="container">
        <Navbar />
        <div class="core">
            <Menu />
            <Split />
            <Player music-name="control"/>
            <Split />
            <Lyrics />
        </div>
    </div>
</template>

<script>
import Player from './components/Player.vue'
import Menu from './components/Menu.vue'
import Lyrics from './components/Lyrics.vue'
import Split from './components/Split.vue'
import Navbar from './components/Navbar.vue'

export default {
    name: 'App',
    components: {
        Player,
        Menu,
        Lyrics,
        Split,
        Navbar
    }
}
</script>
<style scoped>
.core {
    display: flex;
    width: 100vw;
    height: 100vh;
}
</style>