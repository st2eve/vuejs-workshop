<script>
    export default {
        props: {
            details: {
                type: String
            }
        },
    }
</script>

<template>
    <ul>
        <li v-for="detail in details">
            {{ detail }}
        </li>
    </ul>
</template>