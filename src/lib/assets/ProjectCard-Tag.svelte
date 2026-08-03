<script lang="ts">
    interface TagInfo {
        tag: string
    };

    const data: TagInfo = $props();
</script>

<div class="w-fit h-7 px-3 content-center bg-backdrop rounded-md hover:border-gray-600 border-gray-700 border-2">
    <p class="text-text-light text-sm">{data.tag}</p>
</div>