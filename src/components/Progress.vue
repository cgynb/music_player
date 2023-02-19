<template>
    <abbr :title="currentTime">
        <div class="progress" @mouseover="showTime" @click="setProgress"
            :style="{ background: `linear-gradient(90deg, deepskyblue, teal ${progressVal}, transparent 0)` }"></div>
    </abbr>
</template>
<script>
export default {
    name: 'Progress',
    data() {
        return {
            currentTime: "",
        }
    },
    computed: {
        progressVal: {
            get(){
                return this.$store.state.progressValue
            },
            // set(val){
            //     console.log('set')
            //     this.$emit('setProgress', val)
            // }
        }
    },
    methods: {
        setProgress(e) {
            const total = e.target.offsetWidth
            const current = e.offsetX
            // console.log(current/total)
            // this.progressVal = `${(current / total) * 100}%`
            this.$emit('setProgress', `${(current / total) * 100}%`)
        },
        showTime(e) {
            const t = e.offsetX / e.target.offsetWidth * this.$store.state.totalTime
            this.currentTime = `${Math.floor(t / 60)}: ${Math.floor(t % 60)}`
        }
    }
}
</script>
<style scoped>
.progress {
    width: inherit;
    height: 5px;
    border-radius: 25px;
    /* background: linear-gradient(90deg, rgb(247, 247, 247), rgb(0, 0, 0) 70%, transparent 0); */
    border: 1px solid #eee;
    margin: 20px;
    cursor: pointer;
}
</style>