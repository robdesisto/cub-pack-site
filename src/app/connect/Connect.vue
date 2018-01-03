<template>
    <div class="page">
        <cub-page-content v-bind:content="pageContent"></cub-page-content>
        <div v-if="messageSent" class="alert alert-success">
            <h4 class="alert-heading">Message Sent!</h4>
            <p>
                Your message has been sent to the pack leader who will respond as swiftly as possible.
            </p>
            <p class="text-center">
                <router-link to ="/home" class="btn btn-success">Home</router-link>
            </p>
        </div>
        <form v-if="!messageSent"  @submit="handleSubmit($event)" v-bind:class="{'was-validated': submitted}" novalidate>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" name="name" id="name" placeholder="Good Scout" v-model.trim="contact.name" min-length="2" required/>
                <div class="invalid-feedback">Please enter a valid name.</div>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" name="email" id="email" placeholder="name@example.com" v-model.trim="contact.email" required/>
                <div class="invalid-feedback">Please enter a valid email.</div>
            </div>
            <div class="form-group">
                <label for="message">Message</label>
                <textarea class="form-control" id="message" name="message" v-model.trim="contact.message" required></textarea>
                <small class="form-text text-muted">How can we be of service?</small>
                <div class="invalid-feedback">Please enter a message.</div>
            </div>
            <div class="form-group">
                <label for="test">Are You a Person</label>
                <input type="number" class="form-control" name="test" id="test" v-model.trim="contact.test" min="4" max="4" required/>
                <small class="form-text text-muted">What does 2 + 2 equal?</small>
                <div class="invalid-feedback">Please give the right answer.</div>
            </div>
            <button type="submit" class="btn btn-primary">Send</button>
        </form>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    import {AppConstants} from '@app/store/AppConstants';
    import {PageContent} from '@app/store/models/PageContent';

    import CubPageContent from '@app/common/PageContent.vue';
    
    @Component({
        components: {CubPageContent}
    })
    export default class Connect extends Vue {

        get pageContent(): PageContent | null {
            return this.$store.getters.pageContent('connect');
        }

        public contact: {[field: string]: string} = this.resetForm();

        public messageSent = false;
        public submitted = false;

        public handleSubmit(event: Event): void {
            event.preventDefault();
            event.stopPropagation();

            this.submitted = true;

            const form = event.target as HTMLFormElement;

            this.messageSent = form.checkValidity();

            if (this.messageSent) {
                fetch(`${AppConstants.apiUrl}/contact`, {
                    method: 'POST',
                    headers : new Headers(),
                    body: JSON.stringify(this.contact)
                }).then((res) => res.json())
                    .then(() =>  {
                        this.resetForm();
                        this.submitted = false;
                    })
                    .catch((err) => console.error(err))
            }
        }

        private resetForm(): {[field: string]: string} {
            return {
                name: '',
                email: '',
                message: '',
                test: ''
            }
        }

    }
</script>

<style lang="scss" scoped>
    @import '../../sass/app.shared';

    form {
        margin-bottom: 3rem;
        margin-top: 2rem;

        @include media-breakpoint-up(md) {
            margin-bottom: 1rem;
            margin-top: 1rem;
        }
    }

    .controls {
        margin-top: 1rem;
    }
</style>
