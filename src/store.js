import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        count: 0,
        musicName: "control",
        progressValue: "0%",
        totalTime: 90
    },
    mutations: {
        increment(state) {
            state.count++
        },
        setProgress(state, val){
            state.progressValue = val
        },
        setTotalTime(state, val){
            state.totalTime = val
        }
    }
})