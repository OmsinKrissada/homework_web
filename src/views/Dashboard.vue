<template>
	<div id="dashboard"></div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MainTable from "@/components/MainTable.vue";
import CreationForm from "@/components/CreationForm.vue";

@Options({
	components: {
		MainTable,
		CreationForm
	}
})
export default class Home extends Vue {}
</script>
