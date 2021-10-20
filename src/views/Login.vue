<template>
	<div id="login">
		<LoginForm />
	</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import LoginForm from "@/components/LoginForm.vue";

@Options({
	components: {
		LoginForm
	}
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
#login {
	display: flex;
	justify-content: center;
	align-items: center;

	width: 100vw;
	height: 100vh;

	// background-color: #23272af3;
	background: rgb(12, 10, 48);
	background: linear-gradient(120deg, rgba(12, 10, 48, 1) 0%, rgba(21, 21, 84, 1) 35%, rgba(10, 89, 105, 1) 100%);
	// background-color: whitesmoke;
}
</style>
