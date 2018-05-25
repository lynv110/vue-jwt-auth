<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <nav>
                <ul class="list-inline">
                    <li>
                        <router-link :class="primary" :to="{name: 'common.dashboard'}">Dashboard</router-link>
                    </li>
                    <li>
                        <router-link :class="primary" primary :to="{name : 'user.info'}">See info</router-link>
                    </li>
                    <li>
                        <router-link :class="primary" primary :to="{name : 'auth.login'}">Login</router-link>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="panel-body">

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