<template>
    <div class="w-full h-[788p rounded mt-16 lg:mt-40 bg-foundationGreyLight py-12 px-[80px]"  style="">
        <div class=" flex space-x-5 justify-center items-center">
            <hr class="w-[50px] border-t-[3px] border-lineStrokeDark mr-4">
            <h1 class="font-extrabold text-[18px] md:text-[30] lg:text-[32px]">OUR SERVICES</h1>
            <hr class="w-[50px] border-t-[3px] border-lineStrokeDark mr-4">
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
            <div class="justify-center items-center align-center w-295 h-[254px] rounded-[10px] mt-12 bg-0 space-y-2 flex flex-col border border-foundationGoldNormal">
                <img src="@/assets/Plumbing.png" alt="Check square" class="h-8">
                <router-link class="font-extrabold text-[18px] text-center hover:text-customGold text-foundationGreyDarker" to="/services">Residential and Commercial Plumbing</router-link>
                <p class="text-[16px] w-[224px] text-center font-nunito text-foundationGreyDarkActive">Top-quality plumbing services for homes and businesses. Dependable, efficient, and professional.</p>
            </div>
            <div class="justify-center items-center align-center w-295 h-[254px] rounded-[10px] mt-12 bg-0 space-y-2 flex flex-col border border-foundationGoldNormal">
                <img src="@/assets/Water-Heater.png" alt="Check square" class="h-8">
                <router-link class="font-extrabold text-[18px] text-center hover:text-customGold text-foundationGreyDarker" to="/services">Water heater repair & replacement</router-link>

                <p class="text-[16px] w-[224px] text-center font-nunito text-foundationGreyDarkActive">Expert repair and replacement of water heaters to keep your home warm and comfortable.</p>
            </div>
            <div class="justify-center items-center align-center w-295 h-[254px] rounded-[10px] mt-12 bg-0 space-y-2 flex flex-col border border-foundationGoldNormal">
                <img src="@/assets/Tools.png" alt="Check square" class="h-8">
                <router-link class="font-extrabold text-[18px] text-center hover:text-customGold text-foundationGreyDarker" to="/services">Repiping Services</router-link>

                <p class="text-[16px] w-[224px] text-center font-nunito text-foundationGreyDarkActive">Replace old pipes with durable, high-quality materials for better water flow and reliability.</p>
            </div>
            <div class="justify-center items-center align-center w-295 h-[254px] rounded-[10px] mt-12 bg-0 space-y-2 flex flex-col border border-foundationGoldNormal">
                <img src="@/assets/Water-Tap.png" alt="Check square" class="h-8">
                <router-link class="font-extrabold text-[18px] text-center hover:text-customGold text-foundationGreyDarker" to="/services">Faucet Repair & Replacement</router-link>
                <p class="text-[16px] w-[224px] text-center font-nunito text-foundationGreyDarkActive">Repair and replace faucets and fixtures for enhanced functionality and style in your home.</p>
            </div>
            <div class="justify-center items-center align-center w-295 h-[254px] rounded-[10px] mt-12 bg-0 space-y-2 flex flex-col border border-foundationGoldNormal">
                <img src="@/assets/Gas-Burner.png" alt="Check square" class="h-8">
                <router-link class="font-extrabold text-[18px] text-center hover:text-customGold text-foundationGreyDarker" to="/services">Gas Line Services</router-link>
                <p class="text-[16px] w-[224px] text-center font-nunito text-foundationGreyDarkActive">Comprehensive gas line installation, repair, and maintenance by certified professionals.</p>
            </div>
            <div class="justify-center items-center align-center w-295 h-[254px] rounded-[10px] mt-12 bg-0 space-y-2 flex flex-col border border-foundationGoldNormal">
                <img src="@/assets/Heating.png" alt="Check square" class="h-8">
                <router-link class="font-extrabold text-[18px] text-center hover:text-customGold text-foundationGreyDarker" to="/services">Hydronic Heating & Services</router-link>
                <p class="text-[16px] w-[224px] text-center font-nunito text-foundationGreyDarkActive">Installation, repair, and maintenance of energy-efficient hydronic heating systems for consistent warmth.</p>
            </div>

            <div class="justify-center items-center align-center w-295 h-[254px] rounded-[10px] mt-12 bg-0 space-y-2 flex flex-col border border-foundationGoldNormal">
                <img src="@/assets/Pump.png" alt="Check square" class="h-8">
                <router-link class="font-extrabold text-[18px] text-center hover:text-customGold text-foundationGreyDarker" to="/services">Pump Services</router-link>
                <p class="text-[16px] w-[224px] text-center font-nunito text-foundationGreyDarkActive">Professional installation, repair, and maintenance of sump pumps, well pumps, and more.</p>
            </div>

            <div class="justify-center items-center align-center w-295 h-[254px] rounded-[10px] mt-12 bg-0 space-y-2 flex flex-col border border-foundationGoldNormal">
                <img src="@/assets/Water-Pipe.png" alt="Check square" class="h-8">
                <router-link class="font-extrabold text-[18px] text-center hover:text-customGold text-foundationGreyDarker" to="/services">Sewer & Drain Pipe Repair & Replacement</router-link>
                <p class="text-[16px] w-[224px] text-center font-nunito text-foundationGreyDarkActive">Expert repair and replacement of sewer and drain pipes to prevent clogs and ensure smooth operation.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AboutUsSection',
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>
