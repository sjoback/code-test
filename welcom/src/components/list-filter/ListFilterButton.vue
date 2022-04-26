<template>
    <button
        @click="$emit('setFilter', value)"
        :class="{ active: activeFilter === value }"
        type="button"
        class="filter-button"
    >
        {{ text }}
    </button>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        activeFilter: {
            type: String,
            required: false
        }
    }
}
</script>

<style lang="scss">
.filter-button {
    border: 0;
    border-radius: 25px;
    padding: 15px 30px;
    margin: 0 15px;
    cursor: pointer;
    background: $cream;
    font-family: Rubik Light;
    &:hover { text-decoration: underline; }
}

// Button active class
.filter-button.active {
    background: $orange;
    text-decoration: underline;
    color: $white;
}
</style>
