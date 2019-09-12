<template>
  <div class="browsers">
    <ul class="list">
      <span class="title">Discord</span>
      <li>
        <a>
          <img src="https://img.shields.io/discord/451069918474141706.svg?label=discord" class="shadow">
        </a>
      </li>
      <li v-for="item in items">
        <a :href="''+item.url">
          <img :src="'https://img.shields.io/badge/-' + item.name + '-' + item.color +'.svg'" :class="'shadow'">
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Discord",
  metaInfo: {
    title: "Discord"
  },
  data: function() {
    return {
      items: [
        {
          name: "Join",
          color: "green",
          url: "https://invite.gg/kermit"
        }
      ]
    };
  }
};
</script>
