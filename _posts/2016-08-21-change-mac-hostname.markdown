---
layout: post
title:  "Change Mac Hostname"
categories: Terminal Guides
author: Harry
---

To change your hostname on mac, simply open up the terminal [command & space, type "terminal"] and enter the commands below;

{% highlight bash %}
scutil --get HostName
sudo scutil --set HostName 'yourHostName'
{% endhighlight %}

Note: Change 'yourHostName' to whatever you want

You will know if you have done this successfully if on the left of the terminal the hostname has changed to the new hostname!