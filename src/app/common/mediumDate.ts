import Vue from 'vue';

export const mediumDateFiler = Vue.filter('mediumDate', (value: Date): string => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return value.toLocaleDateString('en-US', options);
});
