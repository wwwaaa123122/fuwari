<script lang="ts">
import I18nKey from "@i18n/i18nKey";
import { i18n } from "@i18n/translation";
import Icon from "@iconify/svelte";
import { url } from "@utils/url-utils.ts";
import { onMount } from "svelte";
import type { SearchResult } from "@/global";

let keyword = "";
let result: SearchResult[] = [];
let isSearching = false;
let mobilePanelOpen = false;
let mounted = false;

const fakeResult: SearchResult[] = [
	{
		url: url("/"),
		meta: {
			title: "This Is a Fake Search Result",
		},
		excerpt:
			"Because the search cannot work in the <mark>dev</mark> environment.",
	},
	{
		url: url("/"),
		meta: {
			title: "If You Want to Test the Search",
		},
		excerpt: "Try running <mark>npm build && npm preview</mark> instead.",
	},
];

const toggleMobilePanel = () => {
	mobilePanelOpen = !mobilePanelOpen;
	if (!mobilePanelOpen) {
		keyword = "";
		result = [];
	}
};

const search = async (query: string): Promise<void> => {
	if (!query || !mounted) {
		result = [];
		return;
	}

	isSearching = true;

	try {
		let searchResults: SearchResult[] = [];

		if (import.meta.env.PROD && window.pagefind) {
			const response = await window.pagefind.search(query);
			searchResults = await Promise.all(
				response.results.map((item) => item.data()),
			);
		} else if (import.meta.env.DEV) {
			searchResults = fakeResult;
		} else {
			searchResults = [];
		}

		result = searchResults;
	} catch (error) {
		console.error("Search error:", error);
		result = [];
	} finally {
		isSearching = false;
	}
};

$: if (keyword && mounted) {
	search(keyword);
}

onMount(() => {
	mounted = true;
});
</script>

<!-- desktop search bar -->
<div class="hidden lg:flex items-center h-11 ml-2 rounded-lg
      bg-black/[0.04] hover:bg-black/[0.06] focus-within:bg-black/[0.06]
      dark:bg-white/5 dark:hover:bg-white/10 dark:focus-within:bg-white/10 relative flex-shrink-0">
    <Icon icon="material-symbols:search" class="absolute text-[1.25rem] pointer-events-none ml-3 text-black/30 dark:text-white/30"></Icon>
    <input placeholder="{i18n(I18nKey.search)}" bind:value={keyword}
           class="pl-10 text-sm bg-transparent outline-0 h-full w-32 focus:w-40 transition-all text-black/50 dark:text-white/50"
    >
    
    <!-- desktop results dropdown -->
    {#if result.length > 0}
        <div class="absolute top-12 left-0 right-0 shadow-2xl rounded-2xl p-2 bg-[var(--float-panel-bg)] max-h-[60vh] overflow-y-auto z-50">
            {#each result as item}
                <a href={item.url}
                   class="transition group block rounded-xl text-lg px-3 py-2 hover:bg-[var(--btn-plain-bg-hover)]">
                    <div class="transition text-90 inline-flex font-bold group-hover:text-[var(--primary)]">
                        {item.meta.title}<Icon icon="fa6-solid:chevron-right" class="transition text-[0.75rem] translate-x-1 my-auto text-[var(--primary)]"></Icon>
                    </div>
                    <div class="transition text-sm text-50">
                        {@html item.excerpt}
                    </div>
                </a>
            {/each}
        </div>
    {/if}
</div>

<!-- mobile search button -->
<button on:click={toggleMobilePanel} aria-label="Search"
        class="lg:hidden btn-plain scale-animation rounded-lg w-11 h-11 active:scale-90">
    <Icon icon="material-symbols:search" class="text-[1.25rem]"></Icon>
</button>

<!-- mobile search panel -->
{#if mobilePanelOpen}
    <div class="lg:hidden fixed inset-0 z-50 bg-[var(--float-panel-bg)] overflow-y-auto">
        <div class="p-4">
            <div class="flex items-center gap-2 mb-4">
                <div class="flex items-center gap-2 flex-1 relative min-w-0">
                    <Icon icon="material-symbols:search" class="absolute left-3 text-[1.25rem] text-black/30 dark:text-white/30 flex-shrink-0"></Icon>
                    <input placeholder="{i18n(I18nKey.search)}" bind:value={keyword}
                           class="w-full pl-10 pr-4 text-sm bg-black/[0.04] dark:bg-white/5 rounded-xl py-3 outline-0 text-black/50 dark:text-white/50"
                    >
                </div>
                <button on:click={toggleMobilePanel} class="btn-plain w-10 h-10 rounded-lg active:scale-90 flex-shrink-0">
                    <Icon icon="material-symbols:close" class="text-[1.25rem]"></Icon>
                </button>
            </div>

        {#if isSearching}
            <div class="text-center py-8 text-50">搜索中...</div>
        {:else if result.length > 0}
            <div class="space-y-2">
                {#each result as item}
                    <a href={item.url}
                       class="transition group block rounded-xl text-lg px-4 py-3 hover:bg-[var(--btn-plain-bg-hover)]">
                        <div class="transition text-90 inline-flex font-bold group-hover:text-[var(--primary)]">
                            {item.meta.title}<Icon icon="fa6-solid:chevron-right" class="transition text-[0.75rem] translate-x-1 my-auto text-[var(--primary)]"></Icon>
                        </div>
                        <div class="transition text-sm text-50 mt-1">
                            {@html item.excerpt}
                        </div>
                    </a>
                {/each}
            </div>
        {:else if keyword}
            <div class="text-center py-8 text-50">未找到结果</div>
        {/if}
        </div>
    </div>
{/if}

<style>
    input:focus {
        outline: 0;
    }
</style>