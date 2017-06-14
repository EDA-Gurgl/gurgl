# API

## Giphy Search API

|Method|EndPoint|Return|
|-|-|-|
|GET |http://api.giphy.com/v1/gifs/translate| JSON |

Example of Query

`http://api.giphy.com/v1/gifs/translate?s=superman&api_key=dc6zaTOxFJmzC`

Parameters

* s - term or phrase to translate into a GIF
* rating - (optional) limit results to those rated (y,g, pg, pg-13 or r).
* lang - (optional) specify default country for regional content; format is 2-letter ISO 639-1 country code. See list of supported langauges here
* fmt - (optional) return results in html or json format (useful for viewing responses as GIFs to debug/test)


Sample Response

`{

    "data": {
        type: "gif",
		id: "wWAIKcFASEFz2",
	    slug: "superman-santa-chandler-bing-wWAIKcFASEFz2",
		url: "http://giphy.com/gifs/superman-santa-chandler-bing-wWAIKcFASEFz2",
		bitly_gif_url: "http://gph.is/XMD6gE",
		bitly_url: "http://gph.is/XMD6gE",
		embed_url: "http://giphy.com/embed/wWAIKcFASEFz2",
		username: "",
		source: "http://daytripperrevolution.tumblr.com/post/13729531842",
		rating: "g",
		caption: "",
		content_url: "",
		source_tld: "daytripperrevolution.tumblr.com",
		source_post_url: "http://daytripperrevolution.tumblr.com/post/13729531842",
		import_datetime: "2013-03-24 17:48:35",
		trending_datetime: "1970-01-01 00:00:00",
		images: {
			fixed_height: {
				url: "http://media3.giphy.com/media/wWAIKcFASEFz2/200.gif",
				width: "358",
				height: "200",
				size: "126220",
				mp4: "http://media2.giphy.com/media/wWAIKcFASEFz2/200.mp4",
				mp4_size: "10967",
				webp: "http://media2.giphy.com/media/wWAIKcFASEFz2/200.webp",
				webp_size: "186460"
			},
			fixed_height_still: {
				url: "http://media2.giphy.com/media/wWAIKcFASEFz2/200_s.gif",
				width: "358",
				height: "200"
			},
			fixed_height_downsampled: {
				url: "http://media3.giphy.com/media/wWAIKcFASEFz2/200_d.gif",
				width: "358",
				height: "200",
				size: "352636",
				webp: "http://media2.giphy.com/media/wWAIKcFASEFz2/200_d.webp",
				webp_size: "159946"
			},
			fixed_width: {
				url: "http://media3.giphy.com/media/wWAIKcFASEFz2/200w.gif",
				width: "200",
				height: "112",
				size: "51889",
				mp4: "http://media2.giphy.com/media/wWAIKcFASEFz2/200w.mp4",
				mp4_size: "16299",
				webp: "http://media2.giphy.com/media/wWAIKcFASEFz2/200w.webp",
				webp_size: "70302"
			},
			fixed_width_still: {
				url: "http://media1.giphy.com/media/wWAIKcFASEFz2/200w_s.gif",
				width: "200",
				height: "112"
			},
			fixed_width_downsampled: {
				url: "http://media2.giphy.com/media/wWAIKcFASEFz2/200w_d.gif",
				width: "200",
				height: "112",
				size: "131311",
				webp: "http://media2.giphy.com/media/wWAIKcFASEFz2/200w_d.webp",
				webp_size: "60336"
			},
			fixed_height_small: {
				url: "http://media2.giphy.com/media/wWAIKcFASEFz2/100.gif",
				width: "179",
				height: "100",
				size: "126220",
				webp: "http://media2.giphy.com/media/wWAIKcFASEFz2/100.webp",
				webp_size: "56790"
			},
			fixed_height_small_still: {
				url: "http://media2.giphy.com/media/wWAIKcFASEFz2/100_s.gif",
				width: "179",
				height: "100"
			},
			fixed_width_small: {
				url: "http://media2.giphy.com/media/wWAIKcFASEFz2/100w.gif",
				width: "100",
				height: "56",
				size: "51889",
				webp: "http://media2.giphy.com/media/wWAIKcFASEFz2/100w.webp",
				webp_size: "21266"
			},
			fixed_width_small_still: {
				url: "http://media2.giphy.com/media/wWAIKcFASEFz2/100w_s.gif",
				width: "100",
				height: "56"
			},
			downsized: {
				url: "http://media0.giphy.com/media/wWAIKcFASEFz2/giphy.gif",
				width: "500",
				height: "279",
				size: "508488"
			},
			downsized_still: {
				url: "http://media2.giphy.com/media/wWAIKcFASEFz2/giphy_s.gif",
				width: "500",
				height: "279"
			},
			downsized_large: {
				url: "http://media0.giphy.com/media/wWAIKcFASEFz2/giphy.gif",
				width: "500",
				height: "279",
				size: "508488"
			},
			original: {
				url: "http://media0.giphy.com/media/wWAIKcFASEFz2/giphy.gif",
				width: "500",
				height: "279",
				size: "508488",
				frames: "7",
				mp4: "http://media2.giphy.com/media/wWAIKcFASEFz2/giphy.mp4",
				mp4_size: "45225",
				webp: "http://media2.giphy.com/media/wWAIKcFASEFz2/giphy.webp",
				webp_size: "305416"
			},
			original_still: {
				url: "http://media2.giphy.com/media/wWAIKcFASEFz2/giphy_s.gif",
				width: "500",
				height: "279"
			}
		}        
	},
    "meta": {
        "status": 200,
        "msg": "OK"
    }
}`

## List of Server API

|Task|Method|
|-|-|
|Return a GIPHY Image|GET|
|Return a list of stories|GET|
|Save a user story|POST|
|Create a story |POST|

### Return a Giphy Image

|Method|EndPoint|Usage|Returns|
|-|-|-|-|
|GET|/api/giphy|Return a GIPHY Image|giphy|

#### Response
##### Status Codes:

* On success, the HTTP status code in the response header is 200 ('OK').
* In case of server error, the header status code is a 5xx error code and the response body contains an error object.

The get request returns a giphy object, containing the search term, Giphy image url (images.fixed_width.url).


	{   field0: {
			keyword: 'superman',
    	    		image:'http://media2.giphy.com/media/wWAIKcFASEFz2/200_s.gif'
		    }
	}



### Return a list of stories

|Method|EndPoint|Usage|Returns|
|-|-|-|-|
|GET|/api/stories|Return a list of stories|stories|

#### Response
##### Status Codes:

* On success, the HTTP status code in the response header is 200 ('OK').
* In case of server error, the header status code is a 5xx error code and the response body contains an error object.

The get request returns a stories object. Containing our stories from database.


    {   stories : [
        {
         "story_id":1,
         "title": "Princess",
         "story": "Once upon a time, a princess went into a castle then"
        },
        {
         "story_id":2,
         "title": "Frog",
         "story": "A frog goes into a pond and blah blah blah, it met a duck and blah blah blah"
        }
       ]
    }

### Save a user story

|Method|EndPoint|Usage|Returns|
|-|-|-|-|
|POST|/api/stories/save|Save a user story|user_story_id|

This post creates an entry in user stories table containing the story the user has submitted.

    {
        "user_id":1,
        "title": "Princess",
        "story":"Once upon a time, a princess went into a castle..."
    }

#### Response
##### Status Codes:
* If the user story is posted, the HTTP status code in the response header is 201 ('Created').
* In case of server error, the header status code is a 5xx error code and the response body contains an error object.

The server will return an object structured as following
    {
        "user_story_id:" 4
    }
