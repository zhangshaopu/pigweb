<template>
    <el-upload class="upload-demo" action="http://localhost:8081/upload" :on-preview="handlePreview"
        :on-success="handleSuccess"
        :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed"
        :file-list="fileList">
        <el-button class = "upload-btn" size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传mp4文件，且不超过300MB</div>
    </el-upload>
</template>



<script>
export default {
    data() {
        return {
            //fileList: [{ name: 'food1.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }, { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }]
            fileList: []
        };
    },
    methods: {
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handleSuccess(res){
            console.log(res);
            this.$message.success("文件上传成功");
            this.$emit('func',res.url);
        },
        handlePreview(file) {
            console.log(file);
        },
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${file.name}？`);
        }
    }
}
</script>