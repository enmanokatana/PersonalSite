<template>
  <div>
    <canvas id="myChart" class="w-400 h-400"></canvas>
  </div>
</template>

<script setup lang="ts">
import Chart from 'chart.js/auto';

const data = {
  labels: [
    'C++',
    'C',
    'PHP',
    'JavaScript',
    'Html/Css',
    'Python',
    'Sql/PlSql'
  ],
  datasets: [{
    label: '%',
    data: [15, 15, 8,16,20,16,10],
    backgroundColor: [
      '#3354cc',
      '#7e5cd6',
      '#5768a2',
      '#0a1129',
      '#292c38',
      '#e9c4cc',
      '#cfbe81'
    ],
    hoverOffset: 4
  }]
};

const config = {
  type: 'pie',
  data: data,
  
};

// Wait for the component to be mounted
import { onMounted } from 'vue';
onMounted(() => {
  const myChart = new Chart(document.getElementById('myChart'), config);
});
</script>
