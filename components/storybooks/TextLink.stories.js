import TextLink from '@/components/atoms/Link/TextLink.vue';

export default {
  title: 'TextLink',
  components: {
    TextLink
  }
}

export const NuxtWebsite = () => ({
  components: {
    TextLink
  },
  template: '<TextLink location="/" name="Story"/>'
})
