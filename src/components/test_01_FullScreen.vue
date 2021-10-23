<template>
    <div>
        <button type="button" @click="switchFullScreen">fullscreen</button>
        <textarea ref="htmlEditor"></textarea>
    </div>
</template>

<script>
    import 'codemirror/lib/codemirror.css';
    import codemirror from "codemirror";

    import 'codemirror/theme/eclipse.css';
    import 'codemirror/mode/htmlmixed/htmlmixed';

    import 'codemirror/addon/display/fullscreen.css';
    import 'codemirror/addon/display/fullscreen';

    export default {
        name: "test_01_FullScreen",
        data:function () {
            return {
                htmlEditor:'',
                htmlOptions:{
                    autofocus:true,
                    lineNumbers: true,
                    line:true,
                    tabSize:4,
                    mode:'htmlmixed',
                    theme:'eclipse',
                    extraKeys: {
                        "F11": function(cm) {
                            cm.setOption("fullScreen", !cm.getOption("fullScreen"));
                        },
                        "Esc": function(cm) {
                            if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
                        }
                    }
                },
            }
        },
        methods:{
            switchFullScreen(){
                let cm = this.htmlEditor;
                cm.setOption("fullScreen", !cm.getOption("fullScreen"));
                cm.focus();
            }
        },
        mounted:function () {
            this.htmlEditor = codemirror.fromTextArea(this.$refs.htmlEditor,this.htmlOptions);
        }
    }
</script>

<style scoped>

</style>