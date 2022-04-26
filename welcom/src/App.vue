<template>
    <section class="section">
        <div class="section-inner">
            <Banner />
        </div>

        <div class="section-inner">
            <ListFilter
                @setFilter="setFilter"
                :active-filter="activeFilter"
            />
        </div>

        <div class="section-inner">
            <List :active-filter="activeFilter" />
        </div>
    </section>
</template>

<script>
import Banner from '@/components/Banner.vue';
import ListFilter from '@/components/list-filter/ListFilter.vue';
import List from '@/components/list/List.vue';
export default {
    name: 'App',
    components: {
        Banner, ListFilter, List
    },
    data() {
        return {
            activeFilter: 'all'
        }
    },
    methods: {
        setFilter(filterType) {
            this.activeFilter = filterType;
        }
    }
}
</script>

<style lang="scss">
body {
    background: $offwhite;
    margin: 0;

    .section {

        &-inner {
            width: 100%;
            display: flex;
            justify-content: center;
        }
    }
}
</style>
