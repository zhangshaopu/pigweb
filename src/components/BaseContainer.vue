<template>
    <el-container>
        <el-header><NavBar/></el-header>
        <el-container>
            <el-aside width="300px"><UpLoad @func = "getUrlFromLoad" /></el-aside>
            <el-container>
                <el-main>
                  <el-row>
                    <el-button class = "process-btn" @click="processSubmit">处理视频</el-button>
                  </el-row>
                  <el-row>
                    <VedioPlay/>
                  </el-row>
                </el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>


<script>
import NavBar from '@/components/NavBar.vue';
import UpLoad from '@/components/UpLoad.vue';
import VedioPlay from '@/components/VedioPlay.vue'
import axios from "axios";

export default {
    name:'BaseContainer',
    components: {
      NavBar,
      UpLoad,
      VedioPlay,
    },
    data(){
      return{

      };
    },
    methods:{
      processSubmit(){
        console.log("正在进行post请求")
        axios.post("http://localhost:8081/process",{
          context:"processing",
          url:"urltest",
        }).then(function(res){
          console.log(res.data);
          console.log("给Vedioplay发送信息:");
          this.$bus.$emit('getProcedUrl',res.data);
        });
      },

      getUrlFromLoad(data){ // 从upload子组件中接收返回的url
        console.log("接受来自子组件信息：");
        
        this.loadUrl = data;
        console.log("返回的url:" + this.loadUrl);
      },
    }
}
</script>




<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>