<template>
    <div class="player">
        <audio src="../assets/Control - Zoe Wees.mp3" ref="au" @canplay="ready" @ended="end"></audio>
        <h1>player</h1>
        <h1>{{ this.$store.state.musicName }}</h1>
        <img :src="require('../assets/record.png')" alt="" :style="{width: '80%', margin: '50px'}" :class="status">
        <h1>{{ showTime }}</h1>
        <Progress :total="this.$store.state.totalTime" @setProgress="setProgress($event)"/>
        <div class="btn-group">
        <Btn action="prev"/>
        <Btn :action="status" @changeStatus="changeStatus"/>
        <Btn action="next" />
    </div>
    </div>
</template>

<script>
import Btn from './Btn.vue'
import Progress from './Progress.vue'

export default {
    name: 'Player',
    props: {
        musicName: String
    },
    data(){
        return {
            status: "stop",
            progressValue: "",
            totalTime: 0,
            t: setInterval(() => {
                console.log(`${this.$refs.au.currentTime / this.$refs.au.duration * 100}%`)
                this.$store.commit('setProgress', `${this.$refs.au.currentTime / this.$refs.au.duration * 100}%`)
            }, 500)
        }
    },
    mounted(){
        this.progressValue = this.$store.state.progressValue
        this.totalTime = this.$store.state.totalTime
    },
    beforeDestroy(){
        clearInterval(this.t)
    },
    computed: {
        showTime(){
            return `${Math.floor(this.$store.state.totalTime * parseFloat(this.$store.state.progressValue) / 100 / 60)}: ${Math.floor(this.$store.state.totalTime * parseFloat(this.$store.state.progressValue) / 100 % 60)} / ${Math.floor(this.$store.state.totalTime / 60)}: ${Math.floor(this.$store.state.totalTime % 60)}`
        }
    },
    methods: {
        ready(){
            console.log(this.$refs.au.duration)
            this.$store.commit('setTotalTime', this.$refs.au.duration)
        },
        end(){
            console.log("end")
        },
        changeStatus(){
            if(this.status == 'stop'){
                this.$refs.au.play()
            }else{
                this.$refs.au.pause()
            }
            this.status = this.status == 'stop'? 'play': 'stop'
        },
        setProgress(val){
            this.progressValue = val
            console.log(val)
            this.$store.commit('setProgress', val)
            this.$refs.au.currentTime = this.$refs.au.duration * parseFloat(val) / 100
        }
    },
    components: {
        Btn,
        Progress
    }
}
</script>

<style scoped>
.player {
    margin: 5vh 5vw 5vh 5vw;
    flex: 1;
    text-align: center;
}
.play{
  animation: rotation 2s infinite linear;
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>
