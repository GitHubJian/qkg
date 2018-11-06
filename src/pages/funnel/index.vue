<template>
    <layout>
        <div slot="content">
            <div>Hello, {{name}}</div>
            <input v-model="name"/>
        </div>
    </layout>
</template>

<script>
import Header from 'components/header';
import Drawer from 'components/drawer';

export default {
    components: {
        Header,
        Drawer
    },
    data() {
        return {
            name: ''
        };
    },
    watch: {
        name(newVal) {
            debugger;
        }
    }
};
</script>

<style lang="scss">
</style>


