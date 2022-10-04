<script lang="ts">
  let showToolTip = false;
  let tooltipHeader = "";
  let tooltipMessage = "";

  let left = 0;
  let top = 0;
  let frozen = false;
</script>

<svelte:window on:mousemove={(event) => {
  if (!frozen) {
		left = event.clientX + 10;
		top = event.clientY + 10;
  }
	}}/>
<div class="wrapper">
    <div class="tooltip" style="{showToolTip ? 'display: block' : 'display: none'}; top: {top}px; left: {left}px">
        <h4>{tooltipHeader}</h4>
        <p>{tooltipMessage}</p>
    </div>
    <svg height="20rem" viewBox="0 0 500 460" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_7_230)">
            <rect width="500" height="600" fill="white"/>
            <rect width="500" height="54" fill="#1F1F1F"/>
            <path d="M47 48V161M453.5 48V161" stroke="black" stroke-width="2"/>
            <rect y="79" width="500" height="13" fill="#4F4F4F"/>
            <rect y="117" width="500" height="13" fill="#4F4F4F"/>
            <rect y="136" width="500" height="13" fill="#4F4F4F"/>
            <rect y="155" width="500" height="13" fill="#4F4F4F"/>
            <path d="M476.757 43.9736C476.757 95.4384 478.739 147.444 475.452 198.814C473.061 236.17 468.214 273.278 468.214 310.702C468.214 325.791 467.415 341.953 465.248 356.857C463.647 367.861 463.39 379.098 460.976 389.961C459.221 397.858 457.014 440.15 461.807 440.15"
                  stroke="black" stroke-width="3" stroke-linecap="round"/>
            <path d="M462.875 441.218C462.543 444.861 455.269 454.032 463.408 454.032C466.358 454.032 475.363 450.486 471.892 446.023C467.985 441 461.807 440.707 461.807 447.862C461.807 454.55 466.305 456.189 469.519 449.761C470.607 447.585 470.125 443.401 467.739 447.151C466.316 449.387 464.574 458.254 467.68 451.422C468.765 449.035 468.704 444.943 465.07 445.549C463.187 445.863 463.127 452.594 464.476 451.244C471.555 444.165 457.591 444.952 463.705 451.066C468.957 456.318 467.146 433.066 467.146 444.422"
                  stroke="black" stroke-width="3" stroke-linecap="round"/>
            <path d="M471.417 251.139C471.417 259.759 468.741 268.794 467.205 277.242C466.176 282.905 467.146 289.707 467.146 295.455C467.146 304.99 468.214 314.146 468.214 323.694C468.214 328.398 469.282 332.856 469.282 337.635C469.282 344.16 469.502 352.106 470.884 358.459C473.1 368.655 469.79 380.894 472.723 390.791C475.123 398.893 473.553 409.206 473.553 417.725C473.553 423.656 474.621 428.978 474.621 434.811C474.621 437.725 475.689 439.504 475.689 442.286C475.689 445.126 473.553 447.143 473.553 449.761"
                  stroke="black" stroke-width="3" stroke-linecap="round"/>
            <path d="M465.942 441.686C465.038 441.686 463.968 441.507 463.088 441.702C462.526 441.827 461.902 442.855 461.503 443.255C460.43 444.327 459.633 446.026 459.633 447.544C459.633 452.138 465.464 452.633 468.88 452.501C469.756 452.468 470.892 451.757 471.5 451.149C471.865 450.785 472.252 449.282 472.252 449.797C472.252 451.9 470.373 454.304 468.179 454.304C466.57 454.304 465.298 454.604 463.689 454.604C463.291 454.604 461.86 454.604 462.037 454.604C465.001 454.604 467.798 453.963 470.683 453.336C476.451 452.082 468.23 443.925 466.093 442.737C464.613 441.915 463.621 441.686 461.887 441.686C461.199 441.686 460.603 443.173 460.535 443.789C460.449 444.562 460.139 444.073 460.301 443.488C460.644 442.251 461.857 441.402 462.938 440.851C465.06 439.77 466.639 439.378 468.346 441.085C469.527 442.266 470.731 443.454 471.5 444.84C472.256 446.201 472.852 447.808 472.852 449.363C472.852 452.145 471.748 451.768 469.548 452.501"
                  stroke="black" stroke-width="3" stroke-linecap="round"/>
            <path d="M22.5 45V239.5" stroke="black" stroke-width="8"/>
            <!-- Rod -->
            <circle cx="34" cy="208" r="13" fill="#B6DDFB" on:mouseover={() => {
              showToolTip = true
              tooltipHeader = "Slat Adjustment Rod"
              tooltipMessage = "Twisting this adjusts the tilt of the slats"
            }}
                    on:mouseleave={() => showToolTip = false}/>
            <!-- Slat -->
            <circle cx="82" cy="76" r="13" fill="#B6DDFB" on:mouseover={() => {
              showToolTip = true
              tooltipHeader = "Slats"
              tooltipMessage = "Plastic or metal sheets that rotate to block sunlight"
            }}
                    on:mouseleave={() => showToolTip = false}/>
            <!-- Base -->
            <circle cx="263" cy="27" r="13" fill="#B6DDFB" on:mouseover={() => {
              showToolTip = true
              tooltipHeader = "Base"
              tooltipMessage = "The base of the blinds, which the slats hang from"
            }}
                    on:mouseleave={() => showToolTip = false}/>
            <!-- Cord -->
            <circle cx="466" cy="287" r="13" fill="#B6DDFB" on:mouseover={() => {
              showToolTip = true
              tooltipHeader = "Pull Cord"
              tooltipMessage = "Pulling this to the side releases the blind and allows them to be raised or lowered; two separate cords tilt the blinds to the right or left"
            }}
                    on:mouseleave={() => showToolTip = false}/>
        </g>
        <defs>
            <clipPath id="clip0_7_230">
                <rect width="500" height="600" fill="white"/>
            </clipPath>
        </defs>
    </svg>
</div>

<style>
    .tooltip {
        top: 50%;
        position: fixed;
        background-color: #F1A5AE;
        border-radius: 5px;
        color: white;
        padding: 1rem;
        max-width: 20rem;
        /*display: none;*/
    }

    .tooltip h4 {
        margin-top: 0;
    }

    .tooltip p {
        margin-bottom: 0;
    }

    .wrapper {
        position: relative;
    }

    circle {
        cursor: pointer;
    }
</style>
