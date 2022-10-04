<script lang="ts">
  import InterfaceDiagram from "../lib/InterfaceDiagram.svelte";
  import Timeline from "../lib/Timeline.svelte";
  import Panel from "../lib/Panel.svelte";
</script>

<div class="container">
    <header>
        <h1>Personas</h1>
        <h2>A UI/UX Journey 🤩</h2>
        <p>This page explores the challenges faced by users of Venetian blinds, specifically in trying to adjust them to
            the
            desired height or rotation.</p>
    </header>
    <main>
        <hr>
        <h2>Venetial Blinds Interface 🌞🌚</h2>
        <p><b>Description:</b> Venetion blinds are a type of curtain with horizontal slats that can be rotated to let
            more or less light in. The blinds can also be lowered or raised to cover more or less of the window.</p>
        <p><em>Hover over the blue circles below to explore the interface's features.</em></p>
        <div class="flex justify-center">
            <InterfaceDiagram/>
        </div>
        <hr>
        <h2>User Observations and Interviews 🔍</h2>
        <p>I observed multiple users (around 6) use the interface over the course of multiple visits to the site. I
            interviewed three to get more insight into their experience.</p>
        <h3>General Observations</h3>
        <div class="observations-container">
            <Panel header="Experienced 🔬" content="Most users went straight for the pull cord, and most seemed to know to pull it to the side to release
                it."/>
            <Panel header="Slat Trouble ⚖️" content="Multiple users turned the slat adjustment rod one way, then, once the slats started to turn (after the
                delay), would turn it back the other way."/>
            <Panel header="Pull Cord Ignorance 🧐"
                   content="No user separated the pull cord to tilt the blinds to one side or the other."/>
            <Panel header="Adjustment Struggle 💪🏻💪🏽💪🏿"
                   content="Many users struggled to get the blinds to stop at the right spot, having to adjust it multiple times."/>
        </div>
        <h3>Interview Questions and Results</h3>
        <details>
            <summary>Do you have experience with this type of curtain?</summary>
            <ul>
                <li>
                    All had a lot of experience
                </li>
                <li>
                    All noted that they have negative feelings toward this kind of curtain, find it confusing and
                    unpredictable
                </li>
            </ul>
        </details>
        <details>
            <summary>What was your goal in using the blinds? What did you want to change/affect about the situation you
                were
                in?
            </summary>
            <ul>
                <li>
                    Two wanted to let a bit more sunlight into the room to brighten the mood a bit. The blinds were
                    fully lowered, with slats mostly rotated down.
                </li>
                <li>
                    The other wanted to block out all of the sunlight, since it was low, glaring, and too hot on
                    their neck. The blinds were a quarter down, with slats horizontal.
                </li>
            </ul>
        </details>
        <details>
            <summary>When you decided to adjust the blinds, what specific actions did you plan to perform? Which parts
                of the
                blinds did you plan to perform those actions with?
            </summary>
            <ul>
                <li>
                    All had used the interface before, so they knew that to adjust height, they should use the cord,
                    and to adjust slat tilt, they should twist the rod.
                </li>
                <li>
                    One had forgotten that they needed to pull the cord to the side, so they got frustrated trying
                    to pull the cord straight down, which did nothing.
                </li>
            </ul>
        </details>
        <details>
            <summary>What kinds of feedback did you get from the blinds as you adjusted them? Describe the visual,
                tactile,
                and other sensory cues you received. How did you change your adjustments based on that feedback?
            </summary>
            <ul>
                <li>
                    After some initial confusion about the question, the users emphasized different things, but
                    these were the common themes:
                    <ul>
                        <li>
                            Increased resistance while turning the rod to indicate that the slats cannot be adjusted
                            any further.
                        </li>
                        <li>
                            One person noted that they had no way of knowing which way to turn the rod to get the
                            slats to rotate in the desired direction.
                        </li>
                        <li>
                            Changes in resistance from the cord depending on if it’s in the correct position for
                            raising or lowering. Two users noted that it was difficult to tell when the resistance
                            was due to the blinds’ stopping mechanism and when it was due to the weight of the
                            blinds themselves.
                        </li>
                        <li>
                            The users thought it was obvious, but the actual level of the blinds from the window
                            sill told them when to stop raising or lowering them. However, they all noted that it
                            was hard to stop the blinds at a precise level, since moving the cord to the vertical
                            position often involved accidentally changing the height of the blinds.
                        </li>
                    </ul>
                </li>
            </ul>
        </details>
        <details>
            <summary>How many different adjustments did you have to make before achieving the desired result?</summary>
            <ul>
                <li>
                    All users said they only had to make a few adjustments, but talked about many times they’ve had
                    frustrations with blinds like these
                </li>
            </ul>
        </details>
        <hr>
        <h2>User Archetypes (Personas) 👑</h2>
        <p>Click the arrows to switch between the two personas.</p>
        <Timeline
                images={[{description: "<b>Denice</b> represents a common use case of Venetian blinds: trying to block out external distractions.",
                url: "static/distracted_denice.svg"}, {description: "<b>Daniel</b> also represents a common use case: needing to block out as much light as possible.", url: "static/dark_daniel.svg"}]}/>
        <hr>
        <h2>Storyboard 🎨</h2>
        <p>To better understand the user experience, I created a storyboard of an imaginary scenario involving one of
            our archetypal users, in this case Distracted Denice. Click the arrows the navigate through her story!</p>
        <Timeline
                images={[{description: "", url: "static/frame_1.svg"}, {description: "", url: "static/frame_2.svg"}, {description: "", url: "static/frame_3.svg"}, {description: "", url: "static/frame_4.svg"}, {description: "", url: "static/frame_5.svg"}, {description: "", url: "static/frame_6.svg"}, {description: "", url: "static/frame_7.svg"}, {description: "", url: "static/frame_8.svg"}]}/>
    </main>
    <footer>

    </footer>
</div>

<style>
    .container {
        width: 100%;
        padding: 0 5rem;
    }

    .observations-container {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
    }

    summary {
        margin-bottom: 1rem;
        cursor: pointer;
    }

    .flex {
        display: flex;
    }

    .justify-center {
        justify-content: center;
    }
</style>