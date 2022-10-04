import { c as create_ssr_component, e as escape, d as each, f as add_attribute, v as validate_component } from "../../chunks/index.js";
const InterfaceDiagram_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".tooltip.svelte-7v1s3k.svelte-7v1s3k{top:50%;position:fixed;background-color:#F1A5AE;border-radius:5px;color:white;padding:1rem;max-width:20rem}.tooltip.svelte-7v1s3k h4.svelte-7v1s3k{margin-top:0}.tooltip.svelte-7v1s3k p.svelte-7v1s3k{margin-bottom:0}.wrapper.svelte-7v1s3k.svelte-7v1s3k{position:relative}circle.svelte-7v1s3k.svelte-7v1s3k{cursor:pointer}",
  map: null
};
const InterfaceDiagram = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tooltipHeader = "";
  let tooltipMessage = "";
  let left = 0;
  let top = 0;
  $$result.css.add(css$3);
  return `
<div class="${"wrapper svelte-7v1s3k"}"><div class="${"tooltip svelte-7v1s3k"}" style="${escape("display: none", true) + "; top: " + escape(top, true) + "px; left: " + escape(left, true) + "px"}"><h4 class="${"svelte-7v1s3k"}">${escape(tooltipHeader)}</h4>
        <p class="${"svelte-7v1s3k"}">${escape(tooltipMessage)}</p></div>
    <svg height="${"20rem"}" viewBox="${"0 0 500 460"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><g clip-path="${"url(#clip0_7_230)"}"><rect width="${"500"}" height="${"600"}" fill="${"white"}"></rect><rect width="${"500"}" height="${"54"}" fill="${"#1F1F1F"}"></rect><path d="${"M47 48V161M453.5 48V161"}" stroke="${"black"}" stroke-width="${"2"}"></path><rect y="${"79"}" width="${"500"}" height="${"13"}" fill="${"#4F4F4F"}"></rect><rect y="${"117"}" width="${"500"}" height="${"13"}" fill="${"#4F4F4F"}"></rect><rect y="${"136"}" width="${"500"}" height="${"13"}" fill="${"#4F4F4F"}"></rect><rect y="${"155"}" width="${"500"}" height="${"13"}" fill="${"#4F4F4F"}"></rect><path d="${"M476.757 43.9736C476.757 95.4384 478.739 147.444 475.452 198.814C473.061 236.17 468.214 273.278 468.214 310.702C468.214 325.791 467.415 341.953 465.248 356.857C463.647 367.861 463.39 379.098 460.976 389.961C459.221 397.858 457.014 440.15 461.807 440.15"}" stroke="${"black"}" stroke-width="${"3"}" stroke-linecap="${"round"}"></path><path d="${"M462.875 441.218C462.543 444.861 455.269 454.032 463.408 454.032C466.358 454.032 475.363 450.486 471.892 446.023C467.985 441 461.807 440.707 461.807 447.862C461.807 454.55 466.305 456.189 469.519 449.761C470.607 447.585 470.125 443.401 467.739 447.151C466.316 449.387 464.574 458.254 467.68 451.422C468.765 449.035 468.704 444.943 465.07 445.549C463.187 445.863 463.127 452.594 464.476 451.244C471.555 444.165 457.591 444.952 463.705 451.066C468.957 456.318 467.146 433.066 467.146 444.422"}" stroke="${"black"}" stroke-width="${"3"}" stroke-linecap="${"round"}"></path><path d="${"M471.417 251.139C471.417 259.759 468.741 268.794 467.205 277.242C466.176 282.905 467.146 289.707 467.146 295.455C467.146 304.99 468.214 314.146 468.214 323.694C468.214 328.398 469.282 332.856 469.282 337.635C469.282 344.16 469.502 352.106 470.884 358.459C473.1 368.655 469.79 380.894 472.723 390.791C475.123 398.893 473.553 409.206 473.553 417.725C473.553 423.656 474.621 428.978 474.621 434.811C474.621 437.725 475.689 439.504 475.689 442.286C475.689 445.126 473.553 447.143 473.553 449.761"}" stroke="${"black"}" stroke-width="${"3"}" stroke-linecap="${"round"}"></path><path d="${"M465.942 441.686C465.038 441.686 463.968 441.507 463.088 441.702C462.526 441.827 461.902 442.855 461.503 443.255C460.43 444.327 459.633 446.026 459.633 447.544C459.633 452.138 465.464 452.633 468.88 452.501C469.756 452.468 470.892 451.757 471.5 451.149C471.865 450.785 472.252 449.282 472.252 449.797C472.252 451.9 470.373 454.304 468.179 454.304C466.57 454.304 465.298 454.604 463.689 454.604C463.291 454.604 461.86 454.604 462.037 454.604C465.001 454.604 467.798 453.963 470.683 453.336C476.451 452.082 468.23 443.925 466.093 442.737C464.613 441.915 463.621 441.686 461.887 441.686C461.199 441.686 460.603 443.173 460.535 443.789C460.449 444.562 460.139 444.073 460.301 443.488C460.644 442.251 461.857 441.402 462.938 440.851C465.06 439.77 466.639 439.378 468.346 441.085C469.527 442.266 470.731 443.454 471.5 444.84C472.256 446.201 472.852 447.808 472.852 449.363C472.852 452.145 471.748 451.768 469.548 452.501"}" stroke="${"black"}" stroke-width="${"3"}" stroke-linecap="${"round"}"></path><path d="${"M22.5 45V239.5"}" stroke="${"black"}" stroke-width="${"8"}"></path><circle cx="${"34"}" cy="${"208"}" r="${"13"}" fill="${"#B6DDFB"}" class="${"svelte-7v1s3k"}"></circle><circle cx="${"82"}" cy="${"76"}" r="${"13"}" fill="${"#B6DDFB"}" class="${"svelte-7v1s3k"}"></circle><circle cx="${"263"}" cy="${"27"}" r="${"13"}" fill="${"#B6DDFB"}" class="${"svelte-7v1s3k"}"></circle><circle cx="${"466"}" cy="${"287"}" r="${"13"}" fill="${"#B6DDFB"}" class="${"svelte-7v1s3k"}"></circle></g><defs><clipPath id="${"clip0_7_230"}"><rect width="${"500"}" height="${"600"}" fill="${"white"}"></rect></clipPath></defs></svg>
</div>`;
});
const Timeline_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".wrapper.svelte-xrg9cj.svelte-xrg9cj{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:4rem}.inner-wrapper.svelte-xrg9cj.svelte-xrg9cj{position:relative;height:40rem;display:grid;grid-template-columns:1fr;grid-template-rows:1fr;align-items:center;justify-items:center}.inner-wrapper.svelte-xrg9cj div.svelte-xrg9cj{display:flex;flex-direction:column;justify-content:center;align-items:center;grid-column:1;grid-row:1}.inner-wrapper.svelte-xrg9cj p.svelte-xrg9cj{background-color:#B6DDFB;border-radius:5px;padding:0.5rem 0.3rem}.arrow.svelte-xrg9cj.svelte-xrg9cj{cursor:pointer;width:4rem}",
  map: null
};
const Timeline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { images } = $$props;
  let i = 0;
  if ($$props.images === void 0 && $$bindings.images && images !== void 0)
    $$bindings.images(images);
  $$result.css.add(css$2);
  return `<div class="${"wrapper svelte-xrg9cj"}"><div class="${"arrow svelte-xrg9cj"}"><svg clip-rule="${"evenodd"}" fill-rule="${"evenodd"}" stroke-linejoin="${"round"}" stroke-miterlimit="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"m10.978 14.999v3.251c0 .412-.335.75-.752.75-.188 0-.375-.071-.518-.206-1.775-1.685-4.945-4.692-6.396-6.069-.2-.189-.312-.452-.312-.725 0-.274.112-.536.312-.725 1.451-1.377 4.621-4.385 6.396-6.068.143-.136.33-.207.518-.207.417 0 .752.337.752.75v3.251h9.02c.531 0 1.002.47 1.002 1v3.998c0 .53-.471 1-1.002 1z"}" fill-rule="${"nonzero"}"></path></svg></div>
    <div class="${"inner-wrapper svelte-xrg9cj"}">${each(images, (image, index) => {
    return `${index === i ? `<div class="${"svelte-xrg9cj"}"><p class="${"svelte-xrg9cj"}"><!-- HTML_TAG_START -->${`${image.description}`}<!-- HTML_TAG_END --></p>
                    <img${add_attribute("src", image.url, 0)}${add_attribute("alt", image.url, 0)} class="${"svelte-xrg9cj"}">
                </div>` : ``}`;
  })}</div>
    <div class="${"arrow svelte-xrg9cj"}"><svg clip-rule="${"evenodd"}" fill-rule="${"evenodd"}" stroke-linejoin="${"round"}" stroke-miterlimit="${"2"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"m13.022 14.999v3.251c0 .412.335.75.752.75.188 0 .375-.071.518-.206 1.775-1.685 4.945-4.692 6.396-6.069.2-.189.312-.452.312-.725 0-.274-.112-.536-.312-.725-1.451-1.377-4.621-4.385-6.396-6.068-.143-.136-.33-.207-.518-.207-.417 0-.752.337-.752.75v3.251h-9.02c-.531 0-1.002.47-1.002 1v3.998c0 .53.471 1 1.002 1z"}" fill-rule="${"nonzero"}"></path></svg></div>
</div>`;
});
const Panel_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".panel-container.svelte-1o7dyl4{background-color:white;border-radius:5px;box-shadow:2px 2px 2px 2px #9f9f9f;max-width:20rem;padding:1rem}",
  map: null
};
const Panel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { header } = $$props;
  let { content } = $$props;
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  $$result.css.add(css$1);
  return `<div class="${"panel-container svelte-1o7dyl4"}"><h3>${escape(header)}</h3>
    <p>${escape(content)}</p>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-bwh0br{width:100%;padding:0 5rem}.observations-container.svelte-bwh0br{display:flex;gap:1rem;flex-wrap:wrap}summary.svelte-bwh0br{margin-bottom:1rem;cursor:pointer}.flex.svelte-bwh0br{display:flex}.justify-center.svelte-bwh0br{justify-content:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"container svelte-bwh0br"}"><header><h1>Personas</h1>
        <h2>A UI/UX Journey \u{1F929}</h2>
        <p>This page explores the challenges faced by users of Venetian blinds, specifically in trying to adjust them to
            the
            desired height or rotation.</p></header>
    <main><hr>
        <h2>Venetial Blinds Interface \u{1F31E}\u{1F31A}</h2>
        <p><b>Description:</b> Venetion blinds are a type of curtain with horizontal slats that can be rotated to let
            more or less light in. The blinds can also be lowered or raised to cover more or less of the window.</p>
        <p><em>Hover over the blue circles below to explore the interface&#39;s features.</em></p>
        <div class="${"flex justify-center svelte-bwh0br"}">${validate_component(InterfaceDiagram, "InterfaceDiagram").$$render($$result, {}, {}, {})}</div>
        <hr>
        <h2>User Observations and Interviews \u{1F50D}</h2>
        <p>I observed multiple users (around 6) use the interface over the course of multiple visits to the site. I
            interviewed three to get more insight into their experience.</p>
        <h3>General Observations</h3>
        <div class="${"observations-container svelte-bwh0br"}">${validate_component(Panel, "Panel").$$render(
    $$result,
    {
      header: "Experienced \u{1F52C}",
      content: "Most users went straight for the pull cord, and most seemed to know to pull it to the side to release\n                it."
    },
    {},
    {}
  )}
            ${validate_component(Panel, "Panel").$$render(
    $$result,
    {
      header: "Slat Trouble \u2696\uFE0F",
      content: "Multiple users turned the slat adjustment rod one way, then, once the slats started to turn (after the\n                delay), would turn it back the other way."
    },
    {},
    {}
  )}
            ${validate_component(Panel, "Panel").$$render(
    $$result,
    {
      header: "Pull Cord Ignorance \u{1F9D0}",
      content: "No user separated the pull cord to tilt the blinds to one side or the other."
    },
    {},
    {}
  )}
            ${validate_component(Panel, "Panel").$$render(
    $$result,
    {
      header: "Adjustment Struggle \u{1F4AA}\u{1F3FB}\u{1F4AA}\u{1F3FD}\u{1F4AA}\u{1F3FF}",
      content: "Many users struggled to get the blinds to stop at the right spot, having to adjust it multiple times."
    },
    {},
    {}
  )}</div>
        <h3>Interview Questions and Results</h3>
        <details><summary class="${"svelte-bwh0br"}">Do you have experience with this type of curtain?</summary>
            <ul><li>All had a lot of experience
                </li>
                <li>All noted that they have negative feelings toward this kind of curtain, find it confusing and
                    unpredictable
                </li></ul></details>
        <details><summary class="${"svelte-bwh0br"}">What was your goal in using the blinds? What did you want to change/affect about the situation you
                were
                in?
            </summary>
            <ul><li>Two wanted to let a bit more sunlight into the room to brighten the mood a bit. The blinds were
                    fully lowered, with slats mostly rotated down.
                </li>
                <li>The other wanted to block out all of the sunlight, since it was low, glaring, and too hot on
                    their neck. The blinds were a quarter down, with slats horizontal.
                </li></ul></details>
        <details><summary class="${"svelte-bwh0br"}">When you decided to adjust the blinds, what specific actions did you plan to perform? Which parts
                of the
                blinds did you plan to perform those actions with?
            </summary>
            <ul><li>All had used the interface before, so they knew that to adjust height, they should use the cord,
                    and to adjust slat tilt, they should twist the rod.
                </li>
                <li>One had forgotten that they needed to pull the cord to the side, so they got frustrated trying
                    to pull the cord straight down, which did nothing.
                </li></ul></details>
        <details><summary class="${"svelte-bwh0br"}">What kinds of feedback did you get from the blinds as you adjusted them? Describe the visual,
                tactile,
                and other sensory cues you received. How did you change your adjustments based on that feedback?
            </summary>
            <ul><li>After some initial confusion about the question, the users emphasized different things, but
                    these were the common themes:
                    <ul><li>Increased resistance while turning the rod to indicate that the slats cannot be adjusted
                            any further.
                        </li>
                        <li>One person noted that they had no way of knowing which way to turn the rod to get the
                            slats to rotate in the desired direction.
                        </li>
                        <li>Changes in resistance from the cord depending on if it\u2019s in the correct position for
                            raising or lowering. Two users noted that it was difficult to tell when the resistance
                            was due to the blinds\u2019 stopping mechanism and when it was due to the weight of the
                            blinds themselves.
                        </li>
                        <li>The users thought it was obvious, but the actual level of the blinds from the window
                            sill told them when to stop raising or lowering them. However, they all noted that it
                            was hard to stop the blinds at a precise level, since moving the cord to the vertical
                            position often involved accidentally changing the height of the blinds.
                        </li></ul></li></ul></details>
        <details><summary class="${"svelte-bwh0br"}">How many different adjustments did you have to make before achieving the desired result?</summary>
            <ul><li>All users said they only had to make a few adjustments, but talked about many times they\u2019ve had
                    frustrations with blinds like these
                </li></ul></details>
        <hr>
        <h2>User Archetypes (Personas) \u{1F451}</h2>
        <p>Click the arrows to switch between the two personas.</p>
        ${validate_component(Timeline, "Timeline").$$render(
    $$result,
    {
      images: [
        {
          description: "<b>Denice</b> represents a common use case of Venetian blinds: trying to block out external distractions.",
          url: "src/images/distracted_denice.svg"
        },
        {
          description: "<b>Daniel</b> also represents a common use case: needing to block out as much light as possible.",
          url: "src/images/dark_daniel.svg"
        }
      ]
    },
    {},
    {}
  )}
        <hr>
        <h2>Storyboard \u{1F3A8}</h2>
        <p>To better understand the user experience, I created a storyboard of an imaginary scenario involving one of
            our archetypal users, in this case Distracted Denice. Click the arrows the navigate through her story!</p>
        ${validate_component(Timeline, "Timeline").$$render(
    $$result,
    {
      images: [
        {
          description: "",
          url: "src/images/frame_1.svg"
        },
        {
          description: "",
          url: "src/images/frame_2.svg"
        },
        {
          description: "",
          url: "src/images/frame_3.svg"
        },
        {
          description: "",
          url: "src/images/frame_4.svg"
        },
        {
          description: "",
          url: "src/images/frame_5.svg"
        },
        {
          description: "",
          url: "src/images/frame_6.svg"
        },
        {
          description: "",
          url: "src/images/frame_7.svg"
        },
        {
          description: "",
          url: "src/images/frame_8.svg"
        }
      ]
    },
    {},
    {}
  )}</main>
    <footer></footer>
</div>`;
});
export {
  Page as default
};
