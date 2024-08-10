<template>
  <div>
    <BlogArticleComponent :article="article" v-if="article" />
    <div class="container mx-auto py-10" v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
import BlogArticleComponent from '@/components/article/BlogArticleComponent.vue';

export default {
  name: 'BlogArticleView',
  components: {
    BlogArticleComponent
  },
  data() {
    return {
      article: null,
    };
  },
  created() {
    this.loadArticle();
  },
  mounted() {
    window.scrollTo(0, 0); // Forces the scroll to the top
  },
  watch: {
    '$route.params.id': 'loadArticle',
  },
  methods: {
    loadArticle() {
      const articleId = this.$route.params.id;
      this.article = this.fetchArticleById(articleId);
      if (!this.article) {
        // Handle case when article is not found, like redirecting to a 404 page
        this.$router.push('/not-found');
      }
    },
    fetchArticleById(id) {
      const articles = [
        {
          id: '1',
          title: 'The Benefits of Regular Plumbing Maintenance',
          date: 'JULY 13, 2024',
          image: 'Frame-1.png',
          category: 'Maintenance',
          content: `
            <p>Plumbing issues can be a real nightmare. From leaky faucets to burst pipes, these problems can cause chaos, damage, and disruption to our daily lives. But here's the thing: many of these issues can be prevented with regular plumbing maintenance.</p>
            <p class="pt-6">Think about it, when was the last time you had your plumbing system checked? If you're like most of us, you probably only think about plumbing when something goes wrong. But by then, it's often too late. Water damage, mold growth, and costly repairs can be the result of neglecting your plumbing system.</p>
            <p class="pt-6">Regular plumbing maintenance is like a check-up for your home's plumbing system. It helps identify and fix any potential issues before they become major problems. And trust me, you don't want to be dealing with a flooded kitchen or bathroom in the middle of the night.</p>
            <p class="pt-6">By staying on top of plumbing maintenance, you can save money, reduce stress, and even improve the quality of your water. Plus, a well-maintained plumbing system can boost your property value and appeal to potential buyers if you decide to sell.</p>
            <p class="pt-6">So, what does regular plumbing maintenance entail? It's not rocket science. Just make sure to:</p>
            <ul class="pt-4 pl-5" style="list-style-type: none;">
              <li class="mb-2">- Inspect and clean drains and garbage disposals</li>
              <li class="mb-2">- Check for leaks under sinks, toilets, and around appliances</li>
              <li class="mb-2">- Inspect water heaters and boilers</li>
              <li class="mb-2">- Check water pressure and flow rate</li>
              <li class="mb-2">- Inspect and replace worn-out washers and gaskets</li>
            </ul>
            <p class="pt-6">Don't wait until it's too late! Schedule your regular plumbing maintenance today and enjoy the peace of mind that comes with knowing your plumbing system is in top shape.</p>
          `
        },
        {
          id: '2',
          title: 'Signs Your Home Needs Repiping: What to Look For',
          date: 'JULY 24, 2024',
          image: 'Frame3.png',
          category: 'Maintenance',
          content: `
                    <p>Imagine this: you're relaxing in a hot shower, and suddenly, a geyser erupts from behind the wall. Not exactly the picture of home comfort, right? Unfortunately, this scenario (or variations of it) can become a reality if your home's plumbing system is nearing the end of its lifespan. Here's the thing: pipes, like most things in life, don't last forever.</p>
                    <p class="pt-6">While they silently transport water throughout your home, there are subtle signs that can warn you of potential trouble brewing beneath the surface. Here's how to know if your home might be whispering (or maybe even shouting) that it's time for a repiping:</p>
                    <ul>
                      <p class="pt-6"><strong>The Tell-Tale Signs of Aging Pipes:</strong></p>
                      <li class="mb-2">Discolored Water: Do you notice rusty or brown water coming out of your faucets? This can indicate corrosion within the pipes, contaminating your water supply.</li>
                      <li class="mb-2">Frequent Clogs: While occasional clogs happen, if you're constantly battling blockages, it might be a sign of deteriorating pipes that are flaking or collapsing internally.</li>
                      <li class="mb-2">Fluctuating Water Pressure: Low or inconsistent water pressure throughout your home can point to narrowed pipes due to rust or buildup.</li>
                      <li class="mb-2">Visible Pipe Leaks: This one's fairly obvious. If you see leaks or water damage around pipes, especially near connections, it's a clear sign of deterioration.</li>
                      <li class="mb-2">Unexplained Water Bill Spikes: A sudden increase in your water bill with no apparent change in water usage could be due to hidden leaks caused by compromised pipes.</li>
                    </ul>
                    <p class="pt-6"><strong>Beyond the Physical Signs:</strong></p>
                    <p>Age is also a big factor. If your home was built more than 50 years ago, the pipes could be nearing the end of their expected lifespan, depending on the material. Certain pipe materials, like galvanized steel or polybutylene, have known issues with corrosion and shorter lifespans.</p>
                    <p class="pt-6"><strong>Taking Action:</strong></p>
                    <p>If you're experiencing any of these signs, don't wait for a major plumbing disaster to strike. A qualified plumber can assess your home's plumbing system and recommend the best course of action. Repiping your home might seem like a daunting task, but it's an investment that ensures clean, reliable water flow and peace of mind for years to come. Don’t fail to <span class="text-[#06B6F1]">contact</span> Zyons.</p>`        
        
        },
        {
          id: '3',
          title: 'Top questions to ask when hiring a plumber',
          date: 'AUGUST 1, 2024',
          image: 'Frame-8.png',
          category: 'tips',
          content: `<p>Are you tired of dealing with leaky faucets, clogged drains, and toilets that just won't flush? It's time to call in the professionals! But, with so many plumbers out there, how do you know who to trust?</p>
            <p>Asking the right questions can make all the difference. Here are the top questions to ask when hiring a plumber, so you can avoid getting drained (pun intended)!</p>

            <p><strong>1. What's Your Experience?</strong></p>
            <p>You want a plumber who's seen it all, right? Ask about their experience with jobs like yours. Have they worked on similar issues? How long have they been in the business?</p>

            <p><strong>2. Are You Licensed and Insured?</strong></p>
            <p>Make sure your plumber is properly licensed and insured. This protects you and your home from any potential damage or accidents.</p>

            <p><strong>3. What's Your Approach to Problem-Solving?</strong></p>
            <p>You want a plumber who's going to diagnose the issue correctly and fix it efficiently. Ask about their approach to problem-solving and how they'll communicate with you throughout the process.</p>

            <p><strong>4. Can You Provide References?</strong></p>
            <p>Ask for references from previous customers. This will give you an idea of the plumber's work quality, professionalism, and reliability.</p>

            <p><strong>5. What's the Warranty on Your Work?</strong></p>
            <p>A reputable plumber will stand behind their work. Ask about the warranty they offer and what's covered.</p>

            <p><strong>6. How Will You Protect My Home?</strong></p>
            <p>Your home is your castle, and you want it protected. Ask about the measures the plumber will take to protect your floors, walls, and belongings.</p>

            <p><strong>7. What's the Timeline for Completion?</strong></p>
            <p>Get a clear idea of when the job will start and finish. This will help you plan and avoid any inconvenient surprises.</p>

            <p><strong>8. How Will You Communicate with Me?</strong></p>
            <p>Good communication is key. Ask how the plumber will keep you informed throughout the process and what their response time is for any questions or concerns.</p>

            <p>By asking these questions, you'll be well on your way to finding a trustworthy plumber who'll get the job done right. <span class="text-[#06B6F1]">Contact us!</span></p>
          `
        },
        {
          id: '4',
          title: 'How to choose the best plumbing fixtures for your bathroom remodel',
          date: 'JULY 27, 2024',
          image: 'Frame-8.png',
          category: 'Bathroom',
          content: `
            <p>Imagine stepping into a bathroom that's the epitome of relaxation and style. The perfect plumbing fixtures can make all the difference - but with so many options, where do you start?</p>
            <p>Don't worry, we've got you covered! In this article, we'll dive into the top tips for choosing the best plumbing fixtures for your bathroom remodel.</p>

            <p><strong>Start with Your Style</strong></p>
            <p>Before you begin shopping for plumbing fixtures, think about the style you're aiming for. Do you want a modern and sleek look or a more traditional and classic feel? Consider the color scheme, materials, and overall aesthetic you want to achieve.</p>

            <p><strong>Consider Functionality</strong></p>
            <p>Remember, plumbing fixtures are not just about looks - they also need to be functional. Think about your daily routine and what features are must-haves for you. Do you want a rainfall showerhead or a handheld showerhead? Do you prefer a single-handle faucet or a double-handle faucet?</p>

            <p><strong>Quality Matters</strong></p>
            <p>When it comes to plumbing fixtures, quality is crucial. Look for fixtures made from durable materials that can withstand the test of time. Consider the warranty and customer support offered by the manufacturer.</p>

            <p><strong>Budget-Friendly Options</strong></p>
            <p>You don't have to break the bank to get the best plumbing fixtures. Look for budget-friendly options that still offer great quality and functionality.</p>

            <p><strong>Get Inspired</strong></p>
            <p>Follow designers, architects, and home decor influencers on social media to get inspired by their bathroom remodels. Create a vision board or album to collect your favorite ideas.</p>

            <p>By considering these tips, you'll be well on your way to choosing the best plumbing fixtures for your dream bathroom remodel. Happy renovating!</p>
            `        
        },
        {
          id: '5',
          title: '5 DIY plumbing fixes you can tackle yourself (safely!)',
          date: 'JULY 27, 2024',
          image: 'Frame-7.png',
          category: 'tips',
          content: `
            <p>Hey there, fellow homeowners! Plumbing issues can be a real pain. But, before you call in the professionals, why not try tackling some of these common fixes yourself? Not only will you save some cash, but you'll also feel like a total boss.</p>
            <p>Just remember: safety first!</p>
            <p>Before we dive in, make sure you've got the following essentials:</p>
            <ul class="list-disc pl-5">
              <li>A shut-off wrench (to turn off your water supply)</li>
              <li>Adjustable pliers</li>
              <li>Channel-type pliers (for gripping small objects)</li>
              <li>Teflon tape (for threaded connections)</li>
              <li>A bucket (for catching water)</li>
            </ul>
            <p>Now, onto the fixes!</p>

            <p><strong>1. Fixing a Leaky Faucet</strong></p>
            <p>A leaky faucet is not only annoying, but it's also wasting water. To fix it, simply:</p>
            <ul class="list-disc pl-5">
              <li>Turn off the water supply</li>
              <li>Disassemble the faucet (you might need a screwdriver or Allen wrench)</li>
              <li>Replace the worn-out O-ring or gasket</li>
              <li>Reassemble and voilà!</li>
            </ul>

            <p><strong>2. Unclogging a Drain</strong></p>
            <p>Clogged drains are the worst. But, before you call a plumber, try:</p>
            <ul class="list-disc pl-5">
            <li>Using a plunger (make sure the water level is high enough)</li>
            <li>Using a drain snake (for tougher clogs)</li>
            <li>Baking soda and vinegar (for a natural, non-toxic fix)</li>
          </ul>

          <p><strong>3. Replacing a Toilet Flapper</strong></p>
          <p>A faulty flapper can cause your toilet to run constantly. To replace it:</p>
          <ul class="list-disc pl-5">
            <li>Turn off the water supply</li>
            <li>Drain the tank</li>
            <li>Remove the old flapper</li>
            <li>Install the new one</li>
            <li>Adjust the chain length</li>
          </ul>

          <p><strong>4. Fixing a Loose Toilet Handle</strong></p>
          <p>A loose toilet handle is annoying and can lead to more serious issues. To fix it:</p>
          <ul class="list-disc pl-5">
            <li>Remove the handle</li>
            <li>Tighten the screw or replace the handle if necessary</li>
            <li>Reattach the handle</li>
          </ul>

          <p><strong>5. Patching a Pinhole Leak</strong></p>
          <p>Pinhole leaks can cause serious damage if left unchecked. To patch one:</p>
          <ul class="list-disc pl-5">
            <li>Turn off the water supply</li>
            <li>Drain the affected area</li>
            <li>Clean and dry the area</li>
            <li>Apply epoxy or pipe tape</li>
          </ul>

          <p>There you have it - 5 DIY plumbing fixes you can tackle yourself safely! Just remember to always turn off the water supply and follow proper safety precautions.</p>
          <p>Happy fixing!</p>
          `
        },
        {
          id: '6',
          title: 'How to prevent and clear clogged drains',
          date: 'JULY 27, 2024',
          image: 'Frame-2.png',
          category: 'tips',
          content: `
            <p>Hey there, friends! Let's talk about something that's probably happened to all of us at some point: clogged drains. Ugh, they're the worst! But don't worry, I've got some tips and tricks to share with you on how to prevent them and clear them when they do happen.</p>

            <p><strong>First, let's talk about prevention.</strong> I mean, who doesn't want to avoid dealing with a clogged drain in the first place? Here are some things you can do to keep your drains flowing freely:</p>

            <ul class="pt-4 list-disc pl-5">
              <li>Be mindful of what you put down your drains. No grease, food scraps, or hair, please!</li>
              <li>Run hot water through your drains every now and then to keep things moving.</li>
              <li>Use a drain screen or filter to catch hair and other debris.</li>
              <li>Consider using a natural drain maintenance product to keep things flowing smoothly.</li>
            </ul>

            <p><strong>Now, let's say you do end up with a clog</strong> (because, let's face it, it happens to the best of us). Here's what you can do:</p>

            <ol class="pt-4 list-decimal pl-5">
              <li>Turn off the water supply, pronto! You don't want to make things worse.</li>
              <li>Grab your trusty plunger and get to work. Make sure the water level is high enough, or it won't work.</li>
              <li>If that doesn't do the trick, try using a drain snake. It's like a long, flexible rod that can reach deep into your pipes and break up any clogs.</li>
              <li>If you're feeling fancy, you can try using baking soda and vinegar to clear the clog. It's natural, non-toxic, and actually works pretty well!</li>
              <li>And if all else fails, it's time to call in the professionals. Don't worry, it's not the end of the world!</li>
            </ol>

            <p><strong>So, what are the top three things that clog our drains?</strong> You guessed it:</p>

            <ul class="pt-4 list-disc pl-5">
              <li>Grease and oil</li>
              <li>Hair and soap scum</li>
              <li>Food scraps and debris</li>
            </ul>

            <p>There you have it, friends! With a little prevention and some basic know-how, you can keep your drains flowing freely and avoid the hassle of clogs. Happy draining!</p>
          `
        },
        {
          id: '6',
          title: 'How to prevent and clear clogged drains',
          date: 'JULY 27, 2024',
          image: 'Frame-2.png',
          category: 'Repairs',
          content: `
            <p>Hey there, friends! Let's talk about something that's probably happened to all of us at some point: clogged drains. Ugh, they're the worst! But don't worry, I've got some tips and tricks to share with you on how to prevent them and clear them when they do happen.</p>

            <p><strong>First, let's talk about prevention.</strong> I mean, who doesn't want to avoid dealing with a clogged drain in the first place? Here are some things you can do to keep your drains flowing freely:</p>

            <ul class="pt-4 list-disc pl-5">
              <li>Be mindful of what you put down your drains. No grease, food scraps, or hair, please!</li>
              <li>Run hot water through your drains every now and then to keep things moving.</li>
              <li>Use a drain screen or filter to catch hair and other debris.</li>
              <li>Consider using a natural drain maintenance product to keep things flowing smoothly.</li>
            </ul>

            <p><strong>Now, let's say you do end up with a clog</strong> (because, let's face it, it happens to the best of us). Here's what you can do:</p>

            <ol class="pt-4 list-decimal pl-5">
              <li>Turn off the water supply, pronto! You don't want to make things worse.</li>
              <li>Grab your trusty plunger and get to work. Make sure the water level is high enough, or it won't work.</li>
              <li>If that doesn't do the trick, try using a drain snake. It's like a long, flexible rod that can reach deep into your pipes and break up any clogs.</li>
              <li>If you're feeling fancy, you can try using baking soda and vinegar to clear the clog. It's natural, non-toxic, and actually works pretty well!</li>
              <li>And if all else fails, it's time to call in the professionals. Don't worry, it's not the end of the world!</li>
            </ol>

            <p><strong>So, what are the top three things that clog our drains?</strong> You guessed it:</p>

            <ul class="pt-4 list-disc pl-5">
              <li>Grease and oil</li>
              <li>Hair and soap scum</li>
              <li>Food scraps and debris</li>
            </ul>

            <p>There you have it, friends! With a little prevention and some basic know-how, you can keep your drains flowing freely and avoid the hassle of clogs. Happy draining!</p>
          `
        },
        {
          id: '7',
          title: 'What to expect during a home repiping project',
          date: 'JULY 27, 2024',
          image: 'Frame-4.png',
          category: 'tips',
          content: `
            <p>Hey there, homeowners! Are you tired of dealing with leaky pipes, low water pressure, and rusty water? Well, it might be time to consider a home repiping project. But, what does that even entail? Don't worry, I've got you covered! In this post, we'll walk through what to expect during a home repiping project, so you can be prepared for the process.</p>

            <p><strong>First things first,</strong> a professional plumber will come to your home to assess your plumbing system. They'll take a look at your pipes and figure out what needs to be repaired or replaced. Then, they'll create a plan and give you a detailed estimate of the work that needs to be done.</p>

            <p><strong>Next, the water supply</strong> to your home will be shut off. I know, I know, it sounds scary, but don't worry, it's necessary! You might need to make arrangements for alternative water sources during this time, like filling up some buckets or using a water cooler.</p>

            <p><strong>Now, the fun part</strong> (just kidding, it's not that fun, but it's necessary!): removing the old pipes. This might involve cutting into walls and floors, which can be a bit messy. But hey, it's all part of the process, right?</p>

            <p><strong>After that, the new pipes</strong> will be installed. This is the part where you'll start to see some real progress! The new pipes will be connected to your water heater, fixtures, and appliances, and you'll be one step closer to having a modern, efficient plumbing system.</p>

            <p><strong>Once everything is installed,</strong> the plumber will test the pipes for leaks and proper function. They'll also do a final inspection to make sure everything is up to code and working smoothly.</p>

            <p><strong>Finally, the workspace</strong> will be cleaned up, and any damage to walls and floors will be repaired. Your home will be left in the same condition as before the project, minus the old pipes!</p>

            <p><strong>So, what can you expect during the project?</strong> Well, there will be some noise and disruption to your daily routine, but it's temporary. You might also experience some water shutdowns, mess, and debris, but again, it's temporary!</p>
            `
        },
        {
          id: '8',
          title: 'How repiping can improve your home’s water quality',
          date: 'JULY 27, 2024',
          image: 'Frame-4.png',
          category: 'tips',
          content: `
            <h2>The Hidden Dangers of Old Pipes: How Repiping Can Improve Your Water Quality</h2>

            <p>Have you ever turned on the tap and wondered what's really coming out? If your home has old pipes, the answer might surprise you. Corrosion, scaling, and bacterial growth can all contaminate your water supply, leaving you with a less-than-ideal glass of water.</p>

            <p>But, it's not just about taste. Old pipes can leach chemicals, heavy metals, and bacteria into your water, posing serious health risks. And, if you're like most people, you probably assume that your water is fine - until something goes wrong.</p>

            <p>That's why repiping with modern, high-quality materials is such a game-changer. By replacing your old pipes with new ones, you can significantly reduce the risk of contamination and enjoy cleaner, healthier water for years to come.</p>

            <h3>So, what's involved in repiping?</h3>
            <p>A professional plumber will assess your plumbing system, remove your old pipes, and install new ones made from materials like PEX, copper, or PVC. They'll also update your connections to fixtures and appliances, and test your water quality before and after the job.</p>

            <h3>The benefits are clear:</h3>
            <ul>
              <li>Reduced risk of lead contamination</li>
              <li>Fewer bacteria and viruses</li>
              <li>Improved water taste and odor</li>
              <li>Increased water pressure and flow rate</li>
            </ul>

            <p>And, with a little maintenance, you can keep your water quality top-notch for years to come.</p>

            <p>Don't wait until it's too late - schedule your repiping project today and start enjoying the peace of mind that comes with knowing your water is safe and clean!</p>
            `
        },
        {
          id: '9',
          title: 'Protecting your home from lead contamination',
          date: 'JULY 27, 2024',
          image: 'Frame-6.png',
          category: 'tips',
          content: `
            <h2>Lead Contamination: Let's Talk About It</h2>

            <p>Hey, have you ever worried about lead contamination in your home? I know, it sounds scary, but it's a real issue that can affect your health and your home's value. So, let's dive in and explore what you need to know to protect yourself and your family.</p>

            <h3>What is lead contamination?</h3>
            <p>Basically, it's when lead from old pipes, fixtures, and soldering gets into your water supply. And, if you live in a home built before 1986, you're more likely to have lead lurking in your plumbing.</p>

            <h3>What's the big deal about lead?</h3>
            <p>Well, lead contamination can cause some serious health problems, like brain damage, developmental delays, learning disabilities, and even organ damage. And, let's be real, who wants to risk that?</p>

            <h3>How can you protect your home?</h3>
            <p>Here are some easy steps to take:</p>
            <ol>
              <li><strong>Get your water tested:</strong> Contact a certified lab to check your water for lead levels.</li>
              <li><strong>Replace old pipes and fixtures:</strong> Update your plumbing with lead-free materials like PEX, copper, or PVC.</li>
              <li><strong>Use a water filter:</strong> Install a filter that's certified to remove lead from your water supply.</li>
              <li><strong>Let the water run:</strong> Before drinking, let the water run for 30 seconds to flush out lead particles.</li>
              <li><strong>Maintain your plumbing:</strong> Regularly inspect and maintain your pipes to prevent corrosion.</li>
            </ol>

            <p>By following these simple steps, you can significantly reduce the risk of lead contamination in your home and keep your family safe. Easy peasy!</p>
            `
        },
        // Add more articles here
      ];
      return articles.find(article => article.id === id);
    }
  }
}
</script>

<style scoped>
/* Add any necessary styles here */
</style>
