---
layout: post
title:  "Tweepy Module for the Twitter API"
categories: Python Guides
author: Harry
---

The code below utilises the Tweepy module specifically designed to interact with the Twitter API. 
In order to start using the Tweepy module yourself, you must follow these steps;

<br>
<strong>Step One:</strong>

Download Tweepy via the command line;
{% highlight git bash %}
pip install tweepy
{% endhighlight %}

<br>
<strong>Step Two:</strong>

Create an app and sign into your Twitter account by clicking <a href="https://apps.twitter.com">here</a>.
Once you have made the app, create a python script and copy the code below - you will require various keys and secrets which can be found in your app settings from the previous link:

<div id="highlighterMainDiv_67259" class="syntaxhighlighter python"><div id="toolbarContainer_67259" class="toolbar"><span><a href="#" class="toolbar_item command_help help">?</a></span></div><table border="0" cellpadding="0" cellspacing="0"><tbody><tr><td>&nbsp;</td></tr><tr><td class="gutter"><div class="line number1 index0 alt2">01</div><div class="line number2 index1 alt1">02</div><div class="line number3 index2 alt2">03</div><div class="line number4 index3 alt1">04</div><div class="line number5 index4 alt2">05</div><div class="line number6 index5 alt1">06</div><div class="line number7 index6 alt2">07</div><div class="line number8 index7 alt1">08</div><div class="line number9 index8 alt2">09</div><div class="line number10 index9 alt1">10</div><div class="line number11 index10 alt2">11</div><div class="line number12 index11 alt1">12</div><div class="line number13 index12 alt2">13</div><div class="line number14 index13 alt1">14</div><div class="line number15 index14 alt2">15</div><div class="line number16 index15 alt1">16</div><div class="line number17 index16 alt2">17</div></td><td id="codeContainer_67259" class="code"><div id="container_67259" class="container"><div class="line number1 index0 alt2"><code class="python keyword">import</code> <code class="python plain">tweepy</code></div><div class="line number2 index1 alt1"><code class="python keyword">from</code> <code class="python plain">tweepy </code><code class="python keyword">import</code> <code class="python plain">OAuthHandler</code></div><div class="line number3 index2 alt2">&nbsp;</div><div class="line number4 index3 alt1"><code class="python plain">consumer_key </code><code class="python keyword">=</code> <code class="python string">'YOUR CONSUMER KEY'</code></div><div class="line number5 index4 alt2"><code class="python plain">consumer_secret </code><code class="python keyword">=</code> <code class="python string">'YOUR CONSUMER SECRET'</code></div><div class="line number6 index5 alt1"><code class="python plain">access_token </code><code class="python keyword">=</code> <code class="python string">'YOUR ACCESS TOKEN'</code></div><div class="line number7 index6 alt2"><code class="python plain">access_secret </code><code class="python keyword">=</code> <code class="python string">'YOUR ACCESS SECRET'</code></div><div class="line number8 index7 alt1"><code class="python spaces">&nbsp;</code>&nbsp;</div><div class="line number9 index8 alt2"><code class="python plain">auth </code><code class="python keyword">=</code> <code class="python plain">tweepy.OAuthHandler(consumer_key, consumer_secret)</code></div><div class="line number10 index9 alt1"><code class="python plain">auth.set_access_token(access_token, access_secret)</code></div><div class="line number11 index10 alt2"><code class="python spaces">&nbsp;</code>&nbsp;</div><div class="line number12 index11 alt1"><code class="python plain">api </code><code class="python keyword">=</code> <code class="python plain">tweepy.API(auth)</code></div><div class="line number13 index12 alt2">&nbsp;</div><div class="line number14 index13 alt1"><code class="python comments">#Reads twitter timeline</code></div><div class="line number15 index14 alt2"><code class="python plain">public_tweets </code><code class="python keyword">=</code> <code class="python plain">api.home_timeline()</code></div><div class="line number16 index15 alt1"><code class="python keyword">for</code> <code class="python plain">tweet </code><code class="python keyword">in</code> <code class="python plain">public_tweets:</code></div><div class="line number17 index16 alt2"><code class="python spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="python functions">print</code> <code class="python plain">(tweet.text)</code></div></div></td></tr><tr><td>&nbsp;</td></tr><tr><td>&nbsp;</td></tr></tbody></table></div>

<pre id="presourcecode_67259" class="displaysourcecode" >
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
</pre>





<br>
<strong>Step Three:</strong>

Visit the docs for loads of info:- <a href="http://tweepy.readthedocs.io/en/v3.5.0/getting_started.html">Tweepy Docs</a>

<script type="text/javascript" src="http://ajblk.github.io/SyntaxHighlightGenerator-v3.0/scripts/sh-v3.0-min.js"></script>
<link type="text/css" rel="stylesheet" href="http://ajblk.github.io/SyntaxHighlightGenerator-v3.0/styles/shCoreEclipse.css"/>

<script type="text/javascript">SyntaxHighlighter.initialize();</script>

