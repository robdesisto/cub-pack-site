import Vue from 'vue';

export const mediumDateFilter = Vue.filter('mediumDate', (value: Date): string => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return value.toLocaleDateString('en-US', options);
});
