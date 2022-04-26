<template>
    <div class="filter-buttons">
        <ListFilterButton
            text="Show all my favourite veggies"
            value="all"
            :active-filter="activeFilter"
            @setFilter="setFilter"
        />

        <ListFilterButton
            text="Only show my hearted veggies"
            value="favourites"
            :active-filter="activeFilter"
            @setFilter="setFilter"
        />
    </div>
</template>

<script>
import ListFilterButton from './ListFilterButton.vue';
export default {
    components: { ListFilterButton },
    props: {
        activeFilter: {
            type: String,
            required: false
        }
    },
    methods: {
        setFilter(filter) {
            this.$emit('setFilter', filter);
        }
    }
}
</script>

<style lang="scss" scoped>
.filter-buttons {
    width: 100%;
    display: flex;
    justify-content: center;
    background: linear-gradient(to bottom, #122a0b 0%,#122a0b 50%,#ffffff 50%,#ffffff 100%);
}
</style>
