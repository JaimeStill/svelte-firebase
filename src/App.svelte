<script lang="ts">
	import "@fortawesome/fontawesome-free/css/all.css";
	import "./theme/theme.scss";

	import type { Subscription } from "rxjs";
	import { onDestroy } from "svelte";

	import Center from "./components/Center.svelte";
	import Loading from "./components/Loading.svelte";
	import User from "./components/User.svelte";

	import { FirebaseContext, AuthService, AuthState } from "./lib";

	const context = new FirebaseContext();
	const auth = new AuthService(context.app);

	let state: AuthState;

	const sub: Subscription = auth.state$.subscribe(
		(value: AuthState) => (state = value)
	);

	onDestroy(() => {
		sub.unsubscribe();
	});
</script>

{#if state && !state.loading}
	{#if state.user}
		<User user={state.user} on:click={auth.signout} />
	{:else}
		<Center>
			<button class="sf-button" on:click={auth.signin}>
				<i class="fa-brands fa-google fa-xl" />
			</button>
		</Center>
	{/if}
{:else}
	<Loading />
{/if}