<template>
    <ul
        v-if="veggiesList.length"
        class="section-inner__list"
    >
        <ListItem
            v-for="(veggie, index) in veggiesList"
            :key="index"
            :veggie="veggie"
            :veggie-index="veggie.index"
            :is-favourite="isVeggieFavourite(veggie.index)"
            @click="setFavourite(veggie, veggie.index)"
        />
    </ul>

    <div
        v-else
        class="section-inner__list-empty"
     >
        <h1>No hearted veggies <i class="fas fa-sad-cry"></i></h1>
    </div>
</template>

<script>
import ListItem from './ListItem.vue';
export default {
    components: { ListItem },
    props: {
        activeFilter: {
            type: String,
            required: true,
            default: 'all'
        }
    },
    data() {
        return {
            favourites: []
        }
    },
    computed: {
        veggiesList() {
            if (this.activeFilter === 'all') return this.veggies;
            else return this.veggies.filter(veggie => this.favourites.includes(veggie.index));
        },
        veggies() {
            return [
                {
                    index: '1',
                    name: 'Yummy veggie',
                    img: '',
                    desc: 'Ah, this one so gooood!',
                    isFavourite: true
                },
                {
                    index: '2',
                    name: 'Yummy veggie',
                    img: '',
                    desc: 'Ah, this one so gooood!',
                    isFavourite: false
                },
                {
                    index: '3',
                    name: 'Yummy veggie',
                    img: '',
                    desc: 'Ah, this one so gooood!',
                    isFavourite: false
                },
                {
                    index: '4',
                    name: 'Yummy veggie',
                    img: '',
                    desc: 'Ah, this one so gooood!',
                    isFavourite: false
                },
                {
                    index: '5',
                    name: 'Yummy veggie',
                    img: '',
                    desc: 'Ah, this one so gooood!',
                    isFavourite: false
                },
                {
                    index: '6',
                    name: 'Yummy veggie',
                    img: '',
                    desc: 'Ah, this one so gooood!',
                    isFavourite: false
                },
                {
                    index: '7',
                    name: 'Yummy veggie',
                    img: '',
                    desc: 'Ah, this one so gooood!',
                    isFavourite: false
                },
                {
                    index: '8',
                    name: 'Yummy veggie',
                    img: '',
                    desc: 'Ah, this one so gooood!',
                    isFavourite: false
                },
                {
                    index: '9',
                    name: 'Yummy veggie',
                    img: '',
                    desc: 'Ah, this one so gooood!',
                    isFavourite: false
                },
                {
                    index: '10',
                    name: 'Yummy veggie',
                    img: '',
                    desc: 'Ah, this one so gooood!',
                    isFavourite: false
                }
            ]
        }
    },
    methods: {
        setFavourite(veggie, veggieIndex) {
            if (!this.favourites.includes(veggieIndex)) this.favourites.push(veggieIndex);
            else this.favourites = this.favourites.filter(favourite => favourite !== veggieIndex)
        },
        isVeggieFavourite(veggieIndex) {
            return this.favourites.includes(veggieIndex);
        }
    }
}
</script>

<style lang="scss" scoped>
    .section-inner__list,
    .section-inner__list-empty {
        box-sizing: border-box;
        padding: 40px 20px;
    }

    .section-inner__list {
        list-style-type: none;
        width: 1060px;
        max-width: 100%;
        display: flex;
        flex-wrap: wrap;
    }

    .section-inner__list-empty {
        i {
            color: $green;
        }
    }
</style>
