<template>
   
    <table>
        <thead>
            <tr>
        
            </tr>
        </thead>
        <tbody>
            <tr v-for='listName in listNames'>
                <td class="subjectName">{{listName.subjectName}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
  created() {
    this.$http.get("/api/list/textList/rand").then(response => {
      this.listNames = response.data;
    });
  },
  data() {
    return {
      listNames: []
    };
  },
  methods: {}
};
</script>

<style scoped>
h1 {
  font-weight: 300;
}
td {
  padding: 2% 0 2% 0;

  word-break: keep-all;
}
table {
  margin: 0 auto;
  width: 80%;
  table-layout: fixed;
}

tbody {
  font-size: 1.2em;
  text-align: center;
  font-weight: 600;
}
th {
  font-weight: normal;
}
tr {
  width: 100%;
  font-weight: 500;
}
.subjectName {
  width: 40%;
  padding-right: 5%;
}
.school {
  width: 30%;
  padding-right: 5%;
}
.year {
  width: 30%;
}
</style>