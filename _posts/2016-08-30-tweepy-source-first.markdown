---
layout: post
title:  "Tweepy Module for the Twitter API"
categories: Python Guides
author: Harry
---

<style>
.mainbodytext {
	background-color: #3399ff;
}
</style>

<div class = "mainbodytext">

The code below utilises the Tweepy module specifically designed to interact with the Twitter API. 
In order to start using the Tweepy module yourself, you must follow these steps;

<br><br>
<strong>Step One:</strong>
<br>

Download Tweepy via the command line;
{% highlight git bash %}
pip install tweepy
{% endhighlight %}

<br>
<strong>Step Two:</strong>

Create an app and sign into your Twitter account by clicking <a href="https://apps.twitter.com">here</a>.
Once you have made the app, create a python script and copy the code below - you will require various keys and secrets which can be found in your app settings from the previous link:

{% highlight python %}
import tweepy
from tweepy import OAuthHandler
 
consumer_key = 'YOUR CONSUMER KEY'
consumer_secret = 'YOUR CONSUMER SECRET'
access_token = 'YOUR ACCESS TOKEN'
access_secret = 'YOUR ACCESS SECRET'
 
auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_secret)
 
api = tweepy.API(auth)

#Reads twitter timeline
public_tweets = api.home_timeline()
for tweet in public_tweets:
    print (tweet.text)
{% endhighlight %}

<br>
<strong>Step Three:</strong>

Visit the docs for loads of info:- <a href="http://tweepy.readthedocs.io/en/v3.5.0/getting_started.html">Tweepy Docs</a>

</div>




