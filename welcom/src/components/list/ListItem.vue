<template>
    <li
        @click="$emit('click', veggie, veggieIndex)"
        class="list-item"
    >
        <img
            class="list-item__image"
            :src="require('@/assets/images/' + veggieIndex + '.jpg')"
            :alt="`${veggie.name} ${veggieIndex}`"
            load="eager"
        >

        <transition name="icon" mode="out-in">
            <i
                v-if="isFavourite"
                class="list-item__icon fas fa-heart"
            />

            <i
                v-else
                class="list-item__icon far fa-heart"
            />
        </transition>

        <div class="list-item__text">
            <p>{{ veggie.name }} {{ veggieIndex }}</p>
            <span>{{ veggie.desc }}</span>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        veggie: {
            type: Object,
            required: true,
            default: () => {}
        },
        veggieIndex: {
            type: String,
            required: false
        },
        isFavourite: {
            type: Boolean,
            required: false,
            default: false
        }
    }
}
</script>

<style lang="scss" scoped>
.list-item {
        cursor: pointer;
        padding: 20px;
        box-sizing: border-box;
        display: flex;
        align-items: flex-end;
        margin: 20px;
        position: relative;
        height: 400px;
        width: calc(100% - 40px);

        @media screen and (min-width: 600px) and (max-width: 800px) {
            width: calc(50% - 40px);
        }

        @media screen and (min-width: 800px) {
            max-width: 300px;
            width: calc(33.3% - 40px);
        }

        &:nth-child(4),
        &:nth-child(7) {
            width: 100%;

            @media screen and (min-width: 600px) and (max-width: 800px) {
                width: calc(100% - 40px);
            }

            @media screen and (min-width: 800px) {
                max-width: 750px;
                width: calc(66.6% - 40px);
            }
        }

    &__image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &__icon {
        position: absolute;
        top: 20px;
        color: $white;
        font-size: 32px;
    }

    &__text {
        p,
        span {
            position: relative;
            z-index: 1;
            color: $white;
            display: block;
        }

        p {
            font-size: 17px;
            margin: 0;
        }

        span {
            margin-top: 5px;
        }
    }
}
</style>
