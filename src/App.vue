<template>
  <div id="app">
    <div id="background-alpah">
    <div id="main">
      <div id="timerview">
      <div id="timerstartmsg" class="font timer">{{timerstartmsg}}</div>
      <div id="timer" class="font timer">12<span>시간</span> 23<span>분</span> 34<span>초</span></div>
      <div id="timerendmsg" class="font timer">{{timerendmsg}}</div>
      </div>
      
      <div id="timetable">

        <div id="timeline-area">
          <div class="timeline-packman"></div>
          <div class="timeline-line line1"></div>
          <div class="timeline-dot"></div>
          <div class="timeline-line line2"></div>
          <div class="timeline-dot"></div>
          <div class="timeline-line line3"></div>
          <div class="timeline-dot"></div>
          <div class="timeline-line line4"></div>
          <div class="timeline-dot"></div>
          <div class="timeline-line line5"></div>
          <div class="timeline-dot"></div>
          <div class="timeline-line line6"></div>
          <div class="timeline-dot"></div>
          <div class="timeline-line line7"></div>
          <div class="timeline-dot"></div>
        </div>

        <div id="timemsg-area">

          <div class="comment-box line1">
            <div class="comment-arrow"></div>
            <div class="comment-body">
            <div class="comment-msg">a</div>
            </div>
            
          </div>
          
        
        </div>
      </div>
      <div id="nav">
        <div id="nav1" class="navitem">
        <router-link to="Topic">
         <div class="iconarea"> <img id="icon1" src="./assets/page-1@3x.png"></div>
          <div class="navmsg font">주제 확인</div></router-link>
        </div>


         <div id="nav2" class="navitem">
           <a href="#">
          <div class="iconarea"><img id="icon2" src="./assets/page-1_2@3x.png"></div>
          <div class="navmsg font">이벤트 & 규칙</div></a>
        </div>

         <div id="nav3" class="navitem">
           <a href="#">
          <div class="iconarea"><img id="icon3" src="./assets/page-1_3@3x.png"></div>
          <div class="navmsg font">결과물 제출 </div></a>
        </div>

         <div id="nav4" class="navitem" >
           <a href="#">
             <div id="visible">
          <div class="iconarea"><img id="icon4" src="./assets/page-1_4@3x.png"></div>
          <div class="navmsg font">서비스 조사</div></div></a>
          <div id = "visiblemenu">
            <div class="visibleitem">
                <div class="itemtext">팀빌딩 조사</div>
               <img src="./assets/arrow.png" class="visibleicon">
          </div>
          <div class="visibleitem">
                <div class="itemtext">중간점검</div>
                <!-- <img src="./assets/arrow.png" class="visibleicon"> -->
          </div>
          <div class="visibleitem">
                <div class="itemtext">최종제출</div>
                <!-- <img src="./assets/arrow.png" class="visibleicon"> -->
          </div>
          <div class="visibleitem">
                <div class="itemtext">피드백</div>
                <!-- <img src="./assets/arrow.png" class="visibleicon"> -->
                          </div>

        </div>
         </div>


         <div id="nav5" class="navitem" v-mouseover="up" @mouseleave="up" >
           <a href="https://www.facebook.com/smarteenappclub/" target="_blank">
         <div class="iconarea"> <img  id="icon5" src="./assets/page-1_5@3x.png"></div>
          <div class="navmsg font" >페이스북 페이지</div></a>
        </div>
      </div>




    </div>





</div>

<router-view></router-view>
</div>


</template>

<script>
export default {
  name: "#app",
  data() {
    //데이터는 정적인 데이터 처리해
    return {
      timerstartmsg: "15회 앱잼은 현재",
      timerendmsg: "남았습니다",
      up: false
    };
  },
  computed: {
    // 계산 필요한 동적 데이터 처리
  },
  methods: {
    // 메소드 ()
  },
  watch: {
    // 뒷편에서 이벤트 잡을려고
  }
};
//나누는 이유는 뷰 규칙, 데이터랑 컴퓨트랑 나누는 이유는 연산 등 내부 로직자체가 달라서 퍼포먼스때문에
</script>

<style>
/* @import "assets/app.css"; */
</style>
