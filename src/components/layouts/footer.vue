<template>
    <footer class="footer">
        <div class="container">
            <div class="row align-items-center flex-column flex-md-row justify-content-between border-bottom border-dark pb-3">
                <router-link class="navbar-brand logo" to="/"><span class="text-primary">easy</span>trademarks</router-link>
                <div class="follow_us">
                    <h4>{{ $t("follow_us") }}</h4>
                    <ul class="social">
                        <li>
                            <a href="https://www.linkedin.com/in/ahmed-hawam2020" target="_blank"><i class="pi pi-linkedin"></i></a>
                        </li>
                        <li>
                            <a href="https://web.facebook.com/ahmedhawam2030" target="_blank"><i class="pi pi-facebook"></i></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/ahmed_hawam" target="_blank"><i class="pi pi-instagram"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-lg-3 col-md-6 col-12">
                    <h5 class="title text-primary">US OFFICE</h5>
                    <a href="tel:+1415224117" class="phone">+1415224117</a>
                    <p>9pm - 5pm</p>
                    <h5 class="title text-primary">EGYPT OFFICE</h5>
                    <a href="tel:+1415224117" class="phone">+1415224117</a>
                    <p>9pm - 5pm</p>
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <h4 class="title">Resource service</h4>
                    <ul class="links">
                        <li><a href="#">Templates & Forms</a></li>
                        <li><a href="#">User Guide</a></li>
                        <li><a href="#">Our Community</a></li>
                        <li><a href="#">What's New?</a></li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <h4 class="title">Useful links</h4>
                    <ul class="links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Resource Center</a></li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6 col-12">
                    <h4 class="title">Supported by</h4>
                    <img src="@/assets/media/payment.png" class="payment_image" alt="payment">
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style>

</style>