<template>
  <section class="why">
    <div class="why_container">
        <div class="data_why">
            <p class="title_section">Why Us?</p>
            <h1 class="title">Our vision is to build an AI enabled trademark expert that</h1>
            <div class="why_services">
                <div class="service" v-for="(service, index) in services" :key="index">
                    <h5 class="title_service"><i class="pi" :class="service.icon"></i> {{ service.title }}</h5>
                    <p class="text_service">{{ service.text }}</p>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    data() {
        return {
            services: [
                {
                    icon: "pi-truck",
                    title: "Fast Service",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                },
                {
                    icon: "pi-shield",
                    title: "Secure Service",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                },
                {
                    icon: "pi-headphones",
                    title: "24/7 Support",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                },
                {
                    icon: "pi-headphones",
                    title: "24/7 Support",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                },
                {
                    icon: "pi-headphones",
                    title: "24/7 Support",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                },
            ]
        }
    }
}
</script>

<style>

</style>