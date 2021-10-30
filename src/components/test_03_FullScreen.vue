<template>
    <div>
        <button type="button" @click="switchFullScreen">fullscreen</button>
        <textarea id="htmlEditor"></textarea>
    </div>
</template>

<script>
    import 'codemirror/lib/codemirror.css';
    import codemirror from "codemirror";

    import 'codemirror/theme/eclipse.css';
    import 'codemirror/mode/htmlmixed/htmlmixed';

    import 'codemirror/addon/display/fullscreen.css';
    import 'codemirror/addon/display/fullscreen';

    let htmlEditor = null;
    const initEditor = (options) => {
        htmlEditor = codemirror.fromTextArea(document.getElementById("htmlEditor"), options);
        console.log("initial htmlEditor");
    };

    export default {
        name: "test_03_FullScreen",
        data:function () {
            return {
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
                htmlEditor.setOption("fullScreen", !htmlEditor.getOption("fullScreen"));
                htmlEditor.focus();
            }
        },
        mounted:function () {
            initEditor(this.htmlOptions);
        }
    }
</script>

<style scoped>

</style>