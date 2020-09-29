<script>
  export let posts;
  import Layout from '../layouts/Layout.svelte';
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<Layout segment="blog">
  <h1>Recent posts</h1>

  <ul>
    {#each posts as post}
      <li><a href="blog/{post.slug}">{post.title}</a></li>
    {/each}
  </ul>
</Layout>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>
