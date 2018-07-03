<template>
    <div id="floattube">
        <div id="video-input">
            <button @click="">Home</button>
            <input type="text" v-model="url">
            <button @click="">Settings</button>
            <button @click="change">Watch</button>
        </div>
        <div id="player">
            <div class="vid-wrapper">
                <youtube class="floattube-video"
                         :video-id="vid"
                         :player-vars="config"></youtube>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Player',

        data() {
            return {
                url: 'https://youtube.com/',
                vid: '',
                config: {
                    autoplay: 0,
                }
            }
        },

        methods: {
            ready (event) {
                this.player = event.player
            },
            playing (event) {
                // The player is playing a video.
            },
            change () {
                // when you change the value, the player will also change.
                // If you would like to change `playerVars`, please change it before you change `videoId`.
                // If `playerVars.autoplay` is 1, `loadVideoById` will be called.
                // If `playerVars.autoplay` is 0, `cueVideoById` will be called.
                this.vid = this.id;
            },
            stop () {
                this.player.stopVideo()
            },
            pause () {
                this.player.pauseVideo()
            }
        },

        computed: {
            id() {
                const pattern = /(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|(?:embed|v)\/))([^\?&"'>]+)/;
                let results = this.url.match(pattern)[1];
                return results ? results : '';
            }
        },

        created() {
            this.config.autoplay = 1;
        },
    }
</script>

<style lang="scss">
    #video-input {
        padding: 0 .25rem;
        height: 2.5rem;
        display: flex;
        align-items: center;

        > * {
            margin: 0 .25rem;
        }

        input {
            flex-grow: 1;
        }
    }

    #player {
        display: flex;
        justify-content: center;
        background: black;

        .vid-wrapper {
            width: 100%;
            max-width: calc(177.75vh -  4.5rem);
        }
    }

    .floattube-video {
        position: relative;
        padding-bottom: 56.25%; /* 16:9 */
        height: 0;

        iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }
</style>
