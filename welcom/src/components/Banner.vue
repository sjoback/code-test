<template>
    <div class="banner">
        <div class="banner-inner">
            <h1 class="banner-inner__header">My favourite veggies</h1>
            <img
                src="@/assets/images/banner-bg.svg"
                alt="Nice looking veggie!"
                class="banner-inner__image"
                load="eager"
            >
        </div>
    </div>
</template>

<style lang="scss">
.banner {
    padding: 100px 20px;
    width: 100%;
    background: $darkgreen;

    &-inner {
        position: relative;

        &__header {
            color: $white;
            text-align: center;
            font-size: 62px;
            position: relative;
            z-index: 1;
            line-height: 72px;
        }

        &__image {
            color: red;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translateX(-50%) translateY(-50%);
            width: 210px;
            height: 210px;
        }
    }
}
</style>
