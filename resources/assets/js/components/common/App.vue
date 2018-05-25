<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <nav>
                <ul class="list-inline">
                    <li>
                        <router-link v-bind:class="primary" :to="{name: 'common.dashboard'}">Dashboard</router-link>
                    </li>
                    <li>
                        <router-link v-bind:class="primary" :to="{name : 'user.info'}">See info</router-link>
                    </li>
                    <li>
                        <router-link v-bind:class="primary" :to="{name : 'auth.login'}">Login</router-link>
                    </li>
                    <li>
                        <router-link v-bind:class="primary" :to="{name : 'auth.register'}">Register</router-link>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="panel-body">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component 1 mounted.')
        }
    }
</script>