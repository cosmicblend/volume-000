<script>
  import { onMount } from 'svelte';
  import { fetchAndParseXML } from '../xmlParser.js';

  let items = [];

  onMount(async () => {
    try {
      items = await fetchAndParseXML();
      console.log('Parsed Items:', items);
    } catch (error) {
      console.error('Error:', error);
    }
  });
</script>

<h3>XML Parser Test</h3>
<ul>
  {#each items as { title, link }}
    <li>
      <a href={link} target="_blank" rel="noreferrer noopener">
        {title}
      </a>
    </li>
  {/each}
</ul>

