<script lang="ts">
	import Center from "./Center.svelte";
	import Loading from "./Loading.svelte";
	import type { User } from "firebase/auth";

	export let user: User;
</script>

<Center>
	{#if user}
		<div>
			<img src={user.photoURL} alt={user.displayName} />
			<p>{user.displayName}</p>
			<p>{user.email}</p>
			<div>
				<button class="sf-button" on:click>Signout</button>
			</div>
		</div>
	{:else}
		<Loading />
	{/if}
</Center>
