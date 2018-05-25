<template>
    <div>
        <div class="alert alert-danger" v-if="error">
            <p>There was an error, unable to sign in with google account.</p>
        </div>
        Register page
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>