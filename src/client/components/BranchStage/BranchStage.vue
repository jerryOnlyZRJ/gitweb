<template>
  <div class="branch-stage">
    <span class="branch-text">Choice your branch or put some keywords to search for it.</span>
    <input class="branch-input" type="text" name="keyword">
    <ul class="branch-list" @click="choiceBranchItem">
      <li class="branch-item selected">origin/master</li>
      <li class="branch-item">origin/master</li>
      <li class="branch-item">origin/master</li>
      <li class="branch-item">origin/master</li>
      <li class="branch-item">origin/master</li>
      <li class="branch-item">origin/master</li>
      <li class="branch-item">origin/master</li>
      <li class="branch-item">origin/master</li>
      <li class="branch-item">origin/master</li>
      <li class="branch-item">origin/master</li>
      <li class="branch-item">origin/master</li>
      <li class="branch-item">origin/master</li>
      <li class="branch-item">origin/master</li>
      <li class="branch-item">origin/master</li>
    </ul>
    <span class="branch-text">What your choice is:</span>
    <span class="chosen-result">feature-test</span>
    <button class="btn">Pull It!</button>
  </div>
</template>

<script>
  function init(){
    console.log('BranchStage is init')
  }
export default {
  name: 'BranchStage',
  mounted: () => {
    init()
  },
  methods: {
    choiceBranchItem(e){
      let branches = document.querySelectorAll('.branch-item')
      for(let item of branches){
        item.classList.remove('selected')
      }
      e.target.classList.add('selected')
    },
  }
}
</script>

<style scoped>
  .branch-stage {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    box-sizing: border-box;
  }
  .branch-text {
    display: block;
    margin: 1rem;
    font-size: 1.5rem;
    font-family: fantasy;
  }
  .branch-input {
    width: 15rem;
    margin: 5px 0 2rem;
    padding: 5px;
    box-sizing: border-box;
    border: 2px solid #a9a9a9;
    font-size: 1.5rem;
  }
  .branch-list {
    margin: 0;
    padding: 0;
    height: 20rem;
    width: 15rem;
    overflow: hidden;
    overflow-y: scroll;
    list-style: none;
    border: 5px solid #188eee;
    border-radius: 10px;
  }
  .branch-list::-webkit-scrollbar {
    display:none
  }
  .branch-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    box-shadow: 0 1px 2px rgba(150, 150, 150, 0.3);
    cursor: pointer;
    transition: background .3s
  }
  .branch-item:hover {
    background: #ccc;
  }
  .branch-item.selected{
    background: #ccc;
  }
  .chosen-result {
    color: red;
    font-size: 1.5rem;
    font-weight: bold;
  }
  .btn {
    display: block;
    width: 8rem;
    height: 3rem;
    margin: 1rem;
    border: none;
    border-radius: 10px;
    font-size: 2rem;
    cursor: pointer;
    color: #fff;
    background: #188eee;
    outline: none;
    transition: background .5s;
  }
  .btn:hover {
    background: #0364b3;
  }
</style>
