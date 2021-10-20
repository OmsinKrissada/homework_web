<template>
	<!-- <div id="nav">
		<router-link to="/">Home</router-link> |
		<router-link to="/about">About</router-link>
	</div> -->
	<router-view />
</template>

<style lang="scss">
@import url("https://rsms.me/inter/inter.css");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400&display=swap");
:root {
	font-size: 15px;
}

* {
	margin: 0;
	box-sizing: border-box;
	font-family: "Inter";
}

a {
	text-decoration: none;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

.noselect {
	-webkit-touch-callout: none; /* iOS Safari */
	-webkit-user-select: none; /* Safari */
	-khtml-user-select: none; /* Konqueror HTML */
	-moz-user-select: none; /* Old versions of Firefox */
	-ms-user-select: none; /* Internet Explorer/Edge */
	user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
</style>
