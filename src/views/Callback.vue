<template>
	<div id="callback">
		<transition name="fade" mode="in-out">
			<div v-if="error" class="box">
				<h2>
					An error occured with status code <code style="font-family: monospace;">{{ error_code }}</code>
				</h2>
				<h3>
					<code style="font-family: monospace;">{{ error }}</code>
				</h3>
				<p>Please send this to Omsin if you're sure it's not your fault.</p>
			</div>
		</transition>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import LoginForm from "@/components/LoginForm.vue";
import axios from "axios";

@Options({
	components: {
		LoginForm
	}
})
export default class Home extends Vue {
	error = "";
	error_code?: number = 0;
	async mounted(): Promise<void> {
		const params = window.location.search
			.slice(1)
			.split("&")
			.reduce((acc, param) => {
				const [key, value] = param.split("=");
				return { ...acc, [key]: value };
			}, {});

		let response;
		try {
			response = (await axios.post("http://192.168.1.39:8081/auth/discord", params)).data as any;
		} catch (err) {
			if (!axios.isAxiosError(err)) {
				console.log(err);
				return;
			}
			this.error = (err.response?.data as { reason: string }).reason ?? "N/A";
			this.error_code = err.response?.status;
			return;
		}
		if (!response) {
			this.error = "Response is unexpectedly empty";
			return;
		}

		const { access_token } = response;
	}
}
</script>

<style scoped lang="scss">
#callback {
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

.box {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2em;

	box-shadow: 0 2px 10px 0 rgb(0 0 0 / 20%);
	border-radius: 1rem;

	background-color: white;

	h3 {
		margin: 1em;
		font-weight: 500;
	}
	p {
		margin: 0.5em;
	}
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
