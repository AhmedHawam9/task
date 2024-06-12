<template>
    <h5 class="home--subtitle blue text-center text-primary text-uppercase font-weight-normal">Meet our amazing team.</h5>
    <h1 class="font-weight-medium w-50 mx-auto mb-0 my-3 first-letter-uppercase  text-center">
        Our team are subject matter experts and are invested in your success
    </h1>
    <div class="row pt-5 pb-0 pb-sm-5">
        <div class="col-lg-3 col-md-6 text-center mb-5" v-for="(team, index) in teams" :key="index">
            <img class="img-fluid object-fit-cover w-100" style="max-width:170px"
                :src="team.image"
                alt="image">
            <h5 class="mt-4 mb-2 text-center font-weight-normal">{{team.name}}</h5>
            <p class="blue mb-3 text-center font-weight-normal">{{team.position}}</p>
            <a :href="team.linkedin" target="_blank"><img
                    src="https://www.easy-trademarks.com/public//default/coworking/images/linkedin.png"
                    alt="linkedin"></a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            teams: [
                {
                    id: 1,
                    name: 'Ahmed',
                    image: 'https://www.easy-trademarks.com/public/storage/teams-photos/WuGHPW2gpeYoop9Cke1rtGxaTjC8hi9F6724tJqV.png',
                    position: 'Senior Developer',
                    linkedin: 'https://www.linkedin.com/in/ahmedzizo1',
                },
                {
                    id: 2,
                    name: 'Ramez',
                    image: 'https://www.easy-trademarks.com/public/storage/teams-photos/3kzATFH2DN2cxdziVsXLArZA5lHxeDplorNM5akB.png',
                    position: 'Security and Data Governance',
                    linkedin: 'https://www.linkedin.com/in/ramez-dous/',
                },
                {
                    id: 3,
                    name: 'Rita',
                    image: 'https://www.easy-trademarks.com/public/storage/teams-photos/WsVGVXMkjVy19nSjCdsSDo2OM6PuCmHszz5lpgow.png',
                    position: 'Project Manager',
                    linkedin: 'https://www.linkedin.com/in/rita-abou-mhaya-b443bb211',
                },
                {
                    id: 4,
                    name: 'Ruba',
                    image: 'https://www.easy-trademarks.com/public/storage/teams-photos/HQGcR4E96BtlpdUVtyp8ZT1zyL0u3Y6eDnjNW29Y.png',
                    position: 'CO Founder',
                    linkedin: 'https://www.linkedin.com/in/rubaelmoussawi',
                },
            ]
        }
    }
}
</script>

<style></style>