<template>
	<div id="login-form">
		<img src="@/assets/book-dark.png" alt="logo" id="logo" />
		<h2 id="title" class="noselect">Please signin to continue</h2>
		<div id="form" class="noselect" :style="ready ? '' : 'filter: brightness(60%); cursor: not-allowed;'">
			<a :href="auth_link" :style="ready ? '' : 'pointer-events: none;'">
				<button>
					<img src="@/assets/icon_clyde_white_RGB.png" id="clyde" />
					Continue with Discord
				</button>
			</a>
		</div>
	</div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { client_id } from "@/config.json";

export default class HelloWorld extends Vue {
	auth_link = "";
	ready = false;

	mounted() {
		// axios.get(endpoint + "/client_id").then(res => {
		// const client_id = (res.data as any).client_id;
		this.auth_link = `https://discord.com/api/oauth2/authorize?client_id=${client_id}&redirect_uri=${encodeURIComponent(
			window.location.origin
		)}%2Fhomework%2Fcallback&response_type=code&scope=identify+guilds&state=somestate`;
		this.ready = true;
		// });
	}
}
</script>

<style scoped lang="scss">
$discord-black: #23272a;
$discord-blurple: #5865f2;

#logo {
	margin: 20px 0 0 0;
	height: 6em;
	border-radius: 50%;
	box-shadow: 0px 0px 5px black;
}

#title {
	// margin: 1em 1em 2em 1em;
	margin-top: 1em;
	padding: 0 0 20px 0;
	width: 100%;

	font-family: "Open Sans";
	font-weight: 500;
	color: black;
	border-bottom: 1px silver solid;
}

#login-form {
	display: flex;
	flex-direction: column;
	align-items: center;
	// padding: 2em;

	box-shadow: 0 2px 10px 0 rgb(0 0 0 / 20%);
	border-radius: 1rem;

	background-color: white;

	#form {
		padding: 10px 40px;

		button {
			cursor: pointer;
			pointer-events: none;

			display: flex;
			align-items: center;

			margin: 1em;
			padding: 1em 2em;
			background-color: $discord-blurple;
			border: none;
			border-radius: 0.5em;
			box-shadow: 0px 0px 3px $discord-blurple;

			font-size: 0.9rem;
			font-weight: 600;
			color: white;

			transition: 0.2s box-shadow;

			&:hover {
				box-shadow: none;
			}

			#clyde {
				margin-right: 1em;
				height: 1em;
				width: auto;
			}
		}
	}
}
</style>
