<template>
<div v-if="currentItem != null">
    <div class="col-md-1">
        <div class="news-chevron" v-if="showCheveronLeft">
            <img src="/assets/img/chevron-icons/left-chevron.png" alt="chevron-left" />
        </div>
    </div>
    <div  class="col-md-10 bottom-align-text">
        <div>                
            <h1><a :href="currentItem.link">{{currentItem.title}}</a></h1>                                        
            <p v-html="currentItem.content"></p>           
        </div>
    </div>
    <div class="col-md-1">
        <div class="news-chevron" v-if="showCheveronRight">
            <img src="/assets/img/chevron-icons/right-chevron.png" alt="chevron-right" />
        </div>				    	
    </div>
</div>    
</template>

<script>
import axios from 'axios';

export default {    
    name:"Feed",
    props:["config"],
    data () {
        return {
            feed: [],
            currentItem: null,
            showCheveronLeft: false,
            showCheveronRight: true,
            itemIndex: 0
        }
    },    
    mounted () {
        this.retrieveNews();
        this.update();
    },
    methods: {
        retrieveNews() {
            axios
            .get('https://api.rss2json.com/v1/api.json?rss_url=' + this.config.newsFeedRssUrl[0])
            .then(response => {
                this.feed = response.data.items;
                this.currentItem = this.feed[0];
                this.itemIndex = 0;
            })
        },
        update () {
            this.updating = setInterval(() => {
                this.itemIndex = this.itemIndex == this.feed.length-1 ? 0 : this.itemIndex;
                this.currentItem = this.feed.length > 0 ? this.feed[this.itemIndex++] : null;                                
            }, 10000 );
        }
    }
}
</script>

<style scoped>

</style>
