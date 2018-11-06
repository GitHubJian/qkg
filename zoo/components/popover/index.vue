<template>
    <div ref="popover" class="q-popover__wrapper" v-show="showPopper" :style="{left: position.x + 'px', top: position.y + 'px', width: width + 'px'}">
        <div class="q-popover">
            <div v-if="!!title" class="q-popover__header">
                {{ title }}
            </div>
            <div class="q-popover__body">
                <slot></slot>
            </div>
        </div>
        <div class="q-popover__arrow"></div>
    </div>
</template>

<script>
import { contains } from './../../utils/node.js';

export default {
    name: 'QPopover',
    props: {
        title: String,
        visible: {
            type: Boolean,
            default: false
        },
        position: {
            type: Object,
            default: {
                x: 0,
                y: 0,
                width: 0
            }
        },
        width: {
            type: Number,
            default: 310
        }
    },
    data() {
        return {
            showPopper: false
        };
    },
    watch: {
        visible(val) {
            if (val) {
                this.$nextTick(() => {
                    this.doShow();
                });
            } else {
                this.doClose();
            }
        },
        showPopper(val) {
            val ? this.$emit('show') : this.$emit('hide');
        }
    },
    methods: {
        doToggle() {
            this.showPopper = !this.showPopper;
        },
        doShow() {
            this.showPopper = true;
            this.$nextTick(() => {
                const el = this.$refs.popover;
                debugger;
                el.style.left =
                    this.position.x -
                    el.offsetWidth +
                    this.position.width +
                    10 +
                    'px';
                el.style.top = this.position.y - el.offsetHeight - 10 + 'px';
            });
        },
        doClose() {
            this.showPopper = false;
        },
        handleDocumentClick(e) {
            let reference = this.reference || this.$refs.reference;
            const popper = this.popper || this.$refs.popper;
            if (
                !reference &&
                this.$slots.reference &&
                this.$slots.reference[0]
            ) {
                reference = this.referenceElm = this.$slots.reference[0].elm;
            }
            if (
                !this.$el ||
                !reference ||
                contains.bind(this.$el, e.target) ||
                contains.bind(reference, e.target) ||
                !popper ||
                contains.bind(popper, e.target)
            ) {
                return;
            }
            this.showPopper = false;
        }
    }
};
</script>

<style lang="scss">
.q-popover__wrapper {
    position: fixed;
    z-index: 2000;
    padding: 12px;
    min-width: 150px;
    font-size: 14px;
    color: #606266;
    text-align: justify;
    line-height: 1.4;
    background: #fff;
    border: 1px solid #ebeef5;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

    .q-popover__arrow {
        position: absolute;
        display: block;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;

        border-width: 6px;

        bottom: -6px;
        right: 10px;
        margin-right: 3px;
        border-top-color: red;
        border-bottom-width: 0;
    }
}
</style>

