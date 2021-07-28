<template>
    <div class="login-wrapper">
        <div class="blur-login">
            <div class="p-grid p-jc-center vertical-container">
                <HeaderLogin/>
                <div class="p-col-4">
                    <router-view></router-view>
                </div>
                <FooterLogin/>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderLogin from "../components/ui/login/HeaderLogin";
    import FooterLogin from "../components/ui/login/FooterLogin";

    export default {
        components: {
            FooterLogin,
            HeaderLogin,
        }
    }
</script>

<style scoped>
    .p-grid {
        height: 100vh;
    }
    .login-wrapper{
        background-image: url(../assets/img/kotiki.jpg);
        position:relative;
        height: 100vh;
    }
    .blur-login{
        position:absolute;
        background-color: rgba(24, 37, 57, 0.76);
        width: 100%
    }
</style>