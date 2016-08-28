---
layout: post
title:  "Useful Terminal Networking Commands"
categories: Terminal Guides
author: Harry
---

Useful Terminal Networking Commands!

Obtain your computer's internal IP address:
{% highlight git bash %}
ipconfig getifaddr en0
{% endhighlight %}

Obtain your computer's external IP address:
{% highlight git bash %}
curl ipecho.net/plain; echo
{% endhighlight %}

Run a HTTP server for testing HTML files:
{% highlight git bash %}
python3 -m http.server 8000
{% endhighlight %}
Note:- type in your web browser: "http://localhost:8000" to view. 8000 is the port number, you can use port 80 if you wish.

Test your network connectivity:
{% highlight git bash %}
ping -c 10 www.apple.com
{% endhighlight %}
Note:- change "www.apple.com" to your chosen domain
