<template>
    <button class="custom-btn btn-13" @click="clickAction">{{ act }}</button>
</template>
<script>
export default {
    name: "Btn",
    props: {
        action: String
    },
    data(){
        return {
            act: ""
        }
    },  
    beforeMount(){
        this.act = this.action
        if(this.action == 'stop'){
            this.act = 'play'
        }else if(this.action == 'play'){
            this.act = 'stop'
        }
    },  
    methods: {
        clickAction(){
            switch(this.act){
                case "prev":
                    console.log(this.$store.state.count)
                    this.$store.commit('increment')
                    break
                case "next":
                    console.log(this.$store.state.count)
                    this.$store.commit('increment')
                    break
                case "stop":
                    console.log(this.act)
                    this.act = "play"
                    this.$emit("changeStatus")
                    break
                case "play":
                    console.log(this.act)
                    this.act = "stop"
                    this.$emit("changeStatus")
                    break
            }
        }
    }
}
</script>
<style scoped>
.custom-btn {
    width: 40px;
    height: 40px;
    color: #fff;
    border-radius: 5px;
    margin: 0 10px 0 10px;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5),
        7px 7px 20px 0px rgba(0, 0, 0, .1),
        4px 4px 5px 0px rgba(0, 0, 0, .1);
    outline: none;
}

.btn-13 {
    background-color: #89b3d8;
    background-image: linear-gradient(315deg, #89a5d8 0%, #0393c8 74%);
    border: none;
    z-index: 1;
}

.btn-13:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    border-radius: 5px;
    background-color: #4da2cc;
    background-image: linear-gradient(315deg, #4d91cc 0%, #96c9e4 74%);
    box-shadow:
        -7px -7px 20px 0px #fff9,
        -4px -4px 5px 0px #fff9,
        7px 7px 20px 0px #0002,
        4px 4px 5px 0px #0001;
    transition: all 0.3s ease;
}

.btn-13:hover {
    color: #fff;
}

.btn-13:hover:after {
    top: 0;
    height: 100%;
}

.btn-13:active {
    top: 2px;
}
</style>