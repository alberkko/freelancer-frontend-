  <template>
  <div class="md:w-1/2 lg:w-1/2 xl:w-1/3">
    <div class="bg-white shadow sm:rounded-lg mb-4 mx-2 relative">
      <div class="flex right-0 absolute">
        <div>
          <svg
            width="58"
            height="58"
            viewBox="0 0 58 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="cursor-pointer"
          >
            <g filter="url(#filter0_d)">
              <circle cx="29" cy="29" r="19" fill="#0046AA" />
            </g>
            <path
              d="M38.1668 24.6368C38.1675 24.5162 38.1444 24.3966 38.0987 24.2849C38.0531 24.1732 37.9859 24.0717 37.9009 23.986L34.0143 20.0993C33.9286 20.0144 33.827 19.9472 33.7154 19.9016C33.6037 19.8559 33.4841 19.8328 33.3634 19.8335C33.2428 19.8328 33.1232 19.8559 33.0115 19.9016C32.8998 19.9472 32.7983 20.0144 32.7126 20.0993L30.1185 22.6935L20.0993 32.7127C20.0143 32.7983 19.9471 32.8999 19.9015 33.0116C19.8559 33.1233 19.8328 33.2429 19.8335 33.3635V37.2502C19.8335 37.4933 19.93 37.7264 20.1019 37.8984C20.2738 38.0703 20.507 38.1668 20.7501 38.1668H24.6368C24.765 38.1738 24.8934 38.1538 25.0134 38.108C25.1334 38.0622 25.2424 37.9917 25.3334 37.901L35.2976 27.8818L37.9009 25.3335C37.9846 25.2447 38.0528 25.1424 38.1026 25.031C38.1114 24.9579 38.1114 24.8841 38.1026 24.811C38.1069 24.7683 38.1069 24.7253 38.1026 24.6827L38.1668 24.6368ZM24.2609 36.3335H21.6668V33.7393L30.7693 24.6368L33.3634 27.231L24.2609 36.3335ZM34.6559 25.9385L32.0618 23.3443L33.3634 22.0518L35.9484 24.6368L34.6559 25.9385Z"
              fill="white"
            />
            <defs>
              <filter
                id="filter0_d"
                x="0"
                y="0"
                width="58"
                height="58"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="5" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div class="px-4 py-5 sm:p-6">
        <p class="text-xs leading-6 font-medium text-gray-400">
          2 Days Ago
          <span class="font-bold px-1">•</span>
          <span class="font-bold text-green-500">OPEN</span>
        </p>
        <h3
          class="text-lg leading-6 font-bold text-gray-900 mb-3"
        >Wordpress developer needed to make a simple 5-pages</h3>
        <ProjectCardSkillsList />
        <div class="mt-0 mb-0 max-w-xl text-sm leading-5 text-gray-500">
          <p>We need to create a simple website (15 pages approx) for our online store for watches and accessories. You will be provided with all the necessary information and docs.</p>
        </div>
      </div>
      <div class="bottom-0">
        <div class="w-full bg-blue-800 rounded-md rounded-t-none flex justify-between h-16">
          <button
            type="button"
            class="justify-center rounded-md rounded-t-none rounded-r-none bg-blue-700 w-8/12"
          >
            <span class="font-bold text-2xl text-white sm:text-2xl sm:leading-5">€100 - €250</span>
          </button>
          <button
            type="button"
            class="uppercase px-4 py-2 text-sm rounded-md rounded-t-none rounded-l-none text-white bg-blue-800 w-4/12"
          >
            <div class="flex justify-center">
              <div class="flex flex-col w-auto">
                <div class="flex flex-row items-baseline">
                  <div class="text-3xl font-bold text-white">15</div>
                  <div class="text-xs bids-top-text-edit text-white text-left -mb-2">Bids</div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {};
</script>

<style>
.rating {
  padding-top: 4px;
}

.bids-top-text {
  font-size: 0.6em !important;
}

.bids-top-text-edit {
  font-size: 0.8em !important;
}
</style>