<template>
    <div class="w-full h-auto rounded mt-18 bg-[#EADBBD] px-12 py-8">
        <div class="hr-container flex space-x-5 pt-12 pr-12 justify-end items-center">
            <h1 class="font-extrabold text-[18px] lg:text-[32px] text-foundationGreyDarker">TESTIMONIALS</h1>
            <hr class="w-[50px] border-t-[3px] border-lineStrokeDark">
        </div>
  
        <!-- Slider for desktop view -->
        <div class="relative mt-8 hidden md:block">
            <div @click="prevTestimonial" class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gra bg-opacity-50 text-white p-2 rounded-full z-10 cursor-pointer">
                <img v-lazy="require('@/assets/chevron-left.png')" alt="Left Arrow" class="h-8">
            </div>
            <div @click="nextTestimonial" class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gra bg-opacity-50 text-white p-2 rounded-full z-10 cursor-pointer">
                <img v-lazy="require('@/assets/chevron-right.png')" alt="Right Arrow" class="h-8">
            </div>
  
            <div class="overflow-hidden">
                <div class="flex transition-transform duration-500" :style="{ width: `${testimonialGroups.length * 100}%`, transform: `translateX(-${currentTestimonial * (100 / testimonialGroups.length)}%)` }">
                    <div v-for="(testimonialGroup, index) in testimonialGroups" :key="index" class="flex space-x-8 w-full">
                        <div class="w-1/2 flex justify-center items-center">
                            <div class="w-[295px] h-auto rounded bg-0 space-y-2 flex flex-col items-center">
                                <img v-lazy="testimonialGroup[0].image1" alt="Avatar" class="w-[91px] h-[87px]">
                                <h1 class="font-extrabold text-[18px] text-center text-foundationGreyDarker">{{ testimonialGroup[0].name }}</h1>
                                <img v-lazy="testimonialGroup[0].image2" alt="Image" class="w-[161px]">
                                <p class="text-[16px] w-[407px] text-center font-nunito text-foundationGreyDarker">{{ testimonialGroup[0].text }}</p>
                            </div>
                        </div>
                        <div class="w-1/2 flex justify-center items-center">
                            <div class="w-[295px] h-auto rounded bg-0 space-y-2 flex flex-col items-center">
                                <img v-lazy="testimonialGroup[1].image1" alt="Avatar" class="w-[91px] h-[87px]">
                                <h1 class="font-extrabold text-[18px] text-center text-foundationGreyDarker">{{ testimonialGroup[1].name }}</h1>
                                <img v-lazy="testimonialGroup[1].image2" alt="Image" class="w-[161px]">
                                <p class="text-[16px] w-[407px] text-center font-nunito text-foundationGreyDarker">{{ testimonialGroup[1].text }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  
            <div class="flex justify-center mt-4">
                <ul class="flex space-x-2">
                    <li v-for="(group, index) in testimonialGroups" :key="index" @click="goToTestimonial(index)" :class="{'bg-gray-800': index === currentTestimonial, 'bg-foundationGreyLightActive': index !== currentTestimonial}" class="w-3 h-3 rounded-full cursor-pointer"></li>
                </ul>
            </div>
        </div>
  
        <!-- Slider for mobile view -->
        <div class="relative mt-8 block md:hidden">
            <div @click="prevTestimonialMobile" class="absolute -left-8 md:left-0 top-1/2 transform -translate-y-1/2 bg-gra bg-opacity-50 text-white p-2 rounded-full z-10 cursor-pointer">
                <img v-lazy="require('@/assets/chevron-left.png')" alt="Left Arrow" class="h-8">
            </div>
            <div @click="nextTestimonialMobile" class="absolute -right-8 md:right-0 top-1/2 transform -translate-y-1/2 bg-gra bg-opacity-50 text-white p-2 rounded-full z-10 cursor-pointer">
                <img v-lazy="require('@/assets/chevron-right.png')" alt="Right Arrow" class="h-8">
            </div>
  
            <div class="overflow-hidden">
                <div class="flex transition-transform duration-500" :style="{ width: `${mobileTestimonials.length * 100}%`, transform: `translateX(-${currentMobileTestimonial * (100 / mobileTestimonials.length)}%)` }">
                    <div v-for="(testimonial, index) in mobileTestimonials" :key="index" class="w-full flex justify-center items-center">
                        <div class="w-[295px] h-auto rounded bg-0 space-y-2 flex flex-col items-center">
                            <img v-lazy="testimonial.image1" alt="Avatar" class="w-[91px] h-[87px]">
                            <h1 class="font-extrabold text-[18px] text-center text-foundationGreyDarker">{{ testimonial.name }}</h1>
                            <img v-lazy="testimonial.image2" alt="Image" class="w-[136px]">
                            <p class="text-[16px] w-[285px] text-center font-nunito text-foundationGreyDarker">{{ testimonial.text }}</p>
                        </div>
                    </div>
                </div>
            </div>
  
            <div class="flex justify-center mt-4">
                <ul class="flex space-x-2">
                    <li v-for="(testimonial, index) in mobileTestimonials" :key="index" @click="goToTestimonialMobile(index)" :class="{'bg-gray-800': index === currentMobileTestimonial, 'bg-foundationGreyLightActive': index !== currentMobileTestimonial}" class="w-2 h-2 rounded-full cursor-pointer"></li>
                </ul>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TestimonialsSection',
    data() {
        return {
            currentTestimonial: 0,
            currentMobileTestimonial: 0,
            testimonialGroups: [
                [
                    {
                        image1: require('@/assets/Ellipse-2.png'),
                        name: 'Michael D.',
                        image2: require('@/assets/Frame-321316190.png'),
                        text: '“We woke up to a cold shower one morning and realized our water heater was on the fritz. Zyons came highly recommended by a friend, so I gave them a call. They were able to diagnose the problem quickly and explained everything clearly. They offered both repair and replacement options, and we opted for a new water heater. Thanks, Zyon!”'
                    },
                    {
                        image1: require('@/assets/Ellipse-3.png'),
                        name: 'Michael D.',
                        image2: require('@/assets/Frame-321316190.png'),
                        text: '"Zyons Plumbing saved the day! My kitchen sink decided to overflow just before a dinner party. I called Zyon in a panic, and they were able to send a technician out within the hour. He was friendly, professional, and had the clog cleared in no time. I was so impressed with their responsiveness and expertise. They definitely saved my dinner party and my sanity!"'
                    }
                ],
                [
                    {
                        image1: require('@/assets/Ellipse-2.png'),
                        name: 'Love D.',
                        image2: require('@/assets/Frame-321316190.png'),
                        text: '“We woke up to a cold shower one morning and realized our water heater was on the fritz. Zyons came highly recommended by a friend, so I gave them a call. They were able to diagnose the problem quickly and explained everything clearly. They offered both repair and replacement options, and we opted for a new water heater. Thanks, Zyon!”'
                    },
                    {
                        image1: require('@/assets/Ellipse-3.png'),
                        name: 'Katherine D.',
                        image2: require('@/assets/Frame-321316190.png'),
                        text: '"Zyons Plumbing saved the day! My kitchen sink decided to overflow just before a dinner party. I called Zyon in a panic, and they were able to send a technician out within the hour. He was friendly, professional, and had the clog cleared in no time. I was so impressed with their responsiveness and expertise. They definitely saved my dinner party and my sanity!"'
                    }
                ],
                [
                    {
                        image1: require('@/assets/Ellipse-2.png'),
                        name: 'Micky D.',
                        image2: require('@/assets/Frame-321316190.png'),
                        text: '“We woke up to a cold shower one morning and realized our water heater was on the fritz. Zyons came highly recommended by a friend, so I gave them a call. They were able to diagnose the problem quickly and explained everything clearly. They offered both repair and replacement options, and we opted for a new water heater. Thanks, Zyon!”'
                    },
                    {
                        image1: require('@/assets/Ellipse-3.png'),
                        name: 'Michael D.',
                        image2: require('@/assets/Frame-321316190.png'),
                        text: '"Zyons Plumbing saved the day! My kitchen sink decided to overflow just before a dinner party. I called Zyon in a panic, and they were able to send a technician out within the hour. He was friendly, professional, and had the clog cleared in no time. I was so impressed with their responsiveness and expertise. They definitely saved my dinner party and my sanity!"'
                    }
                ]
            ],
            mobileTestimonials: [
                {
                    image1: require('@/assets/Ellipse-2.png'),
                    name: 'Michael D.',
                    image2: require('@/assets/Frame-321316190.png'),
                    text: '“We woke up to a cold shower one morning and realized our water heater was on the fritz. Zyons came highly recommended by a friend, so I gave them a call. They were able to diagnose the problem quickly and explained everything clearly. They offered both repair and replacement options, and we opted for a new water heater. Thanks, Zyon!”'
                },
                {
                    image1: require('@/assets/Ellipse-3.png'),
                    name: 'Michael D.',
                    image2: require('@/assets/Frame-321316190.png'),
                    text: '"Zyons Plumbing saved the day! My kitchen sink decided to overflow just before a dinner party. I called Zyon in a panic, and they were able to send a technician out within the hour. He was friendly, professional, and had the clog cleared in no time. I was so impressed with their responsiveness and expertise. They definitely saved my dinner party and my sanity!"'
                },
                {
                    image1: require('@/assets/Ellipse-2.png'),
                    name: 'Love D.',
                    image2: require('@/assets/Frame-321316190.png'),
                    text: '“We woke up to a cold shower one morning and realized our water heater was on the fritz. Zyons came highly recommended by a friend, so I gave them a call. They were able to diagnose the problem quickly and explained everything clearly. They offered both repair and replacement options, and we opted for a new water heater. Thanks, Zyon!”'
                },
                {
                    image1: require('@/assets/Ellipse-3.png'),
                    name: 'Katherine D.',
                    image2: require('@/assets/Frame-321316190.png'),
                    text: '"Zyons Plumbing saved the day! My kitchen sink decided to overflow just before a dinner party. I called Zyon in a panic, and they were able to send a technician out within the hour. He was friendly, professional, and had the clog cleared in no time. I was so impressed with their responsiveness and expertise. They definitely saved my dinner party and my sanity!"'
                },
                {
                    image1: require('@/assets/Ellipse-2.png'),
                    name: 'Micky D.',
                    image2: require('@/assets/Frame-321316190.png'),
                    text: '“We woke up to a cold shower one morning and realized our water heater was on the fritz. Zyons came highly recommended by a friend, so I gave them a call. They were able to diagnose the problem quickly and explained everything clearly. They offered both repair and replacement options, and we opted for a new water heater. Thanks, Zyon!”'
                },
                {
                    image1: require('@/assets/Ellipse-3.png'),
                    name: 'Michael D.',
                    image2: require('@/assets/Frame-321316190.png'),
                    text: '"Zyons Plumbing saved the day! My kitchen sink decided to overflow just before a dinner party. I called Zyon in a panic, and they were able to send a technician out within the hour. He was friendly, professional, and had the clog cleared in no time. I was so impressed with their responsiveness and expertise. They definitely saved my dinner party and my sanity!"'
                }
            ]
        };
    },
    mounted() {
        this.startAutoSlide();
    },
    methods: {
        nextTestimonial() {
            this.currentTestimonial = (this.currentTestimonial + 1) % this.testimonialGroups.length;
        },
        prevTestimonial() {
            this.currentTestimonial = (this.currentTestimonial - 1 + this.testimonialGroups.length) % this.testimonialGroups.length;
        },
        goToTestimonial(index) {
            this.currentTestimonial = index;
        },
        nextTestimonialMobile() {
            this.currentMobileTestimonial = (this.currentMobileTestimonial + 1) % this.mobileTestimonials.length;
        },
        prevTestimonialMobile() {
            this.currentMobileTestimonial = (this.currentMobileTestimonial - 1 + this.mobileTestimonials.length) % this.mobileTestimonials.length;
        },
        goToTestimonialMobile(index) {
            this.currentMobileTestimonial = index;
        },
        startAutoSlide() {
            setInterval(() => {
                this.nextTestimonial();
                this.nextTestimonialMobile();
            }, 5000); // Slide every 5 seconds
        }
    }
  };
  </script>
  