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
        name: "test_02_initial_content",
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
            let str = `<!-- Create a simple CodeMirror instance -->
<link rel="stylesheet" href="lib/codemirror.css">
<script src="lib/codemirror.js"><`+`/script>
<script>
    var editor = CodeMirror.fromTextArea(myTextarea, {
        lineNumbers: true
    });
<`+`/script>`;
            this.htmlEditor = codemirror.fromTextArea(this.$refs.htmlEditor,this.htmlOptions);
            //mock long initial content by plus str more times
            this.htmlEditor.setValue(str+str+str);
        }
    }
</script>

<style scoped>

</style>