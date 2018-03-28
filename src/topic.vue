<template>
<div id = "app">
          asdf
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
