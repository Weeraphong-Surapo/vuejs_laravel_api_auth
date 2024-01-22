<template>
    <div class="container mx-auto px-4">
        <div class="box-center">


            <div
                class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div class="flex items-center justify-between mb-4">
                    <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">All Contact</h5>
                    <router-link :to="{name:'home'}" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                        View all
                    </router-link>
                </div>
                <div class="flow-root">
                    <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                        <li class="py-3 sm:py-4">
                            <div class="flex items-center">
                                <div class="flex-shrink-0">
                                    <img class="w-8 h-8 rounded-full"
                                        src="/logo.jpg" alt="Neil image">
                                </div>
                                <div class="flex-1 min-w-0 ms-4">
                                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        FaceBook Fanpage
                                    </p>
                                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                        รับเขียนเว็บไซต์ เว็บแอพลิเคชั่น รับทำโปรเจ็ค
                                    </p>
                                </div>
                                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    <a href="https://web.facebook.com/profile.php?id=61554278654925" tabindex="_blank"
                                        class="hover:underline ">Click
                                        Here</a>
                                </div>
                            </div>
                        </li>
                        <li class="py-3 sm:py-4">
                            <div class="flex items-center ">
                                <div class="flex-shrink-0">
                                    <img class="w-8 h-8 rounded-full"
                                        src="/line.png"
                                        alt="Bonnie image">
                                </div>
                                <div class="flex-1 min-w-0 ms-4">
                                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        Line
                                    </p>
                                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                        รับเขียนเว็บไซต์
                                    </p>
                                </div>
                                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    <a href="https://lin.ee/VTHxAai" target="_blank" class="hover:underline ">Click Here</a>
                                </div>
                            </div>
                        </li>
                        <li class="py-3 sm:py-4">
                            <div class="flex items-center">
                                <div class="flex-shrink-0">
                                    <img class="w-8 h-8 rounded-full"
                                        src="https://img2.pic.in.th/pic/359361810_100328683134007_3868541565453049336_n.jpeg" style="object-fit: cover;"
                                        alt="Michael image">
                                </div>
                                <div class="flex-1 min-w-0 ms-4">
                                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        FackBook Private
                                    </p>
                                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                        Weeraphong Surapho
                                    </p>
                                </div>
                                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    <a href="https://web.facebook.com/profile.php?id=100094706250539" target="_blnk"
                                        class="hover:underline ">Click Here</a>
                                </div>
                            </div>
                        </li>
                        <li class="py-3 sm:py-4">
                            <div class="flex items-center ">
                                <div class="flex-shrink-0">
                                    <img class="w-8 h-8 rounded-full"
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
                                        alt="Lana image">
                                </div>
                                <div class="flex-1 min-w-0 ms-4">
                                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        Instagram
                                    </p>
                                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                        wxxra.p___g
                                    </p>
                                </div>
                                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    <a href="https://www.instagram.com/wxxra.p___g/" target="_blank"
                                        class="hover:underline ">Click Here</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.box-center {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}</style>